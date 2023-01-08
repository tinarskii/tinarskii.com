// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/fonts.css",
    "@/assets/css/tailwind.css",
    "@/assets/css/global.css",
  ],
  modules: ["@nuxt/image-edge", "@nuxt/content", "@nuxtjs/algolia"],
  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
  router: {
    options: {
      strict: true,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [{ rel: "icon", href: "/favicon.webp" }],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    prerender: {
      routes: ["/rss.xml", "/sitemap.xml"],
    },
    preset: "cloudflare",
  },
  algolia: {
    apiKey: "de8d0a5488af034fc114248f4564c204",
    applicationId: "2OSL992M2B",
  },
});
