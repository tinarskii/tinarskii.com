<script setup lang="ts">
useHead({
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
      content: "solidjs,tinarskii,tinnaphat,ติณณภัทร์,ทินนาร์สกี้",
    },
  ],
})

import { authors } from "~/data/data";
import {
  AisInstantSearch,
  AisSearchBox,
  AisHits,
} from "vue-instantsearch/vue3/es/index.js";

const algolia = useAlgoliaRef();
const indexName = "new-index-1671618013";
</script>

<template>
  <div class="flex w-full flex-col justify-center gap-6">
    <div class="flex w-full flex-col gap-4">
      <h1 class="text-left text-center text-4xl md:text-left md:text-6xl">
        Browse articles
      </h1>
      <ais-instant-search :index-name="indexName" :search-client="algolia">
        <div class="flex w-full flex-row items-center">
          <ais-search-box />
        </div>
        <ais-hits>
          <template v-slot:item="{ item }">
            <div
              @click="navigateTo(item._path)"
              class="item relative box-content flex h-full flex-none cursor-pointer snap-start"
            >
              <div
                class="relative flex h-96 w-full w-full flex-col gap-0 rounded-xl bg-black/40 bg-origin-border bg-blend-multiply"
                :style="{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }"
              >
                <div
                  class="flex h-full w-full flex-col items-center items-center justify-center justify-between gap-0 rounded-xl bg-black/75 p-4 duration-200 hover:bg-black/50"
                >
                  <div class="flex flex-col items-center justify-center gap-12">
                    <h1
                      class="article-title text-center text-xl font-bold lg:text-2xl"
                    >
                      {{ item.title }}
                    </h1>
                    <p class="lg:text-lg">
                      {{
                        item.description.length > 125
                          ? item.description.slice(0, 125) + "..."
                          : item.description
                      }}
                    </p>
                  </div>
                  <div
                    class="absolute bottom-0 right-0 flex w-full flex-col gap-2"
                  >
                    <!-- Date written -->
                    <div class="text-center">
                      <p class="article-title">⏰ {{ item.date }}</p>
                    </div>
                    <!-- User card -->
                    <div class="rounded-b-xl bg-black/75 p-4">
                      <div class="flex w-full flex-row items-center gap-4">
                        <img
                          :src="authors[Number(item.author_id) - 1 || 0].img"
                          alt="User avatar"
                          class="h-12 w-12 rounded-full"
                        />
                        <div class="flex flex-col gap-2">
                          <span class="text-sm font-bold">{{
                            authors[Number(item.author_id) - 1 || 0].name
                          }}</span>
                          <span class="text-xs">{{
                            authors[Number(item.author_id) - 1 || 0].bio
                          }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </ais-hits>
      </ais-instant-search>
    </div>
  </div>
</template>

<style>
.ais-SearchBox,
.ais-SearchBox-form {
  @apply my-2 flex w-full flex-row gap-2;
}

.ais-SearchBox-input {
  @apply input-primary input w-full;
}

.ais-SearchBox-submit {
  @apply btn-primary btn-circle btn;
}

.ais-SearchBox-reset {
  @apply btn-error btn-circle btn;
}

.ais-SearchBox-submit,
.ais-SearchBox-reset > svg {
  @apply invert;
}

.ais-Hits-list {
  @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3;
}

ol {
  display: flex;
}
</style>
