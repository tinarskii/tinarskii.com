<template>
  <div>
    <NuxtLayout>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in'}" />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-leave-to {
  transform: translateX(100%);
  opacity: 0;
  overflow-x: hidden;
}

.page-enter-from {
  transform: translateX(-100%);
  opacity: 0;
  overflow-x: hidden;
}
</style>
