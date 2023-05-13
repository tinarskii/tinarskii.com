<template>
  <section class="flex w-full flex-col gap-4">
    <header class="cursor-pointer text-center text-4xl lg:text-left">
      🧑‍💻Projects
    </header>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <section
        v-for="project in data.projects"
        class="rounded-xl bg-white/10 bg-center bg-no-repeat">
        <div
          class="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-black/75 p-6"
        >
          <p class="text-xl">
            <b>{{ project.name }}</b> by {{ project.from }}
          </p>
          {{ project.info }}
          <div class="flex flex-row gap-2">
            <NuxtLink :to="'//' + project.link" class="btn-primary btn-sm btn">
              Visit Website
            </NuxtLink>
            <NuxtLink :to="'//' + project.gh" class="btn-ghost btn-sm btn">
              View Repository
            </NuxtLink>
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
