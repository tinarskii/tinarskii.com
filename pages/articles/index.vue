<script setup>
const articles = await queryContent("/articles").find();
const sorted = articles.slice(0, 5).sort((a, b) => a.id - b.id);
</script>

<template>
  <div class="flex w-full flex-col justify-center gap-6">
    <div class="flex w-full flex-col gap-4">
      <h1 class="text-left text-center text-4xl md:text-left md:text-6xl">
        Recent articles
      </h1>
      <div
        class="flex max-w-max flex-row flex-wrap justify-evenly gap-2 overflow-x-scroll"
      >
        <div
          v-for="article in sorted"
          @click="navigateTo(article._path)"
          class="item relative box-content flex h-full flex-none cursor-pointer snap-start"
        >
          <div
            class="flex h-96 w-72 flex-col gap-0 rounded-xl bg-black/40 bg-origin-border"
            :style="{
              backgroundImage: `url(${article.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <div
              class="flex h-full w-full flex-col items-center items-center justify-center justify-between gap-0 rounded-xl bg-black/75 p-4 duration-200 hover:bg-black/50"
            >
              <div class="flex flex-col items-center justify-center">
                <h1>{{ article.title }}</h1>
                {{
                  article.description.length > 125
                    ? article.description.slice(0, 125) + "..."
                    : article.description
                }}
              </div>
              {{ article.author }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex w-full flex-col gap-4">
      <h1 class="text-left text-center text-4xl md:text-left md:text-6xl">
        Browse all
      </h1>
      <div
        class="flex max-w-max flex-row flex-wrap justify-evenly gap-2 overflow-x-scroll"
      >
        <div
          v-for="article in articles"
          @click="navigateTo(article._path)"
          class="item relative box-content flex h-full flex-none cursor-pointer snap-start"
        >
          <div
            class="flex h-96 w-72 flex-col gap-0 rounded-xl bg-black/40 bg-origin-border"
            :style="{
              backgroundImage: `url(${article.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }"
          >
            <div
              class="flex h-full w-full flex-col items-center items-center justify-center justify-between gap-0 rounded-xl bg-black/75 p-4 duration-200 hover:bg-black/50"
            >
              <div class="flex flex-col items-center justify-center">
                <h1>{{ article.title }}</h1>
                {{
                  article.description.length > 125
                    ? article.description.slice(0, 125) + "..."
                    : article.description
                }}
              </div>
              {{ article.author }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
