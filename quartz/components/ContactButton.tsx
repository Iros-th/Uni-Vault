import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import script from "./scripts/contact.inline"

// A floating "Brug for hjælp?" launcher fixed to the bottom-right of every page.
// Instead of navigating to the Contact page, it opens an in-page modal popup that
// contains the contact form. Rendered server-side in afterBody so it reappears on
// every SPA navigation; behaviour is wired up by scripts/contact.inline.ts, which
// re-binds on the "nav" event and cleans up after itself.
//
// The form keeps the exact FormSubmit action and fields from content/Contact.md,
// so submitting still posts to FormSubmit and redirects as before. Self-contained:
// no external chat SDK, no localStorage. Styled with theme variables so it works
// in both dark and light mode.
const LAUNCHER_LABEL = "Brug for hjælp?"
const MODAL_HEADING = "Brug for hjælp? Kontakt mig her ved spørgsmål"

const ContactButton: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "contact-widget")}>
      <button
        type="button"
        id="contact-launcher"
        class="contact-fab"
        aria-haspopup="dialog"
        aria-controls="contact-modal"
        aria-expanded="false"
        aria-label={LAUNCHER_LABEL}
        title={LAUNCHER_LABEL}
      >
        <svg
          class="contact-fab-icon"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
        <span class="contact-fab-label">{LAUNCHER_LABEL}</span>
      </button>

      <div
        id="contact-modal"
        class="contact-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-hidden="true"
      >
        <div class="contact-modal-dialog" tabIndex={-1}>
          <div class="contact-modal-head">
            <h2 id="contact-modal-title" class="contact-modal-title">
              {MODAL_HEADING}
            </h2>
            <button type="button" class="contact-modal-close" aria-label="Luk">
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <p class="contact-modal-intro">
            Har du et spørgsmål, fundet en fejl i et bevis eller en formel, eller vil du bare sige
            hej? Skriv til mig herunder, så lander det direkte i min indbakke. Efterlad din e-mail
            og/eller dit telefonnummer, så jeg kan svare.
          </p>

          <form
            action="https://formsubmit.co/Irosth00@gmail.com"
            method="POST"
            class="contact-form"
          >
            {/* FormSubmit configuration (hidden fields) - unchanged. */}
            <input type="hidden" name="_subject" value="New message from Iros's Note Vault" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://iros-th.github.io/Uni-Vault/Contact"
            />
            {/* Honeypot: bots that fill this get silently dropped */}
            <input type="text" name="_honey" style="display:none" />

            <label class="contact-field">
              <span>Dit navn</span>
              <input type="text" name="name" placeholder="Hvad skal jeg kalde dig?" required />
            </label>

            <label class="contact-field">
              <span>Din e-mail</span>
              <input type="email" name="email" placeholder="dig@eksempel.dk" />
            </label>

            <label class="contact-field">
              <span>Dit telefonnummer (valgfrit)</span>
              <input type="tel" name="phone" placeholder="+45 12 34 56 78" />
            </label>

            <label class="contact-field">
              <span>Dit spørgsmål eller din besked</span>
              <textarea
                name="message"
                rows={5}
                placeholder="Skriv dit spørgsmål her..."
                required
              ></textarea>
            </label>

            <p class="contact-hint">Efterlad mindst en e-mail eller et telefonnummer, så jeg kan svare.</p>

            <button type="submit" class="contact-submit">
              Send besked
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactButton.css = `
.contact-widget { display: contents; }

/* Floating launcher */
.contact-fab {
  position: fixed;
  right: 1.4rem;
  bottom: 1.4rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0;
  height: 3.25rem;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: var(--secondary);
  color: var(--light);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.22);
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  max-width: 3.25rem;
  transition: max-width 0.28s ease, background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}

.contact-fab-icon {
  flex: 0 0 auto;
  width: 3.25rem;
  height: 3.25rem;
  padding: 0.85rem;
}

.contact-fab-label {
  font-family: var(--codeFont);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease, padding 0.2s ease;
  padding-right: 0;
}

.contact-fab:hover,
.contact-fab:focus-visible {
  max-width: 16rem;
  background: var(--tertiary);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28);
  transform: translateY(-1px);
  outline: none;
}

.contact-fab:hover .contact-fab-label,
.contact-fab:focus-visible .contact-fab-label {
  opacity: 1;
  padding-right: 1.2rem;
}

.contact-fab:focus-visible {
  outline: 2px solid var(--secondary);
  outline-offset: 2px;
}

/* Modal overlay */
.contact-modal {
  position: fixed;
  inset: 0;
  z-index: 1200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  background: color-mix(in srgb, var(--dark) 55%, transparent);
  -webkit-backdrop-filter: blur(3px);
  backdrop-filter: blur(3px);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease;
}

.contact-modal.is-open {
  opacity: 1;
  visibility: visible;
}

body.contact-modal-lock {
  overflow: hidden;
}

/* Modal dialog card */
.contact-modal-dialog {
  width: 100%;
  max-width: 34rem;
  max-height: calc(100vh - 3rem);
  overflow-y: auto;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 14px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
  padding: 1.6rem 1.7rem 1.8rem;
  transform: translateY(12px) scale(0.98);
  transition: transform 0.22s ease;
  outline: none;
}

.contact-modal.is-open .contact-modal-dialog {
  transform: translateY(0) scale(1);
}

.contact-modal-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.35rem;
}

.contact-modal-title {
  margin: 0;
  font-family: var(--headerFont);
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.25;
  color: var(--dark);
  border: none;
  padding: 0;
}

.contact-modal-close {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.1rem;
  height: 2.1rem;
  border: 1px solid var(--lightgray);
  border-radius: 8px;
  background: var(--light);
  color: var(--darkgray);
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
}

.contact-modal-close:hover,
.contact-modal-close:focus-visible {
  background: var(--highlight);
  color: var(--secondary);
  border-color: var(--secondary);
  outline: none;
}

.contact-modal-intro {
  margin: 0 0 1.1rem 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--darkgray);
}

/* The form inside the modal drops the standalone-page margins/box: the dialog
   is already the card. */
.contact-modal .contact-form {
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  box-shadow: none;
  max-width: none;
}

@media (max-width: 600px) {
  .contact-fab {
    right: 1rem;
    bottom: 1rem;
    height: 3rem;
    max-width: 3rem;
  }
  .contact-fab-icon {
    width: 3rem;
    height: 3rem;
  }
  .contact-modal {
    padding: 1rem;
  }
  .contact-modal-dialog {
    padding: 1.3rem 1.2rem 1.5rem;
  }
  .contact-modal-title {
    font-size: 1.15rem;
  }
}

@media print {
  .contact-widget {
    display: none !important;
  }
}
`

ContactButton.afterDOMLoaded = script

export default (() => ContactButton) satisfies QuartzComponentConstructor
