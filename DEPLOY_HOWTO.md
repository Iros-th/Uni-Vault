# Deploying UniVault to GitHub Pages

This is a [Quartz v4](https://quartz.jzhao.xyz) site. Everything is already configured. You just need to (1) preview locally if you want, (2) push to a GitHub repo, (3) turn on Pages, and (4) paste a Formspree ID so the contact form works.

**I (the assistant) cannot do the GitHub steps for you** — creating the repo, authenticating, pushing, and enabling Pages all happen under *your* GitHub account. Steps 2–4 below are yours to run.

---

## 0. One-time cleanup (do this first, ~1 min)

Because of a sandbox limitation, two throwaway items were left in this folder that I could not delete. **Delete them manually in File Explorer** (they are empty/harmless):

- `univault-site\_BROKEN_git_DELETE_ME\`  (a broken, empty git folder)
- On the Desktop: `_SCRAP_univault_delete_me\`  (a scrapped first attempt)
- On the Desktop: `_deltest.txt`  (a leftover test file)
- Inside `UniVault\`: the now-empty `Migrated\` folder (its notes were moved to omnia-vault)

None of these contain your data. They just could not be removed automatically.

---

## 1. Preview locally (optional, ~3 min)

Open a terminal **in this `univault-site` folder** and run:

```
npm install
npx quartz build --serve
```

Then open **http://localhost:8080** in your browser. Edit notes and the preview reloads automatically. Press Ctrl+C to stop.

> A pre-built preview already exists in `univault-site\public\` from my test build, so you can also just open `public\index.html` — but running the command above is the real thing.

---

## 2. Create a GitHub repo and push (~5 min)

1. On GitHub, create a **new empty repository** (e.g. named `univault-site`). Do **not** add a README/license — this folder already has them.
2. In a terminal in this `univault-site` folder:

```
git init
git add .
git commit -m "Initial UniVault site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/univault-site.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username.

---

## 3. Set your site URL, then enable Pages (~3 min)

1. Open `quartz.config.ts` and set `baseUrl` to your Pages URL (no `https://`, no trailing slash):
   - Project site: `YOUR-USERNAME.github.io/univault-site`
   - Or a user site (`YOUR-USERNAME.github.io` repo): just `YOUR-USERNAME.github.io`
2. On GitHub: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
3. Commit and push the `baseUrl` change:

```
git add quartz.config.ts
git commit -m "Set baseUrl"
git push
```

The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`. **After this, any note you edit and push auto-rebuilds the site** — no manual step. Your site appears at your Pages URL within a minute or two (check the **Actions** tab for progress).

---

## 4. Make the contact form work (~2 min)

The Contact page uses [Formspree](https://formspree.io) (free tier) because a static site can't process form submissions itself.

1. Sign up at https://formspree.io and create a new form.
2. Copy the form's endpoint ID — it looks like `xyzabcd` (the part after `/f/`).
3. In `content\Contact.md`, replace **`PUT-YOUR-FORMSPREE-ID`** with your ID.
4. Commit and push. Submissions now arrive in your Formspree inbox / email.

Until you do this, the form won't submit — but the page also shows a **mailto link to cursedgod00@gmail.com** as a fallback, so people can still reach you.

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

- **Privacy:** `ExplicitPublish` filter in `quartz.config.ts` — only `publish: true` notes build.
- **Published now:** the applied-math notes under `content\Courses\` + the home and Contact pages. Nothing personal.
- **Theme:** Quartz default (clean), with graph view, backlinks, full-text search, and dark/light toggle all enabled.
- **Deploy:** `.github/workflows/deploy.yml` (GitHub Pages). Quartz's own internal workflows were renamed to `*.disabled` so they don't run on your repo.
