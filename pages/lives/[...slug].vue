<script setup>
import { lives } from "~/data/live";

const route = useRoute();
const slug = route.params.slug;

const type = slug[0];
const lep = slug[1];

const ep = lives.find(
  (live) => live.type.replace(/'/, "") === type && live.ep === lep
);
// if (!ep) {
//   navigateTo("/", { replace: true });
// }
const epName = ep.name;
const epThumb = ep.thumb;
const epLinks = ep.links;

const shows = epName.split("—")[0];
const name = epName.split("—")[1];

useHead({
  title: epName,
  htmlAttrs: {
    lang: "en",
  },
  meta: [
    {
      property: "og:title",
      name: "title",
      content: epName,
    },
    {
      property: "og:image",
      content: `https://tinarskii.com${epThumb}`,
    },
    {
      property: "og:image:width",
      content: "1280",
    },
    {
      property: "og:image:height",
      content: "720",
    },
    {
      property: "og:image:type",
      content: `image/${epThumb.split(".").pop()}`,
    },
    { property: "og:site_name", content: "Website of TINARZEKY" },
    { property: "og:url", content: "https://tinarskii.com" },
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
      content: epName,
    },
  ],
});
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="text-center text-6xl font-bold">
      {{ shows }}
    </h1>
    <h2 class="text-center text-3xl">
      {{ name }}
    </h2>
  </div>
  <iframe
    :src="`https://player.twitch.tv/?video=${
      ep.links.twitch.split('/videos/')[1]
    }&parent=tinarskii.com`"
    frameborder="0"
    allowfullscreen="true"
    scrolling="no"
    height="400"
    width="600"
    class="hidden md:block md:rounded-lg md:shadow-lg"
  ></iframe>
  <img
    :src="epThumb"
    width="600"
    height="400"
    class="block rounded-lg shadow-lg md:hidden"
  />
  <div
    class="flex w-full flex-col items-center justify-center gap-4 lg:w-[600px]"
  >
    <button
      class="w-full rounded-xl bg-violet-600 px-8 py-4 text-2xl text-white"
      v-on:click="navigateTo(epLinks.twitch, { external: true })"
    >
      Watch on twitch
    </button>
    <button
      class="w-full rounded-xl bg-red-600 px-8 py-4 text-2xl text-white"
      v-on:click="navigateTo(epLinks.youtube, { external: true })"
    >
      Watch on youtube
    </button>
  </div>
</template>
