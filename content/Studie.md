---
title: Studie
publish: true
type: tool
tags:
  - studie
  - flashcards
  - selvtest
  - repetition
---

# Studie

Et samlet træningsrum, der henter kortene direkte fra dine [[Flashcards/Flashcards|flashcards]] og [[Self-Tests/Self-Tests|selv-tests]]. Vælg et fag og en tilstand, og gå i gang. Alt kører lokalt i din browser, uden internetopkald udover at hente selve noterne, så din fremgang bliver på din egen maskine.

Der er tre tilstande:

- **Lær** introducerer ét begreb ad gangen. Du ser spørgsmålet, tænker efter, og afslører så forklaringen. God til første gennemgang af et nyt emne.
- **Test** stiller spørgsmålene i tilfældig rækkefølge. Du svarer selv, afslører facit, og bedømmer dig selv med Igen, Svær, God eller Let. Ingen karakter gemmes.
- **Genlær** er spaced repetition. Kort du bedømmer Igen eller Svær kommer hurtigt igen og gentages, indtil de sidder fast. Din fremgang huskes per kort, så du kan fortsætte en anden dag.

<div id="studie-app" class="studie" data-studie-init="false">
  <div id="studie-setup" class="studie-setup"></div>
  <div id="studie-session" class="studie-session" hidden></div>
</div>

Se også: [[Flashcards/Flashcards|Flashcards]], [[Self-Tests/Self-Tests|Selv-tests]], [[Exam-Prep|Eksamensforberedelse]] og [[Study-Roadmap|Studieoversigt]].

