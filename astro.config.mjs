import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-portfolio-gilt.vercel.app/",
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"]
    }
  },
});