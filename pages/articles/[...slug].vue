<script setup>
const { path } = useRoute();

const { data } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>

<template>
  <main class="flex flex-col gap-12">
    <ContentRenderer v-if="data" :value="data">
      <div class="flex w-full cursor-pointer flex-row">
        <img
          class="h-[65vh] w-full rounded-xl object-cover"
          :src="data?.image"
        />
      </div>
      <div class="flex flex-col items-center justify-center gap-2">
        <h1 class="text-4xl font-bold lg:text-6xl">{{ data.title }}</h1>
        <h2 class="text-xl italic lg:text-2xl">{{ data.description }}</h2>
      </div>

      <p>
        <ContentDoc />
      </p>
    </ContentRenderer>
  </main>
</template>

<style scoped>
h1 {
  @apply text-4xl lg:text-6xl;
}
</style>
