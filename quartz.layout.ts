import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/*
 * FEATURE SET (what's wired up here and in quartz.config.ts)
 *
 * Custom components (in quartz/components/):
 *   - VaultNav        sticky top bar: site title/logo, quick links (Formelsamling,
 *                     Flashcards, Self-Tests, Symbols, Periodic table, Glossary),
 *                     a highlighted Contact pill, and a "How to use this vault" link.
 *   - ContactButton   floating round "leave me a message" button, bottom-right,
 *                     every page (afterBody). No JavaScript, no localStorage.
 *
 * Quartz v4 built-ins enabled below (the high-value "awesome-quartz" features that
 * ship with core, rather than risky third-party plugins that need a build to test):
 *   - Interactive Graph (local depth-2 + global radial)   right sidebar
 *   - Backlinks                                           right sidebar
 *   - Full-text Search (Ctrl+K)                           left sidebar
 *   - Table of Contents                                   right sidebar
 *   - Reading time + dates (ContentMeta)                  beforeBody
 *   - Tags + tag pages (TagList + TagPage emitter)        beforeBody / config
 *   - Dark / light toggle (Darkmode)                      left sidebar
 *   - Breadcrumbs, Explorer folder tree, Reader mode
 *   - Hover popovers + SPA nav                            quartz.config.ts
 *   - Code-copy buttons + KaTeX math                      Quartz core / config
 * Visual polish lives in quartz/styles/custom.scss.
 */

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [Component.VaultNav()],
  // Site-wide floating "leave me a message" button (bottom-right, every page).
  afterBody: [Component.ContactButton()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.15,
        showTags: true,
        focusOnHover: true,
      },
      globalGraph: {
        depth: -1,
        scale: 0.9,
        showTags: true,
        focusOnHover: true,
        enableRadial: true,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      folderClickBehavior: "collapse",
      folderDefaultState: "collapsed",
      useSavedState: true,
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.1,
        showTags: true,
        focusOnHover: true,
      },
      globalGraph: {
        depth: -1,
        scale: 0.9,
        showTags: true,
        focusOnHover: true,
        enableRadial: true,
      },
    }),
  ],
}
