import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import robotsTxt from "astro-robots-txt";
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import lighthouse from 'astro-lighthouse';
import AstroDevtoolbarTailwind from "astro-devtoolbar-tailwind";
import astroMetaTags from "astro-meta-tags";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(), 
    react(), 
    sitemap(), 
    robotsTxt(), 
    partytown(),
    lighthouse(),
    AstroDevtoolbarTailwind(),
    astroMetaTags()
  ],
  outDir: 'public_html/',
  site: 'https://www.hastalatumba.cl',
 buildOptions: {
    // Configura la política de caché para los recursos estáticos
    cacheControl: {
      public: {
        maxAgeSeconds: 31536000, // 1 año
      },
    },
  },
});
