<script setup lang="ts">
import { lives } from "~/data/live";

const allCategory = [...new Set(lives.map((live) => live.cat))];
</script>

<template>
  <div
    class="grid grid-cols-1 gap-8"
  >
    <div
      class="flex flex-col gap-4"
      v-for="(cat, idx) in allCategory"
      :key="cat"
    >
      <h1 class="md:text-6xl text-4xl font-bold italic font-serif md:text-left text-center col-span-2" :id="cat.replace(/'/, '')">
        <a :href="'#' + cat.replace(/'/, '')">{{ cat.replace(/-/g, " ").toUpperCase() }}</a>
      </h1>

      <div class="grid md:grid-cols-3 grid-cols-1 gap-2">
        <div
          v-for="live in lives.filter((l) => l.cat === cat)"
          :key="live.name"
          @click="navigateTo(`/live/${live.type.replace(/'/, '')}/${live.ep}`)"
          class="w-full relative box-content flex flex-none cursor-pointer snap-start"
        >
          <div
            class="relative flex h-96 w-full w-full flex-col gap-0 rounded-xl bg-black/40 bg-origin-border bg-blend-multiply"
            :style="{
                  backgroundImage: `url(${live.thumb})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }"
          >
            <div
              class="flex h-full w-full flex-col items-center items-center justify-center justify-between gap-0 rounded-xl bg-black/75 p-4 duration-200 hover:bg-black/50"
            >
              <div class="flex flex-col items-center justify-center gap-4 h-full">
                <h1
                  class="article-title text-center text-4xl font-bold"
                >
                  {{ live.type.toUpperCase().replace(/-/g, " ") }} EP.{{ live.ep }}
                </h1>
                <h1
                  class="article-title text-center text-xl"
                >
                  {{ live.name.split("—")[1] }}
                </h1>
              </div>
              <div
                class="absolute bottom-0 right-0 flex w-full flex-col gap-2"
              >

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider" v-if="idx+1 < allCategory.length"></div>
    </div>
  </div>
</template>