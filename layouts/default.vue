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
} else if (!currentPath.value.includes("/live")) {
  useHead({
    title: "Website of Tinarskii",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      {
        property: "og:title",
        content:
          (currentPath.value.slice(1)[0] || "Home").toUpperCase() +
          currentPath.value.slice(1).slice(1),
        name: "title",
      },
      {
        property: "og:description",
        content: "It is generally believed that the most important figures in the twentieth century, is undeniably, inarguably, extraordinary, excruciatingly, surprisingly, totally, bitterly, utterly, not 'Tinnaphat Smomsang', also known as 'Tinarskii'.",
        name: "description",
      },
      {
        property: "og:image",
        content: "https://tin.otternoon.com/banner.jpg",
        name: "image",
      },
      { property: "og:site_name", content: "Website of Tinarskii" },
      { property: "og:url", content: "https://tin.otternoon.com" },
      { property: "og:type", content: "website" },
      {
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        property: "twitter:site",
        content: "@tinarskii",
      },
      {
        property: "twitter:title",
        content:
          (currentPath.value.slice(1)[0] || "Home").toUpperCase() +
          currentPath.value.slice(1).slice(1),
      },
      {
        property: "twitter:description",
        content: "It is generally believed that the most important figures in the twentieth century, is undeniably, inarguably, extraordinary, excruciatingly, surprisingly, totally, bitterly, utterly, not 'Tinnaphat Smomsang', also known as 'Tinarskii'.",
      },
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
    <LazyNuxtLoadingIndicator color="#f28c18" class="p-1" />
    <LazyNavBar />
    <slot />
    <LazyFooter />
  </div>
</template>
