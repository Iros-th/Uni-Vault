import { resolveRelative, FullSlug } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// A small circular "leave a message" button fixed to the bottom-right corner of
// every page. It links straight to the Contact page. Rendered server-side in
// afterBody so it reappears on every SPA navigation with no extra JavaScript and
// no localStorage. Styled with theme variables so it works in dark and light mode.
const ContactButton: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const href = resolveRelative(fileData.slug!, "Contact" as FullSlug)
  return (
    <a
      href={href}
      class={classNames(displayClass, "contact-fab")}
      aria-label="Leave me a message"
      title="Leave me a message"
      data-no-popover="true"
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
      <span class="contact-fab-label">Contact</span>
    </a>
  )
}

ContactButton.css = `
.contact-fab {
  position: fixed;
  right: 1.4rem;
  bottom: 1.4rem;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 0;
  height: 3.25rem;
  width: 3.25rem;
  padding: 0;
  border-radius: 999px;
  background: var(--secondary);
  color: var(--light);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);
  text-decoration: none;
  overflow: hidden;
  transition: width 0.2s ease, background 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
}

.contact-fab-icon {
  flex: 0 0 auto;
  width: 3.25rem;
  height: 3.25rem;
  padding: 0.8rem;
}

.contact-fab-label {
  font-family: var(--codeFont);
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
  opacity: 0;
  max-width: 0;
  transition: opacity 0.2s ease, max-width 0.2s ease, padding 0.2s ease;
}

.contact-fab:hover,
.contact-fab:focus-visible {
  width: 9.5rem;
  background: var(--tertiary);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.28);
  transform: translateY(-1px);
  outline: none;
}

.contact-fab:hover .contact-fab-label,
.contact-fab:focus-visible .contact-fab-label {
  opacity: 1;
  max-width: 6rem;
  padding-right: 1.1rem;
}

.contact-fab:focus-visible {
  outline: 2px solid var(--dark);
  outline-offset: 2px;
}

@media (max-width: 600px) {
  .contact-fab {
    right: 1rem;
    bottom: 1rem;
    height: 3rem;
    width: 3rem;
  }
  .contact-fab-icon {
    width: 3rem;
    height: 3rem;
  }
}

@media print {
  .contact-fab {
    display: none;
  }
}
`

export default (() => ContactButton) satisfies QuartzComponentConstructor
