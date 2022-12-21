<script setup>
import * as data from "~/data/data.ts";
</script>

<template>
  <!-- Big image -->
  <div class="flex w-full cursor-pointer flex-row">
    <img
      src="@/assets/img/cover.jpg"
      alt="Tin at National Science Museum"
      class="h-[65vh] w-full rounded-xl object-cover"
    />
  </div>

  <!-- Title & Subtitle -->
  <section class="flex flex-col items-center gap-2">
    <h1 class="text-center text-5xl md:text-6xl">
      {{ data.about.name.split(" ")[0] }} "{{ data.about.nick }}"
      {{ data.about.name.split(" ")[1] }}
    </h1>
    <h2 class="text-center text-xl italic text-gray-500 md:text-2xl">
      ({{ data.about.aka }})
    </h2>
  </section>

  <!-- About -->
  <article class="text-left text-lg">
    {{ data.about.desc }}
  </article>

  <!-- Personal Info & Connect -->
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <!-- Personal Information -->
    <section class="flex w-full flex-col gap-4">
      <header class="cursor-pointer text-center text-4xl lg:text-left">
        🎈Personal Information
      </header>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div class="place-items-left grid grid-cols-2 items-center gap-6">
          <p><b>Name</b></p>
          <p>{{ data.about.name }}</p>
          <p><b>Nickname</b></p>
          <p>{{ data.about.nick }}</p>
          <p><b>Also Known As</b></p>
          <p>{{ data.about.aka }}</p>
          <p><b>Date of Birth</b></p>
          <p>{{ new Date(data.about.dob).toLocaleDateString("ja-JP") }}</p>
          <p><b>Age</b></p>
          <p>{{ data.about.age }}</p>
          <p><b>Occupations</b></p>
          <p>{{ data.about.jobs }}</p>
          <p><b>Languages</b></p>
          <p>{{ data.about.language }}</p>
        </div>
      </div>
    </section>

    <!-- Connect -->
    <section class="flex w-full flex-col gap-4">
      <header
        class="cursor-pointer text-center text-4xl lg:text-left"
        id="connect"
      >
        🔗Connect
      </header>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div
          class="place-items-left grid grid-cols-2 items-center gap-6"
          v-for="(_, idx) in data.contact"
        >
          <p v-if="idx % 2 === 0">
            <b>{{ data.contact[idx] }}</b>
          </p>
          <NuxtLink
            v-if="idx % 2 === 0"
            target="_blank"
            :to="`${
              data.contact[idx] === 'Email'
                ? 'mailto:'
                : data.contact[idx] === 'Telephone'
                ? 'tel:'
                : '//'
            }${data.contact[idx + 1]}`"
            rel="me"
          >
            {{ data.contact[idx + 1].split("/").pop() }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>

  <!-- Education -->
  <section class="flex w-full flex-col gap-4">
    <header
      class="cursor-pointer text-center text-4xl lg:text-left lg:text-left"
    >
      🎓Education
    </header>
    <div class="flex flex-row gap-6">
      <p v-for="edu in data.education">
        <b>{{ edu.name }}</b> ({{ edu.level }}) <br />
        {{ edu.prog }}, <br />
        GPAX: {{ edu.grade }} <br />
        Graduate: {{ edu.grad || "TBD" }} <br />
      </p>
    </div>
  </section>

  <!-- Events -->
  <section class="flex w-full flex-col gap-4">
    <header
      class="cursor-pointer text-center text-4xl lg:text-left lg:text-left"
    >
      ✨Events
    </header>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <section
        v-for="evt in data.events"
        class="hoverable rounded-lg bg-white/10 bg-center"
        :style="{ backgroundImage: `url('${evt.img}')` }"
      >
        <div
          class="flex h-full w-full flex-col justify-center gap-4 rounded-lg bg-black/75 p-6"
        >
          <div class="flex flex-col items-center justify-center">
            <p class="text-xl">
              <b>{{ evt.name }}</b>
            </p>
            <p>(Organized by {{ evt.org }})</p>
          </div>
          <p>as a {{ evt.roles }}</p>
          <p>{{ evt.info }}</p>
          <div class="flex flex-col items-center justify-center">
            <p v-if="evt.award">Awards: {{ evt.award }}</p>
            <p v-if="evt.links">
              Links:
              <NuxtLink :to="evt.links" class="underline">Watch</NuxtLink>
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>

  <!-- Projects -->
  <section class="flex w-full flex-col gap-4">
    <header class="cursor-pointer text-center text-4xl lg:text-left">
      🧑‍💻Projects
    </header>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <section
        v-for="project in data.projects"
        :class="`rounded-xl bg-white/10 bg-center bg-no-repeat
              ${project.full ? 'bg-cover' : 'bg-contain'} ${
          project.img ? 'bg-center' : ''
        }
              hoverable`"
        :style="{ backgroundImage: `url('${project.img}')` }"
      >
        <div
          class="flex h-full w-full flex-col items-center justify-center gap-4 rounded-lg bg-black/75 p-6 text-center"
        >
          <p class="text-xl">
            <b>{{ project.name }}</b> by {{ project.from }}
          </p>
          {{ project.info }}
          <div class="flex flex-row gap-2">
            <NuxtLink :to="'//' + project.link" class="btn-primary btn-sm btn">
              Visit Website
            </NuxtLink>
            <NuxtLink :to="'//' + project.gh" class="btn-ghost btn-sm btn">
              View Repository
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </section>

  <!-- Tech & Interests -->
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

<style scoped>
.hoverable {
  @apply transition-all duration-300 hover:scale-[1.05] hover:shadow-xl;
}
</style>
