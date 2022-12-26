<template>
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
</template>

<script>
export default {
  props: ["data"],
};
</script>
