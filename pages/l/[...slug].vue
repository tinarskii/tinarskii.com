<script setup>
import { links } from "~/data/link";

const route = useRoute();
const slug = route.params.slug

if (links[slug]) {
  navigateTo(links[slug], { external: true });
}
</script>

<template>
  <h1 class="text-6xl text-center">
    😭 Invalid Link
  </h1>
  <p class="text-xl">
    The link you are trying to access is invalid.
    Are you sure you typed it correctly?
    Or maybe the link has expired.
  </p>
</template>