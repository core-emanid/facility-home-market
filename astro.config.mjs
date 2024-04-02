import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

export default defineConfig({
  site: 'http://localhost:4567',
  server:{
    port: 4567
  },
  integrations: [
    tailwind(),
    icon({
      include: {
        //fa: ["*"], 
        faBrands: ["instagram, facebook, whatsapp"],
        faRegular: ["envelope"]
      },
    })
  ]
});