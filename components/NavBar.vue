<script setup>
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "Lives",
    path: "/lives",
  },
];
const currentPath = useRoute().path;
</script>

<template>
  <div class="navbar p-4" v-show="!currentPath.startsWith('/demo')">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#f28c18"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white border-2 border-primary shadow-lg rounded-lg w-52 gap-2">
            <button
              v-for="link in links"
              class="btn btn-primary btn-outline border-none"
              @click="navigateTo(link.path)"
            >
              {{ link.name }}
            </button>
        </ul>
      </div>
    </div>
    <div class="md:navbar-center">
      <img
        src="/wordmark.svg"
        alt="Tinarskii's Logo"
        @click="navigateTo('/')"
        class="w-[300px] cursor-pointer"
      />
    </div>
    <div class="md:navbar-end md:flex hidden">
      <div class="flex flex-row items-center gap-4">
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
    </div>
  </div>
</template>