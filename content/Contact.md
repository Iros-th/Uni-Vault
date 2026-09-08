---
title: Contact
publish: true
tags:
  - contact
---

# Contact / leave me a message

Have a question, spotted an error in a proof or a formula, or just want to say hi? Fill in the form below and it lands straight in my inbox. Leave your email and/or phone number so I can reply.

> [!note] First message activates the form
> The very first time someone submits this form, FormSubmit sends me a one-time confirmation email that I have to click. Until I do that, messages will not come through. After that single click it works for everyone, every time.

<!--
  OWNER NOTES (not shown to visitors):
  - This is a static site, so it cannot send SMS on its own. Real SMS would need a
    paid service (Twilio, MessageBird, etc.) plus a backend, which this GitHub Pages
    site does not have. So we do NOT fake an SMS.
  - Instead the form captures the visitor's own phone number and email, so you can
    reply however you like. For instant notification on your phone, the Gmail app
    push notification on Irosth00@gmail.com does the job for free.
  - Endpoint: FormSubmit (https://formsubmit.co) mailing to Irosth00@gmail.com.
  - _next currently points back to this Contact page; swap it for a dedicated
    thank-you page later if you build one.
-->

<form
  action="https://formsubmit.co/Irosth00@gmail.com"
  method="POST"
  class="contact-form"
>
  <!-- FormSubmit configuration (hidden fields) -->
  <input type="hidden" name="_subject" value="New message from Iros's Note Vault" />
  <input type="hidden" name="_captcha" value="true" />
  <input type="hidden" name="_template" value="table" />
  <input type="hidden" name="_next" value="https://iros-th.github.io/Uni-Vault/Contact" />
  <!-- Honeypot: bots that fill this get silently dropped -->
  <input type="text" name="_honey" style="display:none" />

  <label class="contact-field">
    <span>Your name</span>
    <input type="text" name="name" placeholder="What should I call you?" required />
  </label>

  <label class="contact-field">
    <span>Your email</span>
    <input type="email" name="email" placeholder="you@example.com" />
  </label>

  <label class="contact-field">
    <span>Your phone (optional)</span>
    <input type="tel" name="phone" placeholder="+45 12 34 56 78" />
  </label>

  <label class="contact-field">
    <span>Your question or message</span>
    <textarea name="message" rows="5" placeholder="Write your question here..." required></textarea>
  </label>

  <p class="contact-hint">Leave at least an email or a phone number so I can reply.</p>

  <button type="submit" class="contact-submit">Send message</button>
</form>

---

Prefer plain email? Write to **[Irosth00@gmail.com](mailto:Irosth00@gmail.com)**.

Looking for something else? Head back to the [[index|home page]] or the [[how-to-use-this-vault|guide]].
