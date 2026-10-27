// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import review from './src/integrations/review.mjs';

// Served as the GitHub Pages organization site: https://thinking-human.github.io/
// (repo Thinking-Human/thinking-human.github.io, so no `base`).
export default defineConfig({
  site: 'https://thinking-human.github.io',
  trailingSlash: 'ignore',
  // review(): dev-only comment API for draft review (see src/components/ReviewMode.astro).
  integrations: [mdx(), review()],
  // three.js (side-panel scene) is one large lazily loaded chunk, by design.
  vite: { build: { chunkSizeWarningLimit: 800 } },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
