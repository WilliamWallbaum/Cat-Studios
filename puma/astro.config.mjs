import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://catstudios.online",
  markdown: {
    gfm: true
  },
  integrations: [mdx({
    extendMarkdownConfig: false,
    gfm: true
  }), image(), react()],
  compressHTML: false,
  build: {
    // Example: Generate `page.html` instead of `page/index.html` during build.
    format: "file",
    inlineStylesheets: `auto`
  },
  experimental: {
    assets: true
  }
});