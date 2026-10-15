import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://pickuphq.app',
  integrations: [
    sitemap({
      // /get is only a redirect for QR codes — keep it out of search results.
      filter: (page) => !page.includes('/get'),
    }),
  ],
});
