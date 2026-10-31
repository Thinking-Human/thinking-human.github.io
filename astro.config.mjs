// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
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
    // $…$ inline and $$…$$ display math, rendered to HTML at build time.
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
