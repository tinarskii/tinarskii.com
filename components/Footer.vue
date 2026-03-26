<script setup>
const currentPath = useRoute().path;
</script>

<template>
  <!-- Footer -->
  <div
    class="flex w-full items-center justify-center py-4"
    v-show="!currentPath.startsWith('/demo')"
  >
    <p class="text-center text-gray-400">
      No parts had been made with AI <br/>
      Made with 💋 by Tinnaphat Somsang <br />
      <br/> Inspired by Narze's <a href="https://github.com/narze/resume" class="underline">Resumette</a> <br/>
      No Rights Reserved.
      <a
        href="https://github.com/t1narskii/nuxt-tinarskii.com"
        class="underline"
      >
        View source
      </a>
    </p>
  </div>
</template>
