<script setup lang="ts">
import { authors } from "~/data/data";
const path = useRoute();
const tags = path.params.slug[0];
const articles = await queryContent("/articles")
  .only([
    "_path",
    "id",
    "title",
    "description",
    "author_id",
    "date",
    "tags",
    "img",
  ])
  .where({ tags: { $contains: tags } })
  .find();
</script>

<template>
  <div class="flex w-full flex-col justify-center gap-6">
    <div class="flex w-full flex-col gap-4">
      <h1 class="text-left text-center text-4xl md:text-left md:text-6xl">
        Tags "{{ tags }}"
      </h1>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in articles"
          @click="navigateTo(item._path)"
          class="item relative box-content flex h-full flex-none cursor-pointer snap-start text-white"
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
                  class="article-title text-center text-xl font-bold"
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
              <div class="absolute bottom-0 right-0 flex w-full flex-col gap-2">
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
      </div>
    </div>
  </div>
</template>
