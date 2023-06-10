import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://catstudios.online",
  markdown: {
    gfm: true
  },
  integrations: [mdx({
    extendMarkdownConfig: false,
    gfm: true
  })],
  compressHTML: false,
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: 'file',
    inlineStylesheets: `auto`,
  }
});