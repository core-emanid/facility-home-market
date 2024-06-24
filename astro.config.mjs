import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.facilityhomemarket.com.br',
  output: 'server',
  server: {
    port: 4567
  },
  integrations: [tailwind(), icon({
    include: {
      faBrands: ["instagram, facebook, whatsapp"],
      faRegular: ["envelope"]
    }
  }), sitemap()],
  adapter: vercel()
});