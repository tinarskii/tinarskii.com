<template>
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
</template>

<script>
export default {
  props: [
    'data'
  ]
}
</script>