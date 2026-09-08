---
title: Owner actions (the last few ideas need you)
tags:
  - meta
  - project
---

# Owner actions

Everything from the gauntlet that a static site can do on its own is done. The items below are the leftovers. They are not hard, but each one needs something only you can provide: an account, an ID, a domain, or a paid service. This note has no `publish: true`, so it stays off the live site.

## 1. Comments under each note (Giscus)

Free, runs client side, backed by GitHub Discussions. Steps:

1. On GitHub, open the Uni-Vault repo, go to Settings, Features, and tick Discussions.
2. Install the giscus app at github.com/apps/giscus and grant it access to the repo.
3. Go to giscus.app, type the repo `iros-th/Uni-Vault`, pick a Discussions category, and copy the four values it shows: repo ID, category ID, and the repo and category names.
4. Tell me those four values and I will wire the existing Comments component into the layout. I did not wire it now because empty IDs render a broken box on every page.

## 2. Visitor analytics (optional, privacy friendly)

Right now `analytics` is `null` on purpose. If you want counts without Google:

1. Make a free GoatCounter account and note your site code, or a Plausible account.
2. Give me the code and I will set `analytics` in `quartz.config.ts`. No cookie banner needed for GoatCounter.

## 3. Nicer per-page social preview images (now on)

`CustomOgImages` is now enabled in `quartz.config.ts`. It renders a per-page card (title plus description) at build time. It needs network, which the GitHub Actions build has, and a font that is not on Google Fonts fails gracefully rather than breaking the build. Just glance at the first Action run after you push to confirm the build stays green. If you ever want to build fully offline, comment that one line back out and the static `og-image.png` takes over again.

## 4. Custom domain

Optional. If you buy a domain, add a CNAME in the repo and point DNS at GitHub Pages, then update `baseUrl`. Tell me the domain and I will change the config.

## 5. Things that need a real backend (not doable on GitHub Pages)

- SMS notification when someone uses the contact form. Needs a paid service like Twilio. The form already captures the visitor's phone and email so you can reply yourself.
- Email newsletter or subscribe box. Needs a list service.
- Real spaced repetition for the flashcards. Needs an app such as Anki. The reveal on click cards are the static stand in.
