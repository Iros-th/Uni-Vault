# Deploying UniVault to GitHub Pages

This is a [Quartz v4](https://quartz.jzhao.xyz) site. Everything is already configured. You just need to (1) preview locally if you want, (2) push to a GitHub repo, (3) turn on Pages, and (4) click the one FormSubmit confirmation email so the contact form works.

**I (the assistant) cannot do the GitHub steps for you.** Creating the repo, authenticating, pushing, and enabling Pages all happen under *your* GitHub account. Steps 2 to 4 below are yours to run.

---

## 1. Preview locally (optional, about 3 min)

Open a terminal **in this folder** and run:

```
npm install
npx quartz build --serve
```

Then open **http://localhost:8080** in your browser. Edit notes and the preview reloads automatically. Press Ctrl+C to stop.

---

## 2. Create a GitHub repo and push (about 5 min)

Easiest with GitHub Desktop: **Add > Add Existing Repository**, point it at this folder, then **Publish repository**. Or from a terminal:

```
git init
git add .
git commit -m "Initial UniVault site"
git branch -M main
git remote add origin https://github.com/Iros-th/Uni-Vault.git
git push -u origin main
```

---

## 3. Enable Pages (about 3 min)

1. `baseUrl` in `quartz.config.ts` is already set to `iros-th.github.io/Uni-Vault`. Change it only if your repo name or username differs.
2. On GitHub: **Settings > Pages > Build and deployment > Source: "GitHub Actions"**.
3. Commit and push. The workflow in `.github/workflows/deploy.yml` builds and deploys on every push to `main`. Your site appears at your Pages URL within a minute or two (check the **Actions** tab for progress).

**After this, any note you edit and push auto-rebuilds the site.** No manual build step.

---

## 4. Make the contact form work (about 2 min, one click)

The Contact page uses [FormSubmit](https://formsubmit.co) (free, no signup) because a static site cannot process form submissions itself. It is already wired to email **Irosth00@gmail.com**.

1. Publish the site (steps 2 and 3), then open the Contact page and send yourself one test message.
2. FormSubmit emails **Irosth00@gmail.com** a **one-time activation link**. Open that email and click the confirm button.
3. That is it. From then on every submission arrives in that inbox, formatted as a table, with the sender's name, email, phone, and message.

Notes:

- The form captures the visitor's **name, email, phone, and message**. Leave the Gmail app push notification on so new messages ping your phone instantly (free).
- A static site cannot send SMS by itself. Real SMS would need a paid service (Twilio, MessageBird, and similar) plus a backend, which GitHub Pages does not have, so the form does not pretend to text anyone. It collects the visitor's own number so you can reply.
- A **mailto link to Irosth00@gmail.com** is shown under the form as a fallback.
- `_next` in `content\Contact.md` currently redirects back to the Contact page after sending. Point it at a dedicated thank-you page later if you build one.

---

## Adding / publishing more notes later

- Only notes with `publish: true` in their frontmatter are built. Everything else in the vault stays private.
- To publish a note, add this to the top of the `.md` file:

```
---
title: My note
publish: true
---
```

- Put published notes under `content\`, commit, and push. The site rebuilds automatically.

## What's configured

- **Privacy:** `ExplicitPublish` filter in `quartz.config.ts`. Only `publish: true` notes build.
- **Theme:** custom warm-paper design (`quartz/styles/custom.scss`) with graph view, backlinks, full-text search, hover popovers, reading time, code-copy buttons, and a dark/light toggle all enabled.
- **Navigation:** sticky top bar (`VaultNav`) with the site title, quick links, a Contact pill, and a "How to use this vault" link, plus a floating contact button (`ContactButton`) on every page.
- **Deploy:** `.github/workflows/deploy.yml` (GitHub Pages).