<script>
(function () {
  "use strict";

  var SR_KEY = "univault-sr-v1";
  var DAY = 86400000;

  // ---- Fag-navne udledt af titlen (dansk visning) ----------------------------
  var SUBJECT_MAP = {
    "programming": "Programmering",
    "chemistry": "Kemi",
    "physics": "Fysik",
    "statistics": "Statistik",
    "proofs": "Beviser",
    "discrete math": "Diskret matematik",
    "diskret matematik": "Diskret matematik",
    "matematik 1a": "Matematik 1A",
    "differential equations": "Differentialligninger",
    "numerical algorithms": "Numeriske algoritmer",
    "mathematical modelling": "Matematisk modellering"
  };

  function cleanTitle(t) {
    return (t || "")
      .replace(/\s+Flashcards$/i, "")
      .replace(/\s+Test$/i, "")
      .replace(/\s+Selvtest$/i, "")
      .replace(/\s+Self-?Test$/i, "")
      .trim();
  }

  function subjectOf(title) {
    var base = cleanTitle(title);
    var key = base.toLowerCase();
    if (SUBJECT_MAP[key]) return SUBJECT_MAP[key];
    // enkelte engelske ord -> dansk hvis kendt
    for (var k in SUBJECT_MAP) {
      if (key.indexOf(k) !== -1) return SUBJECT_MAP[k];
    }
    return base || "Andet";
  }

  // ---- Sti-hjælpere ----------------------------------------------------------
  function siteRoot() {
    var u = new URL(location.href);
    u.hash = "";
    u.search = "";
    var p = u.pathname;
    if (p.endsWith("/")) p = p.slice(0, -1);
    var root = p.slice(0, p.lastIndexOf("/") + 1);
    return u.origin + root;
  }

  function pageURL(slug) {
    return siteRoot() + slug;
  }

  async function loadIndex() {
    try {
      if (typeof fetchData !== "undefined" && fetchData) {
        return await fetchData;
      }
    } catch (e) { /* falder igennem */ }
    var r = await fetch(siteRoot() + "static/contentIndex.json");
    return await r.json();
  }

  // ---- Find kortbunker via tags ---------------------------------------------
  function discoverDecks(index) {
    var decks = [];
    for (var slug in index) {
      if (!Object.prototype.hasOwnProperty.call(index, slug)) continue;
      var entry = index[slug];
      var tags = (entry && entry.tags) || [];
      // Spring oversigtssiderne over (de er mærket "revision" og har ingen kort).
      if (tags.indexOf("revision") !== -1) continue;
      var isFlash = tags.indexOf("flashcards") !== -1;
      var isTest = tags.indexOf("self-test") !== -1 || tags.indexOf("selvtest") !== -1;
      if (!isFlash && !isTest) continue;
      decks.push({
        slug: slug,
        title: entry.title || slug,
        subject: subjectOf(entry.title || slug),
        type: isFlash ? "flashcards" : "selvtest",
        cards: null
      });
    }
    decks.sort(function (a, b) {
      if (a.subject !== b.subject) return a.subject.localeCompare(b.subject, "da");
      return a.title.localeCompare(b.title, "da");
    });
    return decks;
  }

  // ---- Hent og udtræk kort fra en renderet side ------------------------------
  var domParser = new DOMParser();

  function stripLeadingNumber(p) {
    // Fjern et ledende "<strong>1.</strong>" fra et selv-test-spørgsmål.
    var clone = p.cloneNode(true);
    var first = clone.querySelector("strong");
    if (first && /^\s*\d+\.?\s*$/.test(first.textContent)) {
      first.remove();
    }
    return clone.innerHTML.trim();
  }

  async function fetchDeckCards(deck) {
    if (deck.cards) return deck.cards;
    var cards = [];
    try {
      var res = await fetch(pageURL(deck.slug));
      if (!res.ok) { deck.cards = cards; return cards; }
      var html = await res.text();
      var doc = domParser.parseFromString(html, "text/html");
      var root = doc.querySelector(".popover-hint") || doc.body;
      var callouts = root.querySelectorAll(".callout");
      var idx = 0;
      callouts.forEach(function (co) {
        var kind = (co.getAttribute("data-callout") || "").toLowerCase();
        var contentEl = co.querySelector(".callout-content");
        if (!contentEl) return;
        var back = contentEl.innerHTML.trim();
        if (!back) return;
        var front = "";
        if (kind === "question") {
          var ti = co.querySelector(".callout-title-inner");
          front = ti ? ti.innerHTML.trim() : "";
        } else {
          // selv-test: spørgsmålet er afsnittet lige før callout'en
          var prev = co.previousElementSibling;
          while (prev && prev.tagName !== "P" && prev.tagName !== "H2" && prev.tagName !== "H3") {
            prev = prev.previousElementSibling;
          }
          if (prev && prev.tagName === "P") {
            front = stripLeadingNumber(prev);
          }
        }
        if (!front) return;
        cards.push({
          id: deck.slug + "::" + idx,
          front: front,
          back: back,
          deckTitle: deck.title,
          subject: deck.subject
        });
        idx++;
      });
    } catch (e) {
      /* spring bunken over ved fejl */
    }
    deck.cards = cards;
    return cards;
  }

  // ---- Spaced repetition -----------------------------------------------------
  function loadSR() {
    try {
      var raw = localStorage.getItem(SR_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveSR(store) {
    try {
      localStorage.setItem(SR_KEY, JSON.stringify(store));
    } catch (e) { /* privat tilstand e.l. - fortsæt uden at gemme */ }
  }

  function schedule(state, rating) {
    state = state || { reps: 0, ease: 2.5, interval: 0, due: 0 };
    var now = Date.now();
    state.requeue = false;
    if (rating === "again") {
      state.reps = 0;
      state.ease = Math.max(1.3, (state.ease || 2.5) - 0.2);
      state.interval = 0;
      state.due = now;
      state.requeue = true;
    } else if (rating === "hard") {
      state.ease = Math.max(1.3, (state.ease || 2.5) - 0.15);
      state.interval = state.interval > 0 ? state.interval * 1.2 : 0.5;
      state.due = now + state.interval * DAY;
      state.requeue = true;
    } else if (rating === "good") {
      state.reps = (state.reps || 0) + 1;
      state.interval = state.interval === 0 ? 1 : state.interval * (state.ease || 2.5);
      state.due = now + state.interval * DAY;
    } else if (rating === "easy") {
      state.reps = (state.reps || 0) + 1;
      state.ease = (state.ease || 2.5) + 0.15;
      state.interval = state.interval === 0 ? 2 : state.interval * (state.ease) * 1.3;
      state.due = now + state.interval * DAY;
    }
    return state;
  }

  function isDue(store, cardId) {
    var s = store[cardId];
    if (!s) return true;
    return (s.due || 0) <= Date.now();
  }

  // ---- Session-tilstand ------------------------------------------------------
  var allDecks = [];
  var session = null;

  function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    return arr;
  }

  function subjects() {
    var seen = {};
    var list = [];
    allDecks.forEach(function (d) {
      // Vis kun fag der enten ikke er hentet endnu, eller faktisk har kort.
      if (d.cards !== null && d.cards.length === 0) return;
      if (!seen[d.subject]) { seen[d.subject] = true; list.push(d.subject); }
    });
    list.sort(function (a, b) { return a.localeCompare(b, "da"); });
    return list;
  }

  // ---- Opsætnings-skærm ------------------------------------------------------
  function renderSetup() {
    var setup = document.getElementById("studie-setup");
    var sess = document.getElementById("studie-session");
    if (!setup) return;
    sess.hidden = true;
    setup.hidden = false;

    var subs = subjects();
    var store = loadSR();

    var subjectOptions = ['<option value="__all__">Alle fag</option>'];
    subs.forEach(function (s) {
      subjectOptions.push('<option value="' + s.replace(/"/g, "&quot;") + '">' + s + "</option>");
    });

    // Kort-tæller for genlær-statistik
    var totalCards = 0, learnedCards = 0, dueCards = 0;
    allDecks.forEach(function (d) {
      if (!d.cards) return;
      d.cards.forEach(function (c) {
        totalCards++;
        var st = store[c.id];
        if (st && (st.reps || 0) > 0) learnedCards++;
        if (isDue(store, c.id)) dueCards++;
      });
    });
    var statsLine = totalCards
      ? '<p class="studie-stats">Fremgang: <strong>' + learnedCards + "</strong> af " + totalCards +
        " kort er påbegyndt. <strong>" + dueCards + "</strong> forfalder til genlæring nu.</p>"
      : "";

    setup.innerHTML =
      '<div class="studie-card studie-panel">' +
        '<div class="studie-field">' +
          '<label for="studie-subject">Fag</label>' +
          '<select id="studie-subject">' + subjectOptions.join("") + "</select>" +
        "</div>" +
        '<div class="studie-field">' +
          "<span>Tilstand</span>" +
          '<div class="studie-modes" role="radiogroup" aria-label="Tilstand">' +
            '<button type="button" class="studie-mode selected" data-mode="learn">Lær</button>' +
            '<button type="button" class="studie-mode" data-mode="test">Test</button>' +
            '<button type="button" class="studie-mode" data-mode="relearn">Genlær</button>' +
          "</div>" +
          '<p class="studie-mode-hint" id="studie-mode-hint">Introducér ét begreb ad gangen og afslør forklaringen.</p>' +
        "</div>" +
        '<div class="studie-actions">' +
          '<button type="button" class="studie-btn studie-btn-primary" id="studie-start">Start</button>' +
          '<button type="button" class="studie-btn studie-btn-ghost" id="studie-reset">Nulstil fremgang</button>' +
        "</div>" +
        statsLine +
      "</div>";

    var mode = "learn";
    var hints = {
      learn: "Introducér ét begreb ad gangen og afslør forklaringen.",
      test: "Tilfældig rækkefølge. Bedøm dig selv efter facit.",
      relearn: "Spaced repetition. Svære kort kommer hurtigt igen og huskes til næste gang."
    };
    var modeBtns = setup.querySelectorAll(".studie-mode");
    modeBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        modeBtns.forEach(function (x) { x.classList.remove("selected"); });
        b.classList.add("selected");
        mode = b.getAttribute("data-mode");
        var hint = document.getElementById("studie-mode-hint");
        if (hint) hint.textContent = hints[mode];
      });
    });

    var startBtn = document.getElementById("studie-start");
    startBtn.addEventListener("click", function () {
      var subj = document.getElementById("studie-subject").value;
      startSession(mode, subj);
    });

    var resetBtn = document.getElementById("studie-reset");
    resetBtn.addEventListener("click", function () {
      if (confirm("Nulstil al gemt genlærings-fremgang? Dette kan ikke fortrydes.")) {
        try { localStorage.removeItem(SR_KEY); } catch (e) {}
        renderSetup();
      }
    });
  }

  // ---- Start en session ------------------------------------------------------
  async function startSession(mode, subject) {
    var setup = document.getElementById("studie-setup");
    var sess = document.getElementById("studie-session");
    setup.hidden = true;
    sess.hidden = false;
    sess.innerHTML = '<div class="studie-card studie-panel"><p class="studie-loading">Henter kort …</p></div>';

    var picked = allDecks.filter(function (d) {
      return subject === "__all__" || d.subject === subject;
    });

    // Hent kort for de valgte bunker (parallelt)
    await Promise.all(picked.map(function (d) { return fetchDeckCards(d); }));

    var cards = [];
    picked.forEach(function (d) {
      (d.cards || []).forEach(function (c) { cards.push(c); });
    });

    if (!cards.length) {
      sess.innerHTML =
        '<div class="studie-card studie-panel"><p>Ingen kort fundet for dette fag endnu.</p>' +
        '<div class="studie-actions"><button type="button" class="studie-btn studie-btn-ghost" id="studie-back">Tilbage</button></div></div>';
      document.getElementById("studie-back").addEventListener("click", renderSetup);
      return;
    }

    var store = loadSR();
    var queue;
    if (mode === "test") {
      queue = shuffle(cards.slice());
    } else if (mode === "relearn") {
      var due = cards.filter(function (c) { return isDue(store, c.id); });
      queue = shuffle(due.length ? due : []);
    } else {
      queue = cards.slice(); // lær: naturlig rækkefølge
    }

    session = {
      mode: mode,
      subject: subject,
      allCards: cards,
      queue: queue,
      pos: 0,
      revealed: false,
      store: store,
      done: 0,
      total: queue.length,
      learnedThisRound: 0,
      nothingDue: mode === "relearn" && queue.length === 0
    };

    if (session.nothingDue) {
      renderNothingDue();
    } else {
      renderCurrent();
    }
  }

  function renderNothingDue() {
    var sess = document.getElementById("studie-session");
    sess.innerHTML =
      '<div class="studie-card studie-panel">' +
        "<h3>Alt er gennemgået for nu</h3>" +
        "<p>Ingen kort forfalder til genlæring i øjeblikket. Godt gået. Du kan gennemgå alle kort alligevel, hvis du vil.</p>" +
        '<div class="studie-actions">' +
          '<button type="button" class="studie-btn studie-btn-primary" id="studie-studyall">Gennemgå alle alligevel</button>' +
          '<button type="button" class="studie-btn studie-btn-ghost" id="studie-back">Tilbage</button>' +
        "</div>" +
      "</div>";
    document.getElementById("studie-back").addEventListener("click", renderSetup);
    document.getElementById("studie-studyall").addEventListener("click", function () {
      session.queue = shuffle(session.allCards.slice());
      session.total = session.queue.length;
      session.pos = 0;
      session.nothingDue = false;
      renderCurrent();
    });
  }

  function renderCurrent() {
    var sess = document.getElementById("studie-session");
    if (!session) return;

    if (session.pos >= session.queue.length) {
      renderDone();
      return;
    }

    var card = session.queue[session.pos];
    var isRelearn = session.mode === "relearn";
    var isTest = session.mode === "test";
    var showRatings = (isRelearn || isTest) && session.revealed;

    var counter = isRelearn
      ? "Tilbage i kø: " + (session.queue.length - session.pos)
      : "Kort " + (session.pos + 1) + " af " + session.queue.length;

    var progressPct = session.queue.length
      ? Math.round((session.pos / session.queue.length) * 100)
      : 0;

    var html =
      '<div class="studie-card">' +
        '<div class="studie-topbar">' +
          '<span class="studie-badge">' + (card.subject || "") + " · " +
            (session.mode === "learn" ? "Lær" : session.mode === "test" ? "Test" : "Genlær") + "</span>" +
          '<span class="studie-counter">' + counter + "</span>" +
        "</div>" +
        '<div class="studie-progress"><div class="studie-progress-bar" style="width:' + progressPct + '%"></div></div>' +
        '<div class="studie-face studie-front">' + card.front + "</div>";

    if (session.revealed) {
      html += '<hr class="studie-sep">' +
        '<div class="studie-face studie-back">' + card.back + "</div>";
    }

    html += '<div class="studie-controls">';
    if (!session.revealed) {
      html += '<button type="button" class="studie-btn studie-btn-primary" id="studie-reveal">' +
        (session.mode === "learn" ? "Vis forklaring" : "Vis svar") + "</button>";
    } else if (session.mode === "learn") {
      html += '<button type="button" class="studie-btn studie-btn-primary" id="studie-next">Næste →</button>';
    } else {
      // test / genlær: selvbedømmelse
      html +=
        '<div class="studie-ratings">' +
          '<button type="button" class="studie-btn studie-rate studie-again" data-rate="again">Igen</button>' +
          '<button type="button" class="studie-btn studie-rate studie-hard" data-rate="hard">Svær</button>' +
          '<button type="button" class="studie-btn studie-rate studie-good" data-rate="good">God</button>' +
          '<button type="button" class="studie-btn studie-rate studie-easy" data-rate="easy">Let</button>' +
        "</div>";
    }
    html += "</div>";

    html += '<div class="studie-footer">' +
      '<button type="button" class="studie-link" id="studie-quit">Afslut</button>';
    if (session.mode === "learn" && session.pos > 0) {
      html += '<button type="button" class="studie-link" id="studie-prev">← Forrige</button>';
    }
    html += "</div></div>";

    sess.innerHTML = html;

    var reveal = document.getElementById("studie-reveal");
    if (reveal) reveal.addEventListener("click", function () { session.revealed = true; renderCurrent(); });

    var next = document.getElementById("studie-next");
    if (next) next.addEventListener("click", function () {
      session.pos++;
      session.done++;
      session.revealed = false;
      renderCurrent();
    });

    var prev = document.getElementById("studie-prev");
    if (prev) prev.addEventListener("click", function () {
      if (session.pos > 0) session.pos--;
      session.revealed = false;
      renderCurrent();
    });

    var rates = sess.querySelectorAll(".studie-rate");
    rates.forEach(function (b) {
      b.addEventListener("click", function () { rate(b.getAttribute("data-rate")); });
    });

    var quit = document.getElementById("studie-quit");
    if (quit) quit.addEventListener("click", renderSetup);

    // Genrender KaTeX-kopiering er ikke nødvendig; matematikken er allerede HTML.
  }

  function rate(rating) {
    if (!session) return;
    var card = session.queue[session.pos];

    if (session.mode === "relearn") {
      var st = schedule(session.store[card.id], rating);
      session.store[card.id] = st;
      saveSR(session.store);

      if (st.requeue) {
        // Flyt kortet frem i køen, så det gentages i denne session.
        var offset = rating === "again" ? 2 : 4;
        var insertAt = Math.min(session.pos + offset, session.queue.length);
        session.queue.splice(insertAt, 0, card);
      } else {
        session.learnedThisRound++;
      }
    } else {
      // test: kun tælling, ingen persistens
      if (rating === "again" || rating === "hard") {
        var off = rating === "again" ? 2 : 4;
        var at = Math.min(session.pos + off, session.queue.length);
        session.queue.splice(at, 0, card);
      }
    }

    session.pos++;
    session.done++;
    session.revealed = false;
    renderCurrent();
  }

  function renderDone() {
    var sess = document.getElementById("studie-session");
    var msg = session.mode === "relearn"
      ? "Du har gennemgået alle forfaldne kort. <strong>" + session.learnedThisRound + "</strong> kort blev markeret som lært denne runde."
      : "Runden er færdig. Du gennemgik <strong>" + session.done + "</strong> kort.";
    sess.innerHTML =
      '<div class="studie-card studie-panel studie-done">' +
        "<h3>Færdig 🎉</h3>" +
        "<p>" + msg + "</p>" +
        '<div class="studie-actions">' +
          '<button type="button" class="studie-btn studie-btn-primary" id="studie-again-btn">Ny runde</button>' +
          '<button type="button" class="studie-btn studie-btn-ghost" id="studie-back">Tilbage</button>' +
        "</div>" +
      "</div>";
    document.getElementById("studie-again-btn").addEventListener("click", function () {
      startSession(session.mode, session.subject);
    });
    document.getElementById("studie-back").addEventListener("click", renderSetup);
  }

  // ---- Init (SPA-sikker) -----------------------------------------------------
  var loading = false;

  async function init() {
    var app = document.getElementById("studie-app");
    if (!app) return; // ikke på Studie-siden
    if (app.getAttribute("data-studie-init") === "true") {
      // Allerede initialiseret i denne DOM; sørg bare for at opsætning vises.
      if (allDecks.length) renderSetup();
      return;
    }
    if (loading) return;
    loading = true;

    var setup = document.getElementById("studie-setup");
    if (setup) setup.innerHTML = '<div class="studie-card studie-panel"><p class="studie-loading">Indlæser fag …</p></div>';

    try {
      var index = await loadIndex();
      allDecks = discoverDecks(index);
      app.setAttribute("data-studie-init", "true");
      // Forudindlæs korttællinger til statistiklinjen (uden at blokere for meget)
      renderSetup();
      // Hent kort i baggrunden, så statistik og genlær-kø bliver præcise.
      Promise.all(allDecks.map(function (d) { return fetchDeckCards(d); })).then(function () {
        var setupVisible = !document.getElementById("studie-setup").hidden;
        if (setupVisible) renderSetup();
      });
    } catch (e) {
      if (setup) setup.innerHTML = '<div class="studie-card studie-panel"><p>Kunne ikke indlæse kortene. Prøv at genindlæse siden.</p></div>';
    } finally {
      loading = false;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  document.addEventListener("nav", init);
})();
</script>
