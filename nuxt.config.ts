// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/global.css"],
  modules: ["@nuxt/image-edge", "@nuxt/content", "@nuxtjs/algolia"],
  plugins: [{ src: "~/plugins/vercel.js", mode: "client" }],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        { rel: "preconnect", href: "fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Merriweather&family=Roboto&family=Sarabun&family=Taviraj&display=swap",
        },
        { rel: "icon", href: "/favicon.png" },
      ],
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
  },
  algolia: {
    apiKey: "de8d0a5488af034fc114248f4564c204",
    applicationId: "2OSL992M2B",
    instantSearch: {
      theme: "reset",
    },
  },
});
