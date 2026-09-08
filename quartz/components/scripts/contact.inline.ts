// Floating contact launcher + modal popup.
//
// The launcher and the modal markup are rendered server-side on every page by
// ContactButton.tsx (in afterBody), so they are present after every SPA
// navigation. This script only wires up behaviour, and it re-binds on the
// "nav" event so it keeps working across Quartz SPA navigations. All listeners
// are registered with window.addCleanup so they are torn down before the next
// navigation and never stack up.
//
// Behaviour: click launcher to open, close via the X button, the Esc key, or a
// click on the backdrop outside the dialog. Focus moves into the dialog on open
// and returns to the launcher on close, and a minimal focus trap keeps Tab
// inside the dialog while it is open. Background scroll is locked while open.
// No external SDK, no localStorage. The form inside keeps its original
// FormSubmit action and fields, so submitting still posts normally.

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input:not([type="hidden"]):not([disabled]), select, [tabindex]:not([tabindex="-1"])'

document.addEventListener("nav", () => {
  const launcher = document.getElementById("contact-launcher")
  const modal = document.getElementById("contact-modal")
  if (!launcher || !modal) return

  const dialog = modal.querySelector<HTMLElement>(".contact-modal-dialog")
  const closeBtn = modal.querySelector<HTMLElement>(".contact-modal-close")
  if (!dialog) return

  let lastFocused: HTMLElement | null = null

  const isOpen = () => modal.classList.contains("is-open")

  const open = () => {
    if (isOpen()) return
    lastFocused = document.activeElement as HTMLElement
    modal.classList.add("is-open")
    modal.setAttribute("aria-hidden", "false")
    launcher.setAttribute("aria-expanded", "true")
    document.body.classList.add("contact-modal-lock")
    // Move focus to the first field (fall back to the dialog itself).
    const first = dialog.querySelector<HTMLElement>(FOCUSABLE)
    ;(first ?? dialog).focus()
  }

  const close = () => {
    if (!isOpen()) return
    modal.classList.remove("is-open")
    modal.setAttribute("aria-hidden", "true")
    launcher.setAttribute("aria-expanded", "false")
    document.body.classList.remove("contact-modal-lock")
    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus()
    } else {
      launcher.focus()
    }
  }

  const onLauncher = (e: Event) => {
    e.preventDefault()
    isOpen() ? close() : open()
  }

  const onCloseBtn = (e: Event) => {
    e.preventDefault()
    close()
  }

  // Click on the backdrop (the overlay itself, not its dialog child) closes.
  const onBackdrop = (e: MouseEvent) => {
    if (e.target === modal) close()
  }

  const onKeydown = (e: KeyboardEvent) => {
    if (!isOpen()) return
    if (e.key === "Escape") {
      e.preventDefault()
      close()
      return
    }
    if (e.key === "Tab") {
      const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null,
      )
      if (focusable.length === 0) return
      const firstEl = focusable[0]
      const lastEl = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }
  }

  launcher.addEventListener("click", onLauncher)
  closeBtn?.addEventListener("click", onCloseBtn)
  modal.addEventListener("mousedown", onBackdrop)
  document.addEventListener("keydown", onKeydown)

  window.addCleanup(() => {
    launcher.removeEventListener("click", onLauncher)
    closeBtn?.removeEventListener("click", onCloseBtn)
    modal.removeEventListener("mousedown", onBackdrop)
    document.removeEventListener("keydown", onKeydown)
    document.body.classList.remove("contact-modal-lock")
  })
})
