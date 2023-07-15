<script setup>
const currentPath = useRoute().path;
</script>

<template>
  <!-- Footer -->
  <div
    class="flex w-full items-center justify-center"
    v-show="!currentPath.startsWith('/demo')"
  >
    <p class="text-center text-gray-400">
      Copyright © 2023 Tinnaphat Somsang <br />
      All rights reserved.
      <a
        href="https://github.com/t1narskii/nuxt-tinarskii.com"
        class="underline"
      >
        View source
      </a>
    </p>
  </div>
</template>
