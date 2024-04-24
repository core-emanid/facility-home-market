import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:4567',
  output: 'server',
  server: {
    port: 4567
  },
  integrations: [tailwind(), icon({
    include: {
      faBrands: ["instagram, facebook, whatsapp"],
      faRegular: ["envelope"]
    }
  })],
  adapter: vercel()
});