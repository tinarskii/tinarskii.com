<script setup>
import { authors } from "~/data/data";

let currentPath = useRoute().path.replace(/\/$/, "");

const { data } = await useAsyncData(
  `content-${currentPath}`,
  queryContent().where({ _path: currentPath }).findOne
);
</script>

<template>
  <main class="flex flex-col gap-12">
    <LazyContentRenderer v-if="data" :value="data">
      <!-- Article Big Image -->
      <div
        class="h-[65vh] w-full rounded-xl"
        :style="{
          backgroundImage: `url(${data.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <!-- Title & Subtitles -->
        <div
          class="flex h-full w-full flex-col items-center justify-center gap-12 rounded-xl bg-black/75 px-12 duration-200 hover:bg-black/50 lg:px-24"
        >
          <h1 class="title">{{ data.title }}</h1>
          <h2 class="subtitle">{{ data.description }}</h2>
        </div>
      </div>

      <!-- Article Container -->
      <div class="grid grid-cols-1 md:gap-6 lg:grid-cols-4">
        <!-- Article Metadata -->
        <div class="flex w-full flex-col items-center gap-4">
          <!-- Tags -->
          <div class="flex flex-col items-center gap-4">
            <h1 class="text-4xl">Tags</h1>
            <div
              class="flex flex-row flex-wrap items-center justify-center gap-2"
            >
              <div
                v-for="tag in data?.tags"
                class="flex flex-row gap-2 bg-white/10 p-2"
              >
                <NuxtLink
                  :to="`/articles/tags/${tag}`"
                  class="text-lg font-bold"
                  >{{ tag }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- RSS -->
          <div class="flex flex-col items-center gap-4">
            <h1 class="text-4xl">RSS</h1>
            <div class="flex flex-row flex-wrap gap-2">
              <div
                class="flex flex-row items-center justify-center gap-2 bg-orange-500/10 p-2"
              >
                <a href="/rss.xml" class="text-lg font-bold text-orange-400">
                  Subscribe
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Article Content -->
        <ContentDoc class="content col-span-3 flex flex-col gap-4" />
      </div>
    </LazyContentRenderer>
  </main>
</template>

<style>
.content h1 {
  font-size: unset;
  font-family: "Urbanist", "IBM Plex Sans Thai Looped", sans-serif;
  @apply text-3xl font-bold lg:text-4xl;
}

.content h2 {
  font-size: unset;
  font-family: "Urbanist", "IBM Plex Sans Thai Looped", sans-serif;
  @apply text-2xl font-bold lg:text-3xl;
}

.content h3 {
  font-size: unset;
  font-family: "Taviraj", "Sarabun", sans-serif;
  @apply text-xl font-bold lg:text-2xl;
}

.content blockquote {
  @apply border-l-4 border-white/20 bg-white/10 p-4 text-lg lg:text-xl;
}

.content img,
video {
  @apply mx-auto my-2 max-h-[65vh] max-w-full rounded-xl object-cover;
}

.content img {
  @apply mx-auto my-2 max-h-[65vh] max-w-full rounded-xl object-cover;
}

.content figcaption {
  @apply pb-4 text-center italic text-gray-400;
}

.content p > a {
  text-decoration: unset;
  text-decoration: underline;
  font-weight: 700;
}

.content ul > li > a {
  text-decoration: unset;
  text-decoration: underline;
  font-weight: 700;
}

.content ul {
  @apply list-inside list-disc;
}

.content iframe {
  @apply mx-auto max-w-full rounded-xl;
}

.title {
  font-size: unset;
  font-family: "Urbanist", "IBM Plex Sans Thai Looped", sans-serif;
  @apply text-4xl font-bold lg:text-5xl;
}

.subtitle {
  font-size: unset;
  font-family: "Urbanist", "Noto Serif Thai", sans-serif;
  @apply text-lg lg:text-xl;
}
</style>
