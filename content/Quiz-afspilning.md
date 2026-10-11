---
title: Quiz-afspilning
publish: true
type: tool
tags:
  - studie
  - videoquiz
  - repetition
---

# Quiz-afspilning

Se en video fra dine Speedrun Maps med indbygget quiz. Cirka hvert andet minut stopper videoen og stiller 2-3 korte spørgsmål om det, der **lige** er blevet forklaret: multiple choice og ét kort-svar- eller udledningsspørgsmål. Svar (eller spring over), så kører videoen videre. Spørgsmål du svarer forkert på, bliver til kort i Genlær i [[Studie]], så de kommer igen senere. Alt gemmes lokalt i din browser.

Spørgsmålene er genereret ud fra videoens undertekster og tjekket mod præcis det tidsudsnit, de handler om. Hver forklaring har et tidsstempel, du kan klikke på for at se klippet igen. Oversigten over alle videoer med quiz ligger i [[Quizzes/Videoquiz|Videoquiz]]. Afspilleren virker på den publicerede side, ikke inde i Obsidian (ligesom Studie).

<div id="vq-app" class="studie vq" data-vq-init="false">
  <div id="vq-picker" class="vq-picker"></div>
  <div id="vq-stage" class="vq-stage" hidden></div>
</div>

<style>
.vq .vq-video { position: relative; width: 100%; aspect-ratio: 16 / 9; background: #000; border-radius: var(--ds-radius-lg, 14px); overflow: hidden; }
.vq .vq-video iframe, .vq .vq-video > div { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
.vq .vq-head { display: flex; justify-content: space-between; align-items: baseline; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.7rem; }
.vq .vq-head h3 { margin: 0; font-size: 1.15rem; }
.vq .vq-meta { color: var(--gray); font-size: 0.85rem; }
.vq .vq-timeline { position: relative; height: 14px; margin: 0.8rem 0 0.3rem; background: var(--lightgray); border-radius: 999px; }
.vq .vq-timeline-fill { position: absolute; left: 0; top: 0; bottom: 0; background: var(--ds-accent-soft, var(--highlight)); border-radius: 999px; pointer-events: none; }
.vq .vq-mark { position: absolute; top: -3px; width: 12px; height: 20px; margin-left: -6px; border-radius: 4px; border: 2px solid var(--gray); background: var(--light); cursor: pointer; padding: 0; }
.vq .vq-mark.ok { background: var(--secondary); border-color: var(--secondary); }
.vq .vq-mark.bad { background: #c0563f; border-color: #c0563f; }
.vq .vq-mark.skip { background: var(--lightgray); border-style: dashed; }
.vq .vq-mark.empty { opacity: 0.35; cursor: default; }
.vq .vq-bar { display: flex; justify-content: space-between; align-items: center; gap: 0.8rem; flex-wrap: wrap; font-size: 0.85rem; color: var(--darkgray); margin-bottom: 0.9rem; }
.vq .vq-bar label { display: inline-flex; gap: 0.4rem; align-items: center; cursor: pointer; }
.vq .vq-quiz { margin-top: 0.9rem; }
.vq .vq-quiz:focus { outline: none; }
.vq .vq-q { font-size: 1.02rem; margin: 0.6rem 0 0.9rem; }
.vq .vq-options { display: flex; flex-direction: column; gap: 0.5rem; }
.vq .vq-opt { text-align: left; padding: 0.65rem 0.9rem; border-radius: var(--ds-radius, 10px); border: 1px solid var(--ds-border, var(--lightgray)); background: var(--ds-panel, var(--light)); color: var(--dark); cursor: pointer; font: inherit; }
.vq .vq-opt:hover:not([disabled]) { border-color: var(--secondary); }
.vq .vq-opt[disabled] { cursor: default; }
.vq .vq-opt.correct { border-color: var(--secondary); background: var(--ds-accent-soft, var(--highlight)); font-weight: 600; }
.vq .vq-opt.wrong { border-color: #c0563f; color: #c0563f; text-decoration: line-through; }
.vq .vq-key { display: inline-block; min-width: 1.6em; font-family: var(--codeFont); color: var(--gray); }
.vq .vq-feedback { margin-top: 0.9rem; padding: 0.7rem 0.9rem; border-left: 3px solid var(--secondary); background: var(--highlight); border-radius: 6px; }
.vq .vq-feedback.bad { border-left-color: #c0563f; }
.vq .vq-answer { width: 100%; min-height: 4.2rem; box-sizing: border-box; padding: 0.6rem; border-radius: var(--ds-radius, 10px); border: 1px solid var(--ds-border, var(--lightgray)); background: var(--light); color: var(--dark); font: inherit; }
.vq .vq-ts { background: none; border: 0; padding: 0; color: var(--secondary); text-decoration: underline; cursor: pointer; font: inherit; }
.vq .vq-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.35rem; }
.vq .vq-list a { font-weight: 600; }
.vq .vq-list .vq-meta { margin-left: 0.4rem; }
</style>

<img class="vq-boot" alt="" hidden src="data:image/gif;base64,AA==" onerror="if(window.__vq&&window.__vq.init){window.__vq.init()}else if(!window.__vqLoading){window.__vqLoading=1;var s=document.createElement('script');s.src=new window.URL('Quizzes/quiz-player.js',location.href.split(/[?#]/)[0]).href;s.onerror=function(){window.__vqLoading=0};document.head.appendChild(s)}">
