// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["@/assets/css/global.css"],
  modules: ["@nuxt/image-edge", "@nuxt/content"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Website of Tinarskii",
      meta: [
        {
          property: "og:title",
          content: "Website of Tinarskii",
          name: "title"
        },
        {
          property: "og:description",
          content:
            "I'm a student at Assumption Samutprakarn School. I love learning and teaching others. I enjoy math and science, but also love to code. I've been programming since I was 12 years old, and have been developing websites since then. I started contributing to open-source communities and have made some of the most popular sites on the web such as Wrong-Lang. My goal is to make programming accessible to everyone — not just those who are already good at it!",
          name: "description"
        },
        {
          property: "og:image",
          content: "https://www.tinarskii.com/banner.jpg",
          name: "image"
        },
        { property: "og:site_name", content: "Website of Tinarskii" },
        { property: "og:url", content: "https://www.tinarskii.com" },
        { property: "og:type", content: "website" },
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: "Website of Tinarskii" },
        {
          property: "twitter:description",
          content:
            "I'm a student at Assumption Samutprakarn School. I love learning and teaching others. I enjoy math and science, but also love to code. I've been programming since I was 12 years old, and have been developing websites since then. I started contributing to open-source communities and have made some of the most popular sites on the web such as Wrong-Lang. My goal is to make programming accessible to everyone — not just those who are already good at it!"
        },
        {
          property: "twitter:image",
          content: "https://www.tinarskii.com/banner.jpg"
        },
        {
          name: "keywords",
          content: "solidjs,tinarskii,tinnaphat,ติณณภัทร์,ทินนาร์สกี้"
        }
      ],
      link: [
        { rel: "preconnect", href: "fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "fonts.gstatic.com",
          crossorigin: "anonymous"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Roboto&family=Sarabun&family=Taviraj&display=swap"
        },
        { rel: "icon", href: "/favicon.png" }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  nitro: {
    prerender: {
      routes: ["/rss.xml", "/sitemap.xml"]
    }
  }
});
