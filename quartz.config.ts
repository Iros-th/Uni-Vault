import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Iros's Note Vault",
    pageTitleSuffix: " · study notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    // GitHub Pages URL for the Iros-th/Uni-Vault project site
    // (no https://, no trailing slash). See DEPLOY_HOWTO.md.
    baseUrl: "iros-th.github.io/Uni-Vault",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "EB Garamond",
        body: "Charter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f5",
          lightgray: "#e8e4df",
          gray: "#9b9389",
          darkgray: "#3d3832",
          dark: "#1a1815",
          secondary: "#5c7a54",
          tertiary: "#8b6d4a",
          highlight: "rgba(92, 122, 84, 0.08)",
          textHighlight: "#e8d4a2aa",
        },
        darkMode: {
          light: "#1a1917",
          lightgray: "#2e2c28",
          gray: "#7a7268",
          darkgray: "#d4cec6",
          dark: "#f0ece6",
          secondary: "#8aab7f",
          tertiary: "#c4a87a",
          highlight: "rgba(138, 171, 127, 0.10)",
          textHighlight: "#8b6d4a66",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "katex",
        // Shared macros so notation stays consistent and is shorter to type.
        // Documented in content/Reference/Matematik/LaTeX-makroer.md
        customMacros: {
          "\\R": "\\mathbb{R}",
          "\\Z": "\\mathbb{Z}",
          "\\Q": "\\mathbb{Q}",
          "\\N": "\\mathbb{N}",
          "\\C": "\\mathbb{C}",
          "\\eps": "\\varepsilon",
          "\\set": "\\left\\{#1\\right\\}",
          "\\abs": "\\left|#1\\right|",
          "\\norm": "\\left\\lVert#1\\right\\rVert",
          "\\ceil": "\\left\\lceil#1\\right\\rceil",
          "\\floor": "\\left\\lfloor#1\\right\\rfloor",
          "\\dd": "\\,\\mathrm{d}",
          "\\deriv": "\\frac{\\mathrm{d}#1}{\\mathrm{d}#2}",
          "\\vec": "\\mathbf{#1}",
          "\\implies": "\\Rightarrow",
          "\\iff": "\\Leftrightarrow",
          "\\divides": "\\mid",
        },
      }),
    ],
    // ExplicitPublish: ONLY notes with frontmatter `publish: true` are built.
    // This keeps everything else in the vault (Inbox, personal notes, etc.) OUT of the public site.
    filters: [Plugin.RemoveDrafts(), Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // CustomOgImages disabled: it fetches fonts over the network at build time,
      // which fails offline. Social-preview thumbnails are optional. Re-enable if wanted.
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
