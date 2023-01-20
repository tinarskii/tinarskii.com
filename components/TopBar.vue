<template>
  <!-- Top bar elements -->
  <div class="flex w-full flex-row items-center justify-between gap-12">
    <!-- Rings -->
    <div class="top-0 left-0 mx-0 flex flex-row items-center gap-4">
      <NuxtLink
        to="https://creatorsgarten.org/ring"
        title="Creatorsgarten Ring"
        class="max-w-[32px]"
      >
        <img
          src="/icons/ring-thin.svg"
          alt="Creatorsgarten Ring"
        />
      </NuxtLink>
      <NuxtLink
        to="https://webring.wonderful.software#tinarskii.com"
        title="วงแหวนเว็บ"
        class="max-w-[32px]"
      >
        <img
          src="/icons/webring.svg"
          alt="Webring.in.th Ring"
        />
      </NuxtLink>
    </div>

    <!-- Logo -->
    <div class="block">
      <NuxtLink to="/">
        <!-- 8.3 : 1 (Shitty ratio i know) -->
        <img
          src="/wordmark.png"
          alt="TINARSKII"
          class="sm:w-[300px] w-[200px] ml-auto cursor-pointer"
        />
      </NuxtLink>
    </div>
  </div>
</template>
