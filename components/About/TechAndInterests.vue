<template>
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <!-- Techonology -->
    <section class="flex w-full flex-col gap-4">
      <header class="cursor-pointer text-center text-4xl lg:text-left">
        💻Technology
      </header>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="place-items-left grid grid-cols-2 items-center gap-6">
          <p><b>Programming Languages</b></p>
          {{ data.technology.lang.join(", ") }}
          <p><b>Frameworks</b></p>
          {{ data.technology.framework.join(", ") }}
          <p><b>IDEs</b></p>
          {{ data.technology.ides.join(", ") }}
          <p><b>Tools</b></p>
          {{ data.technology.tools.join(", ") }}
          <p><b>Other</b></p>
          {{ data.technology.misc.join(", ") }}
        </div>
      </div>
    </section>

    <!-- Interests -->
    <section class="flex w-full flex-col gap-4">
      <header class="cursor-pointer text-center text-4xl lg:text-left">
        💍Interests
      </header>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="place-items-left grid grid-cols-2 items-center gap-6">
          <p><b>Subject</b></p>
          {{ data.interests.subject.join(", ") }}
          <p><b>Games</b></p>
          {{ data.interests.games.join(", ") }}
          <p><b>Music</b></p>
          {{ data.interests.music.join(", ") }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>
