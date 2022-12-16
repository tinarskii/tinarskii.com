<template>
  <!-- Top bar elements -->
  <div class="flex w-full flex-row justify-between">
    <!-- Rings -->
    <div class="top-0 left-0 mx-auto flex flex-row items-center gap-4 md:mx-0">
      <a
        href="https://creatorsgarten.org/ring"
        title="Creatorsgarten Ring"
        class="h-[32px] w-[32px]"
      >
        <img src="@/assets/img/ring-thin.svg" alt="Creatorsgarten Ring" />
      </a>
      <a
        href="https://webring.wonderful.software#tinarskii.com"
        title="วงแหวนเว็บ"
        class="h-[32px] w-[32px]"
      >
        <img
          src="@/assets/img/webring.svg"
          alt="Webring.in.th Ring"
          class="h-[32px] w-[32px]"
        />
      </a>
    </div>

    <!-- Logo -->
    <div class="hidden lg:block">
      <img
        src="@/assets/img/wordmark.png"
        alt="TINARSKII"
        class="ml-auto w-1/3 invert"
      />
    </div>
  </div>
</template>
