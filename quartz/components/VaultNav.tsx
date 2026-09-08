import { pathToRoot, resolveRelative, slugifyFilePath } from "../util/path"
import { FilePath } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

// A slim, always-visible top bar: the site title (links home), quick links to
// the main study features, and a prominent "How to use this vault" link.
// Made sticky in the CSS below.
//
// Every target is written as its content file path and run through Quartz's own
// slugifyFilePath (spaces to dashes, same rule the build uses for page slugs),
// then resolveRelative computes a path from the CURRENT page up to the site root
// and back down to the target. This is the exact pattern the built-in Explorer
// and PageTitle use, so links resolve correctly on the root page, on one-level
// pages, and on deeply nested Reference pages, and they survive both SPA
// navigation and a hard refresh on any deep page.
const VaultNav: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? "Note Vault"
  const home = pathToRoot(fileData.slug!)
  const rel = (path: string) =>
    resolveRelative(fileData.slug!, slugifyFilePath(path as FilePath))

  const links: { label: string; path: string }[] = [
    { label: "Formelsamling", path: "Formelsamling/Formelsamling.md" },
    { label: "Flashcards", path: "Flashcards/Flashcards.md" },
    { label: "Self-Tests", path: "Self-Tests/Self-Tests.md" },
    { label: "Exam prep", path: "Exam-Prep.md" },
    { label: "Symbols", path: "Reference/Matematik/Matematiske symboler.md" },
    { label: "Periodic table", path: "Reference/Kemi/Periodisk system.md" },
    { label: "Glossary", path: "Glossary.md" },
    { label: "Contact", path: "Contact.md" },
  ]

  return (
    <nav class={classNames(displayClass, "vault-nav")}>
      <a href={home} class="vault-nav-title">
        {title}
      </a>
      <span class="vault-nav-links">
        {links.map((l) => (
          <a
            href={rel(l.path)}
            class={l.label === "Contact" ? "vault-nav-link vault-nav-contact" : "vault-nav-link"}
          >
            {l.label}
          </a>
        ))}
        <a href={rel("how-to-use-this-vault.md")} class="vault-nav-link vault-nav-howto">
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

.vault-nav-contact {
  border: 1px solid var(--secondary);
  border-radius: 999px;
  padding: 0.15rem 0.7rem;
  font-weight: 600;
  color: var(--secondary);
}

.vault-nav-contact:hover {
  background: var(--secondary);
  color: var(--light);
  text-decoration: none;
}

@media print {
  .vault-nav {
    display: none;
  }
}
`

export default (() => VaultNav) satisfies QuartzComponentConstructor
