import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/edge-functions";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});