// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/global.css"],
  modules: ["@nuxt/image-edge"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Website of Tinarskii",
      meta: [
        {
          property: "og:title",
          content: "Website of Tinarskii",
          name: "title",
        },
        {
          property: "og:description",
          content:
            "เด็กติดเกมที่จู่ ๆ ก็ถูกชะตาลิขิตมา... พอเหอะเดี๋ยวเข่าหาว่าเบียว",
          name: "description",
        },
        {
          property: "og:image",
          content: "https://www.tinarskii.com/cover.jpg",
          name: "image",
        },
        { property: "og:site_name", content: "Website of Tinarskii" },
        { property: "og:url", content: "https://www.tinarskii.com" },
        { property: "og:type", content: "website" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: "Website of Tinarskii" },
        {
          property: "twitter:description",
          content:
            "เด็กติดเกมที่จู่ ๆ ก็ถูกชะตาลิขิตมา... พอเหอะเดี๋ยวเข่าหาว่าเบียว",
        },
        {
          property: "twitter:image",
          content: "https://www.tinarskii.com/cover.jpg",
        },
        {
          name: "keywords",
          content: "solidjs,tinarskii,tinnaphat,ติณณภัทร์,ทินนาร์สกี้",
        },
      ],
      link: [
        { rel: "preconnect", href: "fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "fonts.gstatic.com",
          crossorigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto&display=swap",
        },
        { rel: "icon", href: "~/assets/img/favicon.png" },
      ],
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
