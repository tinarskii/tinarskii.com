<script setup lang="ts">
import { authors } from "~/data";

const articles = await queryContent("/articles").limit(5).find();
const sorted = articles.sort((a, b) => b.id - a.id);
</script>

<template>
  <div class="flex w-full flex-col justify-center gap-6">
    <div class="flex w-full flex-col gap-4">
      <h1 class="text-left text-center text-4xl md:text-left md:text-6xl">
        Recent articles
      </h1>
      <div
        class="flex flex-col flex-wrap justify-evenly gap-x-4 gap-y-8 lg:max-w-max lg:flex-row lg:overflow-x-scroll"
      >
        <div
          v-for="article in sorted"
          @click="navigateTo(article._path)"
          class="item relative box-content flex h-full flex-none cursor-pointer snap-start"
        >
          <div
            class="relative flex h-96 w-full flex-col gap-0 rounded-xl bg-black/40 bg-origin-border lg:w-[32vw]"
            :style="{
              backgroundImage: `url(${article.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <div
              class="flex h-full w-full flex-col items-center items-center justify-center justify-between gap-0 rounded-xl bg-black/75 p-4 duration-200 hover:bg-black/50"
            >
              <div class="flex flex-col items-center justify-center gap-2">
                <h1 class="article-title text-center text-2xl lg:text-3xl">
                  {{ article.title }}
                </h1>
                <p class="article-title lg:text-lg">
                  {{
                    article.description.length > 125
                      ? article.description.slice(0, 125) + "..."
                      : article.description
                  }}
                </p>
              </div>
              <div class="absolute bottom-0 right-0 flex w-full flex-col gap-2">
                <!-- Date written -->
                <div class="text-center">
                  <p class="article-title">⏰ {{ article.date }}</p>
                </div>
                <!-- User card -->
                <div class="rounded-b-xl bg-black/75 p-4">
                  <div class="flex w-full flex-row items-center gap-4">
                    <img
                      :src="authors[Number(article.author_id) - 1 || 0].img"
                      alt="User avatar"
                      class="h-12 w-12 rounded-full"
                    />
                    <div class="flex flex-col gap-2">
                      <span class="text-sm font-bold">{{
                        authors[Number(article.author_id) - 1 || 0].name
                      }}</span>
                      <span class="text-xs">{{
                        authors[Number(article.author_id) - 1 || 0].bio
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
