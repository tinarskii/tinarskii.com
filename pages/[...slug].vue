<script setup>
import { links } from "~/data/link";

const route = useRoute();
const slug = route.params.slug;

if (links[slug]) {
  navigateTo(links[slug], { external: true });
}
</script>

<template>
  <slot />
</template>
