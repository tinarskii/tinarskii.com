<template>
  <div class="page-layouts">
    <NuxtLoadingIndicator />
    <TopBar />
    <NavBar />
    <slot />
    <LazyFooter />
  </div>
</template>
