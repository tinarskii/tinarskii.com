<script setup>
import { lives } from "~/data/live";

const route = useRoute();
const slug = route.params.slug

const type = slug[0];
const lep = slug[1];

const ep = lives.find((live) => live.type.replace(/'/, "") === type && live.ep === lep)
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

})
</script>

<template>
  <div class="flex flex-col gap-2 ">
    <h1 class="text-6xl text-center font-bold">
      {{ shows }}
    </h1>
    <h2 class="text-3xl text-center">
      {{ name }}
    </h2>
  </div>
  <iframe :src="`https://player.twitch.tv/?video=${ep.links.twitch.split('/videos/')[1]}&parent=tinarskii.com`" frameborder="0" allowfullscreen="true" scrolling="no" height="400" width="600" class="md:rounded-lg md:shadow-lg md:block hidden"></iframe>
  <img :src="epThumb" width="600" height="400" class="rounded-lg shadow-lg block md:hidden">
  <div class="flex flex-col gap-4 lg:w-[600px] w-full items-center justify-center">
    <button
      class="rounded-xl px-8 py-4 text-white bg-violet-600 text-2xl w-full"
      v-on:click="navigateTo(epLinks.twitch, { external: true })"
    >
      Watch on twitch
    </button>
    <button
      class="rounded-xl px-8 py-4 text-white bg-red-600 text-2xl w-full"
      v-on:click="navigateTo(epLinks.youtube, { external: true })"
    >
      Watch on youtube
    </button>
  </div>
</template>