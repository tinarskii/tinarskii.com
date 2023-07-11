<script setup lang="ts">
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
      <h1 class="text-center text-4xl md:text-left md:text-6xl">
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
                class="relative flex h-96 w-full w-full flex-col gap-0 rounded-xl bg-black/25 bg-origin-border bg-blend-multiply"
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
                        item.description.length > 100
                          ? item.description.slice(0, 97) + "..."
                          : item.description
                      }}
                    </p>
                  </div>
                  <div
                    class="absolute bottom-2 right-0 flex w-full flex-col gap-2"
                  >
                    <!-- Date written -->
                    <div class="text-center">
                      <p class="article-title">⏰ {{ item.date }}</p>
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
  @apply grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3;
}
</style>
