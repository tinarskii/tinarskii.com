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
      <div class="flex flex-col gap-2 items-center justify-center">
        <h1 class="lg:text-6xl text-4xl font-bold">{{ data.title }}</h1>
        <h2 class="lg:text-2xl text-xl italic">{{ data.description }}</h2>
      </div>

      <p>
        <ContentDoc />
      </p>
    </ContentRenderer>
  </main>
</template>

<style scoped>
h1 {
  @apply lg:text-6xl text-4xl
}
</style>