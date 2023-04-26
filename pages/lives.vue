<script setup lang="ts">
import { lives } from "~/data/live";
</script>

<template>
  <div
    class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 w-full"
  >
    <div
      v-for="live in lives"
      @click="navigateTo(`/live/${live.type}/${live.ep}`)"
      class="w-full relative box-content flex h-full flex-none cursor-pointer snap-start"
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
              {{ live.type.toUpperCase() }} EP.{{ live.ep }}
            </h1>
            <h1
              class="article-title text-center text-xl"
            >
              {{ live.name.split('—')[1] }}
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
</template>