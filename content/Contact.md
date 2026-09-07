---
title: Contact
publish: true
---

Have a question, spotted an error in a proof, or want to get in touch? Use the form below.

> [!note] Before this form works
> This is a static site, so the form is handled by a free third-party service called **Formspree**. Replace `PUT-YOUR-FORMSPREE-ID` below with your own Formspree form ID (see `DEPLOY_HOWTO.md`). Until then, the form will not submit — use the email link underneath as a fallback.

<form
  action="https://formspree.io/f/PUT-YOUR-FORMSPREE-ID"
  method="POST"
  style="display:flex;flex-direction:column;gap:0.75rem;max-width:32rem;"
>
  <label style="display:flex;flex-direction:column;gap:0.25rem;">
    <span>Your email</span>
    <input type="email" name="email" required
      style="padding:0.5rem;border:1px solid var(--lightgray);border-radius:6px;background:var(--light);color:var(--dark);" />
  </label>
  <label style="display:flex;flex-direction:column;gap:0.25rem;">
    <span>Message</span>
    <textarea name="message" rows="5" required
      style="padding:0.5rem;border:1px solid var(--lightgray);border-radius:6px;background:var(--light);color:var(--dark);"></textarea>
  </label>
  <button type="submit"
    style="padding:0.6rem 1rem;border:none;border-radius:6px;background:var(--secondary);color:white;cursor:pointer;font-weight:600;">
    Send
  </button>
</form>

---

Prefer email? Write to **[cursedgod00@gmail.com](mailto:cursedgod00@gmail.com)**.
