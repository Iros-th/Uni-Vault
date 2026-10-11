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

<img class="studie-boot" alt="" hidden src="data:image/gif;base64,AA==" onerror="if(window.__studie&&window.__studie.init){window.__studie.init()}else if(!window.__studieLoading){window.__studieLoading=1;var s=document.createElement('script');s.src=new window.URL('studie.js',location.href.split(/[?#]/)[0]).href;s.onerror=function(){window.__studieLoading=0};document.head.appendChild(s)}">
