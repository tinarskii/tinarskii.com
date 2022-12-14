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
            "Hi there! I'm Tinnaphat Somsang, a website developer from Thailand. Despite that, I'm still a student at Assumption College Samutprakarn, learning science and math stuff. I also made some interesting and unpopular website like Wrong-Lang Web Application for example. (Well it was popular for some time, but I'm not sure if it's still popular now.) Don't get me wrong, some of it got popular (which I am mostly a contributor to), such as Learn Manoonchai and That Paper Game, both of them are by @narze tho. Oh what, are you interested in me? Thank you! I would be very appreciated if you donate me.",
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
            "Hi there! I'm Tinnaphat Somsang, a website developer from Thailand. Despite that, I'm still a student at Assumption College Samutprakarn, learning science and math stuff. I also made some interesting and unpopular website like Wrong-Lang Web Application for example. (Well it was popular for some time, but I'm not sure if it's still popular now.) Don't get me wrong, some of it got popular (which I am mostly a contributor to), such as Learn Manoonchai and That Paper Game, both of them are by @narze tho. Oh what, are you interested in me? Thank you! I would be very appreciated if you donate me.",
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
});
