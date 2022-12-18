<script setup>
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/me",
  },
  {
    name: "Articles",
    path: "/articles",
  },
];
</script>

<template>
  <div class="flex w-full flex-row gap-2 rounded-lg bg-gray-400/25 p-2">
    <button
      v-for="link in links"
      :class="$route.path === link.path ? 'nav-btn--active' : 'nav-btn'"
      @click="navigateTo(link.path)"
    >
      {{ link.name }}
    </button>
  </div>
</template>

<style scoped>
.nav-btn {
  @apply h-full w-full rounded-lg bg-black/40 p-3 text-lg duration-200 hover:bg-black/60;
}

.nav-btn--active {
  @apply h-full w-full rounded-lg bg-black/75 p-3 text-lg;
}
</style>
