import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pickuphq.app',

  // Off on purpose: compressing the HTML removed the space at the end of a
  // line when the next line starts with a link or bold text, so pages read
  // "go to theSettings tab". The pages are small, so leaving the whitespace
  // in costs nothing noticeable.
  compressHTML: false,
  integrations: [
    sitemap({
      // /get is only a redirect for QR codes — keep it out of search results.
      filter: (page) => !page.includes('/get'),
    }),
  ],
});
