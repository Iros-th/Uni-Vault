import { pathToRoot, resolveRelative } from "../util/path"
import { FullSlug } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// A slim, always-visible top bar: the site title (links home), quick links to
// the main study features, and a prominent "How to use this vault" link.
// Made sticky in the CSS below.
const VaultNav: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Note Vault"
  const home = pathToRoot(fileData.slug!)
  const rel = (slug: string) => resolveRelative(fileData.slug!, slug as FullSlug)

  const links: { label: string; slug: string }[] = [
    { label: "Formelsamling", slug: "Formelsamling/Formelsamling" },
    { label: "Flashcards", slug: "Flashcards/Flashcards" },
    { label: "Self-Tests", slug: "Self-Tests/Self-Tests" },
    { label: "Symbols", slug: "Reference/Matematik/Matematiske symboler" },
    { label: "Glossary", slug: "Glossary" },
  ]

  return (
    <nav class={classNames(displayClass, "vault-nav")}>
      <a href={home} class="vault-nav-title">
        {title}
      </a>
      <span class="vault-nav-links">
        {links.map((l) => (
          <a href={rel(l.slug)} class="vault-nav-link">
            {l.label}
          </a>
        ))}
        <a href={rel("how-to-use-this-vault")} class="vault-nav-link vault-nav-howto">
          How to use this vault
        </a>
      </span>
    </nav>
  )
}

VaultNav.css = `
.vault-nav {
  position: sticky;
  top: 0;
  z-index: 5;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  margin: 0 0 0.5rem 0;
  background: var(--light);
  border-bottom: 1px solid var(--lightgray);
  backdrop-filter: saturate(180%) blur(6px);
}

.vault-nav-links {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.9rem;
}

.vault-nav-howto {
  font-weight: 600;
  border-left: 1px solid var(--lightgray);
  padding-left: 0.9rem;
}

.vault-nav-title {
  font-family: var(--headerFont);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--dark);
  text-decoration: none;
  letter-spacing: -0.01em;
}

.vault-nav-title:hover {
  color: var(--secondary);
}

.vault-nav-link {
  font-family: var(--codeFont);
  font-size: 0.8rem;
  color: var(--secondary);
  text-decoration: none;
  white-space: nowrap;
}

.vault-nav-link:hover {
  text-decoration: underline;
}

@media print {
  .vault-nav {
    display: none;
  }
}
`

export default (() => VaultNav) satisfies QuartzComponentConstructor
