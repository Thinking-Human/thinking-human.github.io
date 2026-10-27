// Site identity — edit these to rebrand. URL settings (site/base) live in astro.config.mjs.
export const SITE = {
  name: 'Thinking-Human',
  author: 'Thinking-Human',
  description: 'Simple, efficient notes on what we explore in AI.',
  // Header "Homepage" button; leave empty to hide it (this site is the homepage).
  homepage: '',
  sourceUrl: 'https://github.com/Thinking-Human/thinking-human.github.io',
  // Icons under the home-page intro. `icon` is one of: link, github, twitter, scholar, rss, mail, linkedin.
  // A url starting with "/" is relative to the site base (e.g. "/rss.xml").
  social: [
    // { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=<id>', icon: 'scholar' },
    { name: 'RSS', url: '/rss.xml', icon: 'rss' },
    { name: 'GitHub', url: 'https://github.com/Thinking-Human', icon: 'github' },
  ],
} as const;
