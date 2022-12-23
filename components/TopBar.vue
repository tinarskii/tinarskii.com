<template>
  <!-- Top bar elements -->
  <div class="flex w-full flex-row items-center justify-between">
    <!-- Rings -->
    <div class="top-0 left-0 mx-0 flex flex-row items-center gap-4">
      <NuxtLink
        to="https://creatorsgarten.org/ring"
        title="Creatorsgarten Ring"
        class="h-[32px] w-[32px]"
      >
        <img src="@/assets/img/ring-thin.svg" alt="Creatorsgarten Ring" />
      </NuxtLink>
      <NuxtLink
        to="https://webring.wonderful.software#tinarskii.com"
        title="วงแหวนเว็บ"
        class="h-[32px] w-[32px]"
      >
        <img
          src="@/assets/img/webring.svg"
          alt="Webring.in.th Ring"
          class="h-[32px] w-[32px]"
        />
      </NuxtLink>
    </div>

    <!-- Logo -->
    <div class="block">
      <NuxtLink to="/">
        <nuxt-img
          format="webp"
          quality="50"
          src="/wordmark.png"
          alt="TINARSKII"
          class="ml-auto h-8 cursor-pointer invert lg:h-full lg:w-1/3"
        />
      </NuxtLink>
    </div>
  </div>
</template>
