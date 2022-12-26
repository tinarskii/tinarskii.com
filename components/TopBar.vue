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
        <lazy-nuxt-img
          src="/icons/ring-thin.svg"
          alt="Creatorsgarten Ring"
          sizes="xs:16px sm:32px"
        />
      </NuxtLink>
      <NuxtLink
        to="https://webring.wonderful.software#tinarskii.com"
        title="วงแหวนเว็บ"
        class="max-w-[32px]"
      >
        <lazy-nuxt-img
          src="/icons/webring.svg"
          alt="Webring.in.th Ring"
          sizes="xs:16px sm:32px"
        />
      </NuxtLink>
    </div>

    <!-- Logo -->
    <div class="block">
      <NuxtLink to="/">
        <!-- 8.3 : 1 (Shitty ratio i know) -->
        <nuxt-img
          format="webp"
          quality="50"
          src="/wordmark.png"
          alt="TINARSKII"
          class="ml-auto cursor-pointer invert"
          sizes="xs:256px sm:300px"
        />
      </NuxtLink>
    </div>
  </div>
</template>
