<script setup>
import { authors } from "~/data";
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main class="flex flex-col gap-12">
    <ContentRenderer v-if="data" :value="data">
      <div
        class="h-[65vh] w-full rounded-xl"
        :style="{
          backgroundImage: `url(${data.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }"
      >
        <div
          class="flex h-full w-full flex-col items-center justify-center gap-12 rounded-xl bg-black/75 px-12 duration-200 hover:bg-black/50 lg:px-24"
        >
          <h1 class="title">{{ data.title }}</h1>
          <h2 class="subtitle">{{ data.description }}</h2>
        </div>
      </div>
      <div class="flex flex-col gap-6 lg:flex-row">
        <div class="flex w-full flex-col gap-12 lg:w-full">
          <div class="flex flex-col gap-4">
            <h1 class="text-4xl">Author</h1>
            <div class="flex w-full flex-row gap-4 rounded-xl bg-white/10 p-4">
              <img
                :src="authors[Number(data?.author_id) - 1 || 0].img"
                alt="User avatar"
                class="h-12 w-12 rounded-full"
              />
              <div class="flex flex-col gap-2">
                <span class="text-lg font-bold">{{
                  authors[Number(data?.author_id) - 1 || 0].name
                }}</span>
                <span class="text-base">{{
                  authors[Number(data?.author_id) - 1 || 0].bio
                }}</span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h1 class="text-4xl">Tags</h1>
            <div class="flex flex-row flex-wrap gap-2">
              <div
                v-for="tag in data?.tags"
                class="flex flex-row items-center justify-center gap-2 rounded-xl bg-white/10 p-2"
              >
                <span class="text-lg font-bold">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="divider lg:divider-horizontal"></div>
        <p>
          <ContentDoc class="content flex flex-col gap-4" />
        </p>
      </div>
    </ContentRenderer>
  </main>
</template>

<style>
.content > h1 {
  font-size: unset;
  font-family: "Taviraj", "Sarabun", sans-serif;
  @apply text-3xl font-bold lg:text-4xl;
}

.content > h2 {
  font-size: unset;
  font-family: "Taviraj", "Sarabun", sans-serif;
  @apply text-2xl font-bold lg:text-3xl;
}

.content > h3 {
  font-size: unset;
  font-family: "Taviraj", "Sarabun", sans-serif;
  @apply text-xl font-bold lg:text-2xl;
}

.content > blockquote {
  @apply border-l-4 border-white/20 bg-white/10 p-4 text-lg lg:text-xl;
}

.content > p > img {
  @apply mx-auto my-2 max-h-[65vh] max-w-full rounded-xl object-cover;
}

.content > p > figcaption {
  @apply text-center italic text-gray-400;
}

.content > p > a {
  text-decoration: unset;
  text-decoration: underline;
}

.content > ul {
  @apply list-disc list-inside;
}

.content > iframe {
  @apply rounded-xl mx-auto;
}

.title {
  font-size: unset;
  font-family: "Taviraj", Tahoma, sans-serif;
  @apply text-4xl font-bold lg:text-6xl;
}

.subtitle {
  font-size: unset;
  font-family: "Taviraj", Tahoma, sans-serif;
  @apply text-lg lg:text-xl;
}
</style>
