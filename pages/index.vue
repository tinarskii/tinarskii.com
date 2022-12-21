<script setup>
useHead({
  title: "Website of Tinarskii",
  meta: [
    {
      property: "og:title",
      content: "Website of Tinarskii",
      name: "title",
    },
    {
      property: "og:description",
      content:
        "I'm a student at Assumption Samutprakarn School. I love learning and teaching others. I enjoy math and science, but also love to code. I've been programming since I was 12 years old, and have been developing websites since then. I started contributing to open-source communities and have made some of the most popular sites on the web such as Wrong-Lang. My goal is to make programming accessible to everyone — not just those who are already good at it!",
      name: "description",
    },
    {
      property: "og:image",
      content: "https://www.tinarskii.com/banner.jpg",
      name: "image",
    },
    { property: "og:site_name", content: "Website of Tinarskii" },
    { property: "og:url", content: "https://www.tinarskii.com" },
    { property: "og:type", content: "website" },
    {
      name: "keywords",
      content: "solidjs,tinarskii,tinnaphat,ติณณภัทร์,ทินนาร์สกี้",
    },
  ],
})
</script>

<template>
  <div class="flex w-full cursor-pointer flex-row">
    <img
      src="/banner.jpg"
      alt="Tin at National Science Museum"
      class="h-[65vh] w-full rounded-xl object-cover"
    />
  </div>
</template>
