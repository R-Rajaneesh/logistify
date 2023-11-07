import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
import markdoc from "@astrojs/markdoc";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx(), markdoc(), prefetch(), sitemap(), partytown(), svelte(), tailwind()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});
