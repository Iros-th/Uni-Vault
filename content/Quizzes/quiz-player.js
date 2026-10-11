/* Quiz-afspilning: afspiller for "quiz mens du ser" (UniVault).
   Indlæses af Quiz-afspilning.md via en lille boot-hook, fordi Quartz HTML-escaper
   inline <script> i noter (så de aldrig kører). Data: Quizzes/<videoId>.json, Quizzes/index.json.
   Genereres af tools/videoquiz/videoquiz.py. */
(function () {
  "use strict";
  if (window.__vqBooted) { if (window.__vq && window.__vq.init) window.__vq.init(); return; }
  window.__vqBooted = true;

  var SR_KEY = "univault-sr-v1";          // samme lager som Studie
  var VQ_KEY = "univault-videoquiz-v1";   // fremgang per video
  var DAY = 86400000;
  var POLL_MS = 250;

  // ---- Sti-hjælpere (samme som Studie) ---------------------------------------
  function siteRoot() {
    var u = new URL(location.href);
    u.hash = ""; u.search = "";
    var p = u.pathname;
    if (p.endsWith("/")) p = p.slice(0, -1);
    return u.origin + p.slice(0, p.lastIndexOf("/") + 1);
  }
  function getJSON(path) {
    return fetch(siteRoot() + path, { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error(r.status + " " + path);
      return r.json();
    });
  }

  // ---- Lager ----------------------------------------------------------------
  function load(key) { try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : {}; } catch (e) { return {}; } }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) { /* privat tilstand */ } }

  // Kopi af Studie's schedule(), så tilstanden er identisk med det Studie selv skriver.
  function schedule(state, rating) {
    state = state || { reps: 0, ease: 2.5, interval: 0, due: 0 };
    var now = Date.now();
    state.requeue = false;
    if (rating === "again") {
      state.reps = 0; state.ease = Math.max(1.3, (state.ease || 2.5) - 0.2);
      state.interval = 0; state.due = now; state.requeue = true;
    } else if (rating === "good") {
      state.reps = (state.reps || 0) + 1;
      state.interval = state.interval === 0 ? 1 : state.interval * (state.ease || 2.5);
      state.due = now + state.interval * DAY;
    }
    return state;
  }

  function cardId(quiz, q) { return quiz.deck_slug + "::" + q.card_index; }

  // Forkert -> kortet forfalder nu i Genlær. Rigtigt -> kun hvis kortet er nyt, planlæg det som "God".
  function recordAnswer(quiz, q, correct) {
    var sr = load(SR_KEY), id = cardId(quiz, q);
    if (!correct) sr[id] = schedule(sr[id], "again");
    else if (!sr[id]) sr[id] = schedule(null, "good");
    save(SR_KEY, sr);
    var vq = load(VQ_KEY), p = vq[quiz.videoId] || (vq[quiz.videoId] = { done: {}, answers: {} });
    p.answers[q.card_index] = correct ? "right" : "wrong";
    save(VQ_KEY, vq);
    return sr[id];
  }

  function progress(vid) {
    var vq = load(VQ_KEY);
    return vq[vid] || { done: {}, answers: {} };
  }
  function setProgress(vid, fn) {
    var vq = load(VQ_KEY), p = vq[vid] || (vq[vid] = { done: {}, answers: {} });
    fn(p); save(VQ_KEY, vq);
  }

  // Det seneste vindue hvis slutning er passeret, og som ikke er taget endnu. -1 = intet.
  function findDueWindow(windows, t, done) {
    var last = -1;
    for (var i = 0; i < windows.length; i++) if (windows[i].end <= t + 0.3) last = i;
    if (last < 0) return -1;
    if (done[last] || !windows[last].questions.length) return -1;
    return last;
  }

  // ---- Matematik ($...$) via KaTeX, ellers rå tekst ---------------------------
  var katexP = null;
  function loadKatex() {
    if (window.katex) return Promise.resolve(window.katex);
    if (!katexP) katexP = new Promise(function (res) {
      var s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.js";
      s.onload = function () { res(window.katex || null); };
      s.onerror = function () { res(null); };
      document.head.appendChild(s);
    });
    return katexP;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  // Modellen glemmer nogle gange $...$ om ren matematik (fx "y = C e^{x^3}"). Er der LaTeX-tegn men ingen ord, så rendér det hele som matematik.
  function bareMath(s) {
    s = String(s || "");
    if (s.indexOf("$") !== -1 || !/\\[a-zA-Z]+|[\^_]\{|\^\d/.test(s)) return s;
    return /[A-Za-zæøåÆØÅ]{4,}/.test(s.replace(/\\[a-zA-Z]+/g, "")) ? s : "$" + s + "$";
  }
  function md(s) {
    var parts = bareMath(s).split(/(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g), out = "";
    parts.forEach(function (p) {
      var disp = /^\$\$[\s\S]+\$\$$/.test(p), inl = !disp && /^\$[^$]+\$$/.test(p);
      if ((disp || inl) && window.katex) {
        try { out += window.katex.renderToString(p.slice(disp ? 2 : 1, disp ? -2 : -1), { throwOnError: false, displayMode: disp }); return; } catch (e) {}
      }
      out += esc(p).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    });
    return out;
  }
  function mmss(t) { t = Math.max(0, Math.round(t)); var m = Math.floor(t / 60), s = t % 60; return m + ":" + (s < 10 ? "0" : "") + s; }

  // ---- YouTube IFrame API -----------------------------------------------------
  var ytP = null;
  function loadYT() {
    if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
    if (!ytP) ytP = new Promise(function (res) {
      var prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function () { if (typeof prev === "function") prev(); res(window.YT); };
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        var s = document.createElement("script");
        s.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(s);
      }
    });
    return ytP;
  }

  // ---- Tilstand ---------------------------------------------------------------
  var S = null; // { quiz, player, timer, quizzing, win, qi, results, resumeAt }

  function teardown() {
    if (S) {
      if (S.timer) clearInterval(S.timer);
      try { if (S.player && S.player.destroy) S.player.destroy(); } catch (e) {}
    }
    S = null;
  }

  // ---- Oversigt -----------------------------------------------------------------
  function renderPicker(msg) {
    var picker = document.getElementById("vq-picker"), stage = document.getElementById("vq-stage");
    stage.hidden = true; picker.hidden = false;
    picker.innerHTML = '<div class="studie-card studie-panel"><p class="studie-loading">Indlæser videoer …</p></div>';
    getJSON("Quizzes/index.json").then(function (idx) {
      var by = {};
      (idx.videos || []).forEach(function (v) { (by[v.course || "Andet"] = by[v.course || "Andet"] || []).push(v); });
      var html = '<div class="studie-card studie-panel">' + (msg ? "<p>" + esc(msg) + "</p>" : "");
      Object.keys(by).sort().forEach(function (c) {
        html += "<div><h3>" + esc(c) + '</h3><ul class="vq-list">';
        by[c].forEach(function (v) {
          var p = progress(v.videoId), n = Object.keys(p.answers || {}).length;
          html += '<li><a href="?v=' + encodeURIComponent(v.videoId) + '" data-vid="' + esc(v.videoId) + '">' + esc(v.title) + "</a>" +
            '<span class="vq-meta">' + v.questions + " spørgsmål" + (n ? " · " + n + " besvaret" : "") + "</span></li>";
        });
        html += "</ul></div>";
      });
      picker.innerHTML = html + "</div>";
      picker.querySelectorAll("a[data-vid]").forEach(function (a) {
        a.addEventListener("click", function (e) {
          e.preventDefault(); e.stopPropagation();
          history.pushState({}, "", "?v=" + encodeURIComponent(a.getAttribute("data-vid")));
          route();
        });
      });
    }).catch(function () {
      picker.innerHTML = '<div class="studie-card studie-panel"><p>Kunne ikke hente oversigten over videoquizzer.</p></div>';
    });
  }

  // ---- Afspiller --------------------------------------------------------------
  function openVideo(vid) {
    var picker = document.getElementById("vq-picker"), stage = document.getElementById("vq-stage");
    picker.hidden = true; stage.hidden = false;
    stage.innerHTML = '<div class="studie-card studie-panel"><p class="studie-loading">Henter quiz …</p></div>';
    Promise.all([getJSON("Quizzes/" + vid + ".json"), loadKatex()]).then(function (r) {
      var quiz = r[0];
      teardown();
      S = { quiz: quiz, player: null, timer: null, quizzing: false, win: -1, qi: 0, results: [], resumeAt: 0 };
      var nq = quiz.windows.reduce(function (a, w) { return a + w.questions.length; }, 0);
      var pr = progress(vid);
      stage.innerHTML =
        '<div class="vq-head"><h3>' + esc(quiz.title) + '</h3><button type="button" class="studie-link" id="vq-back">← Alle videoer</button></div>' +
        '<div class="vq-video"><div id="vq-player"></div></div>' +
        '<div class="vq-timeline" id="vq-timeline"><div class="vq-timeline-fill" id="vq-fill"></div></div>' +
        '<div class="vq-bar"><span id="vq-status">' + quiz.windows.length + " stop · " + nq + " spørgsmål" +
          (quiz.channel ? " · " + esc(quiz.channel) : "") + "</span>" +
          '<span><label><input type="checkbox" id="vq-auto"' + (pr.noPause ? "" : " checked") + "> Stop for quiz</label> · " +
          '<button type="button" class="studie-link" id="vq-reset">Nulstil fremgang</button></span></div>' +
        '<div id="vq-quiz" class="vq-quiz" tabindex="-1" hidden></div>';
      document.getElementById("vq-back").addEventListener("click", function () {
        teardown(); history.pushState({}, "", location.pathname); route();
      });
      document.getElementById("vq-auto").addEventListener("change", function (e) {
        setProgress(vid, function (p) { p.noPause = !e.target.checked; });
      });
      document.getElementById("vq-reset").addEventListener("click", function () {
        setProgress(vid, function (p) { p.done = {}; p.answers = {}; p.last = 0; });
        drawTimeline();
      });
      drawTimeline();
      return loadYT().then(function (YT) {
        if (!S || S.quiz !== quiz) return;
        S.player = new YT.Player("vq-player", {
          videoId: vid,
          playerVars: { rel: 0, modestbranding: 1, playsinline: 1, start: Math.floor(pr.last || 0) },
          events: {
            onReady: function () { startPolling(); },
            onStateChange: function (e) {
              if (e.data === 0 && S && !S.quizzing) { // ENDED: tag sidste vindue hvis det mangler
                var d = progress(vid).done, i = S.quiz.windows.length - 1;
                if (i >= 0 && !d[i] && S.quiz.windows[i].questions.length) openQuiz(i);
              }
            }
          }
        });
      });
    }).catch(function (e) {
      stage.innerHTML = '<div class="studie-card studie-panel"><p>Der findes ingen quiz til denne video endnu (' + esc(vid) + ").</p>" +
        '<div class="studie-actions"><button type="button" class="studie-btn studie-btn-ghost" id="vq-back">Tilbage</button></div></div>';
      document.getElementById("vq-back").addEventListener("click", function () { history.pushState({}, "", location.pathname); route(); });
    });
  }

  function drawTimeline() {
    if (!S) return;
    var tl = document.getElementById("vq-timeline");
    if (!tl) return;
    var wins = S.quiz.windows, dur = (S.player && S.player.getDuration && S.player.getDuration()) || wins[wins.length - 1].end || 1;
    var p = progress(S.quiz.videoId);
    tl.querySelectorAll(".vq-mark").forEach(function (m) { m.remove(); });
    wins.forEach(function (w, i) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "vq-mark";
      var st = p.done[i];
      if (!w.questions.length) b.className += " empty";
      else if (st === "skip") b.className += " skip";
      else if (st) {
        var bad = w.questions.some(function (q) { return (p.answers || {})[q.card_index] === "wrong"; });
        b.className += bad ? " bad" : " ok";
      }
      b.style.left = Math.min(100, (w.end / dur) * 100) + "%";
      b.title = "Stop " + (i + 1) + " ved " + mmss(w.end) + " (" + w.questions.length + " spørgsmål)";
      b.setAttribute("aria-label", b.title);
      if (w.questions.length) b.addEventListener("click", function () { if (!S.quizzing) openQuiz(i, true); });
      tl.appendChild(b);
    });
  }

  function startPolling() {
    if (!S) return;
    if (S.timer) clearInterval(S.timer);
    var lastSave = 0;
    S.timer = setInterval(function () {
      if (!S || !S.player || !S.player.getCurrentTime) return;
      if (!document.getElementById("vq-player") && !document.querySelector("#vq-stage iframe")) { teardown(); return; }
      var t = S.player.getCurrentTime() || 0, dur = S.player.getDuration ? S.player.getDuration() : 0;
      var fill = document.getElementById("vq-fill");
      if (fill && dur) fill.style.width = Math.min(100, (t / dur) * 100) + "%";
      if (S.quizzing) return;
      var playing = S.player.getPlayerState && S.player.getPlayerState() === 1;
      if (playing && Date.now() - lastSave > 5000) { lastSave = Date.now(); setProgress(S.quiz.videoId, function (p) { p.last = t; }); }
      var p = progress(S.quiz.videoId);
      if (!playing || p.noPause) return;
      var i = findDueWindow(S.quiz.windows, t, p.done);
      if (i >= 0) openQuiz(i);
    }, POLL_MS);
  }

  function openQuiz(i, retake) {
    if (!S) return;
    var w = S.quiz.windows[i];
    var now = 0; try { now = S.player.getCurrentTime() || 0; } catch (e) {}
    try { S.player.pauseVideo(); } catch (e) {}
    S.quizzing = true; S.win = i; S.qi = 0; S.results = [];
    S.resumeAt = retake ? now : w.end;
    renderQuestion();
    var box = document.getElementById("vq-quiz");
    box.hidden = false;
    try { box.focus({ preventScroll: true }); box.scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
  }

  function closeQuiz(status) {
    if (!S) return;
    var i = S.win, vid = S.quiz.videoId;
    setProgress(vid, function (p) { p.done[i] = status; p.last = S.resumeAt; });
    S.quizzing = false; S.win = -1;
    var box = document.getElementById("vq-quiz");
    box.hidden = true; box.innerHTML = "";
    drawTimeline();
    try {
      var t = S.player.getCurrentTime();
      if (Math.abs(t - S.resumeAt) > 2) S.player.seekTo(S.resumeAt, true);
      S.player.playVideo();
    } catch (e) {}
  }

  function seekClip(t) {
    try { S.player.seekTo(Math.max(0, t - 3), true); S.player.playVideo(); } catch (e) {}
  }

  function renderQuestion() {
    var box = document.getElementById("vq-quiz"), w = S.quiz.windows[S.win], qs = w.questions;
    if (S.qi >= qs.length) return renderSummary();
    var q = qs[S.qi];
    var html = '<div class="studie-card">' +
      '<div class="studie-topbar"><span class="studie-badge">Stop ' + (S.win + 1) + " · " + mmss(w.start) + "-" + mmss(w.end) + "</span>" +
      '<span class="studie-counter">Spørgsmål ' + (S.qi + 1) + " af " + qs.length + "</span></div>" +
      '<div class="studie-progress"><div class="studie-progress-bar" style="width:' + Math.round(S.qi / qs.length * 100) + '%"></div></div>' +
      '<div class="vq-q">' + md(q.question) + "</div>";
    if (q.type === "mc") {
      html += '<div class="vq-options">' + q.options.map(function (o, k) {
        return '<button type="button" class="vq-opt" data-k="' + k + '"><span class="vq-key">' + "ABCD"[k] + "</span>" + md(o) + "</button>";
      }).join("") + "</div>";
    } else {
      html += '<textarea class="vq-answer" id="vq-answer" placeholder="Skriv dit svar eller næste skridt (valgfrit), og vis så facit"></textarea>' +
        '<div class="studie-controls"><button type="button" class="studie-btn studie-btn-primary" id="vq-show">Vis svar</button></div>';
    }
    html += '<div id="vq-fb"></div><div class="studie-footer">' +
      '<button type="button" class="studie-link" id="vq-skip">Spring quiz over og fortsæt ▶</button></div></div>';
    box.innerHTML = html;
    document.getElementById("vq-skip").addEventListener("click", function () { closeQuiz(S.results.length ? "partial" : "skip"); });
    if (q.type === "mc") {
      box.querySelectorAll(".vq-opt").forEach(function (b) {
        b.addEventListener("click", function () { answerMC(q, +b.getAttribute("data-k")); });
      });
    } else {
      document.getElementById("vq-show").addEventListener("click", function () { revealShort(q); });
    }
  }

  function feedbackHTML(q, ok, lead) {
    return '<div class="vq-feedback' + (ok ? "" : " bad") + '"><p>' + lead + "</p><p>" + md(q.explanation.replace(/\s*\(\d+:\d\d(?::\d\d)?\)\s*$/, "")) +
      ' <button type="button" class="vq-ts" data-t="' + q.t + '">▶ ' + mmss(q.t) + "</button></p></div>" +
      '<div class="studie-controls"><button type="button" class="studie-btn studie-btn-primary" id="vq-next">' +
      (S.qi + 1 < S.quiz.windows[S.win].questions.length ? "Næste spørgsmål →" : "Færdig") + "</button></div>";
  }
  function wireFeedback() {
    var ts = document.querySelector("#vq-fb .vq-ts");
    if (ts) ts.addEventListener("click", function () { seekClip(+ts.getAttribute("data-t")); });
    var nx = document.getElementById("vq-next");
    if (nx) { nx.addEventListener("click", function () { S.qi++; renderQuestion(); }); try { nx.focus({ preventScroll: true }); } catch (e) {} }
  }

  function answerMC(q, k) {
    var ok = k === q.answer_index;
    document.querySelectorAll("#vq-quiz .vq-opt").forEach(function (b, j) {
      b.disabled = true;
      if (j === q.answer_index) b.classList.add("correct");
      else if (j === k) b.classList.add("wrong");
    });
    recordAnswer(S.quiz, q, ok);
    S.results.push(ok);
    document.getElementById("vq-fb").innerHTML = feedbackHTML(q, ok, ok ? "<strong>Rigtigt.</strong>" :
      "<strong>Ikke helt.</strong> Svaret er " + "ABCD"[q.answer_index] + ". Kortet er lagt i Genlær i Studie.");
    wireFeedback();
  }

  function revealShort(q) {
    var ctl = document.getElementById("vq-show");
    if (ctl) ctl.parentNode.remove();
    var ta = document.getElementById("vq-answer");
    if (ta) ta.readOnly = true;
    var fb = document.getElementById("vq-fb");
    fb.innerHTML = '<div class="vq-feedback"><p><strong>Facit:</strong> ' + md(q.answer) + "</p></div>" +
      '<div class="studie-ratings"><button type="button" class="studie-btn studie-rate studie-again" id="vq-wrong">Jeg havde det forkert</button>' +
      '<button type="button" class="studie-btn studie-rate studie-good" id="vq-right">Jeg havde det</button></div>';
    function grade(ok) {
      recordAnswer(S.quiz, q, ok);
      S.results.push(ok);
      fb.innerHTML = feedbackHTML(q, ok, ok ? "<strong>Godt.</strong> Facit: " + md(q.answer) : "<strong>Facit:</strong> " + md(q.answer) + ". Kortet er lagt i Genlær i Studie.");
      wireFeedback();
    }
    document.getElementById("vq-wrong").addEventListener("click", function () { grade(false); });
    document.getElementById("vq-right").addEventListener("click", function () { grade(true); });
  }

  function renderSummary() {
    var box = document.getElementById("vq-quiz");
    var ok = S.results.filter(Boolean).length, n = S.results.length;
    box.innerHTML = '<div class="studie-card studie-panel studie-done"><h3>' + ok + " af " + n + " rigtige</h3>" +
      "<p>" + (ok === n ? "Flot, videre." : (n - ok) + " kort er lagt i Genlær i Studie.") + "</p>" +
      '<div class="studie-actions"><button type="button" class="studie-btn studie-btn-primary" id="vq-continue">Fortsæt video ▶</button></div></div>';
    var c = document.getElementById("vq-continue");
    c.addEventListener("click", function () { closeQuiz("done"); });
    try { c.focus({ preventScroll: true }); } catch (e) {}
  }

  // Tastatur: 1-4 / A-D vælger svar, Enter = næste
  document.addEventListener("keydown", function (e) {
    if (!S || !S.quizzing || /TEXTAREA|INPUT|SELECT/.test((e.target && e.target.tagName) || "")) return;
    var k = "1234".indexOf(e.key); if (k < 0) k = "abcd".indexOf((e.key || "").toLowerCase());
    var opts = document.querySelectorAll("#vq-quiz .vq-opt:not([disabled])");
    if (k >= 0 && opts[k]) { e.preventDefault(); opts[k].click(); }
  });

  // ---- Routing / init (SPA-sikker som Studie) ----------------------------------
  // ?v=<id> (direkte links) eller #v-<hex af id> (links fra noter; Quartz fjerner ?v= og laver anker om til små bogstaver)
  function videoFromUrl() {
    var v = new URLSearchParams(location.search).get("v");
    if (v) return v;
    var m = /^#v-([0-9a-f]{22})$/i.exec(location.hash || "");
    if (!m) return null;
    var out = "";
    for (var i = 0; i < 22; i += 2) out += String.fromCharCode(parseInt(m[1].substr(i, 2), 16));
    return out;
  }
  function route() {
    var app = document.getElementById("vq-app");
    if (!app) { teardown(); return; }
    var vid = videoFromUrl();
    app.setAttribute("data-vq-route", location.search + location.hash);
    if (vid && /^[A-Za-z0-9_-]{11}$/.test(vid)) openVideo(vid);
    else { teardown(); renderPicker(); }
  }
  function init() {
    var app = document.getElementById("vq-app");
    if (!app) { teardown(); return; }
    // SPA-navigation kan kalde init før URL'en er opdateret; rout igen hvis ?v= har ændret sig.
    if (app.getAttribute("data-vq-init") === "true" && app.getAttribute("data-vq-route") === location.search + location.hash) return;
    app.setAttribute("data-vq-init", "true");
    app.setAttribute("data-vq-route", location.search + location.hash);
    route();
  }
  window.__vq = { init: init, findDueWindow: findDueWindow, schedule: schedule, recordAnswer: recordAnswer, md: md, state: function () { return S; } };
  window.addEventListener("popstate", function () { if (document.getElementById("vq-app")) route(); });
  window.addEventListener("hashchange", function () { if (document.getElementById("vq-app")) route(); });
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
  document.addEventListener("nav", init);
})();
