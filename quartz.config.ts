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
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfbfd",
          lightgray: "#e6e8eb",
          gray: "#a3adba",
          darkgray: "#47515c",
          dark: "#1f2933",
          secondary: "#3a6ea5",
          tertiary: "#5b8a72",
          highlight: "rgba(58, 110, 165, 0.10)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#17181c",
          lightgray: "#2c2f36",
          gray: "#6b7280",
          darkgray: "#cbd2d9",
          dark: "#f0f2f5",
          secondary: "#7aa5d2",
          tertiary: "#8fb9a3",
          highlight: "rgba(122, 165, 210, 0.12)",
          textHighlight: "#b3aa0288",
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
      Plugin.Latex({ renderEngine: "katex" }),
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
