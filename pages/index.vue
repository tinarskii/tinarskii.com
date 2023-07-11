<script setup>
import * as data from "~/data/data.ts";
</script>

<template>
  <div class="flex flex-col gap-12">
    <div class="grid grid-cols-1 bg-gradient-to-r from-orange-500 to-pink-700 rounded-2xl gap-6">
      <div class="flex flex-col">
        <nuxt-img src="/nobg.png" class="place-self-center" alt="tin" />
      </div>
    </div>

    <section class="flex flex-col items-center gap-2">
      <h1 class="text-center text-5xl md:text-6xl">
        {{ data.about.name.split(" ")[0] }} {{ data.about.name.split(" ")[1] }}
      </h1>
      <h2 class="text-center text-xl italic text-gray-500 md:text-2xl">
        ({{ data.about.aka }})
      </h2>
    </section>


    <!-- About -->
    <article class="text-left text-lg">
      {{ data.about.desc }}
    </article>

    <!-- Personal Info & Connect -->
    <LazyAboutInfoAndConnect :data="data" />

    <!-- Education -->
    <LazyAboutEducation :data="data" />

    <!-- Events -->
    <LazyAboutEvents :data="data" />

    <!-- Projects -->
    <LazyAboutProjects :data="data" />

    <!-- Tech & Interests -->
    <LazyAboutTechAndInterests :data="data" />
  </div>
</template>
