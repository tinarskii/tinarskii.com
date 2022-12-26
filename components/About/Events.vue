<template>
  <section class="flex w-full flex-col gap-4">
    <header
      class="cursor-pointer text-center text-4xl lg:text-left lg:text-left"
    >
      ✨Events
    </header>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <section
        v-for="evt in data.events"
        class="hoverable rounded-lg bg-white/10 bg-center"
        :style="{ backgroundImage: `url('${evt.img}')` }"
      >
        <div
          class="flex h-full w-full flex-col justify-center gap-4 rounded-lg bg-black/75 p-6"
        >
          <div class="flex flex-col items-center justify-center">
            <p class="text-xl">
              <b>{{ evt.name }}</b>
            </p>
            <p>(Organized by {{ evt.org }})</p>
          </div>
          <p>as a {{ evt.roles }}</p>
          <p>{{ evt.info }}</p>
          <div class="flex flex-col items-center justify-center">
            <p v-if="evt.award">Awards: {{ evt.award }}</p>
            <p v-if="evt.links">
              Links:
              <NuxtLink :to="evt.links" class="underline">Watch</NuxtLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  props: ["data"],
};
</script>
