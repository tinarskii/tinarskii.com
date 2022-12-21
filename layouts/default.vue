<template>
  <div class="page-layouts">
    <NuxtLoadingIndicator color="#f28c18" class="p-1" />
    <TopBar />
    <NavBar />
    <slot />
    <LazyFooter />
  </div>
</template>
