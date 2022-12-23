<script setup lang="ts">
const currentPath = ref(useRoute().path);

if (
  currentPath.value.includes("/articles") &&
  !["/tags", "/author"].includes(currentPath.value)
) {
  const { data } = await useAsyncData(
    `content-${currentPath.value}`,
    queryContent().where({ _path: currentPath.value }).findOne
  );
  useContentHead((data as any).head);
} else {
  useHead({
    title: "Website of Tinarskii",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        property: "og:title",
        content: `Website of Tinarskii`,
        name: "title",
      },
      {
        property: "og:description",
        content:
          "I'm a student at Assumption Samutprakarn School. I love learning and teaching others. I enjoy math and science, but also love to code. I've been programming since I was 12 years old, and have been developing websites since then. I started contributing to open-source communities and have made some of the most popular sites on the web such as Wrong-Lang. My goal is to make programming accessible to everyone — not just those who are already good at it!",
        name: "description",
      },
      {
        property: "og:image",
        content: "https://www.tinarskii.com/banner.jpg",
        name: "image",
      },
      { property: "og:site_name", content: "Website of Tinarskii" },
      { property: "og:url", content: "https://www.tinarskii.com" },
      { property: "og:type", content: "website" },
      {
        name: "keywords",
        content: "nuxtjs,nuxt,vue,tinarskii,tinnaphat,ติณณภัทร์,ทินนาร์สกี้",
      },
    ],
  });
}
</script>

<template>
  <div class="page-layouts">
    <NuxtLoadingIndicator color="#f28c18" class="p-1" />
    <TopBar />
    <NavBar />
    <slot />
    <LazyFooter />
  </div>
</template>
