<script setup>
  import * as data from "../data.ts";
</script>

<template>
  <div class="page-container">
    <div class="top-bar">
      <div class="icon-container">
        <img src="~/assets/img/webring.svg" alt="Webring.in.th Ring">
        <img src="~/assets/img/ring-thin.svg" alt="Creatorsgarten Ring">
      </div>
    </div>

    <div class="big-image">
      <img src="~/assets/img/cover.jpg" alt="Tin at National Science Museum">
    </div>

    <div class="title-container">
      <h1>
        Tinnaphat "Tin" Somsang
      </h1>
      <h2>
        Tinarskii
      </h2>
    </div>

    <article class="description-container">
      {{ data.about.desc }}
    </article>

    <div class="two-rows-grid">
      <section class="grid-pane">
        <header>🎈Personal Information</header>
        <div class="pane-grid">
          <p><b>Name</b></p>
          <p>{{ data.about.name }}</p>
          <p><b>Nickname</b></p>
          <p>{{ data.about.nick }}</p>
          <p><b>Also Known As</b></p>
          <p>{{ data.about.aka }}</p>
          <p><b>Date of Birth</b></p>
          <p>{{ data.about.dob }}</p>
          <p><b>Age</b></p>
          <p>{{ data.about.age }}</p>
          <p><b>Occupations</b></p>
          <p>{{ data.about.jobs }}</p>
          <p><b>Communication</b></p>
          <p>{{ data.about.language }}</p>
        </div>
      </section>
      <section class="grid-pane">
      </section>
    </div>

  </div>
</template>

<style scoped>
  .page-container {
    display: grid;
    width: 100%;
    place-items: center;
    gap: 3rem;
  }

  .top-bar {
    position: absolute;
    padding: 2rem;
    top: 0;
    left: 0;
  }

  .icon-container {
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }

  .icon-container > img {
    height: 32px;
    width: 32px;
  }

  .big-image {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 83.5vw;
    height: 63.5vh;
    margin: auto;
    border-radius: 20px;
  }

  .big-image > img {
    flex-shrink: 0;
    min-width: 100%;
    min-height: 100%
  }

  .title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .title-container > h1 {
    font-size: 3.75rem;
  }

  .description-container {
    font-size: 1.125rem;
    text-align: justify;
    line-height: 1.5rem;
  }

  .two-rows-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }

  .grid-pane > header {
    font-size: 2.25rem;
    line-height: 2.5rem;
    text-align: left;
  }

  .grid-pane > .pane-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-items: center;
  }

  @media (min-width: 768px) {
    .page-container {
      margin-top: 6rem;
    }
  }

  @media (min-width: 1024px) {
    .description-container {
      text-align: left;
      max-width: 80vw;
    }

    .two-rows-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .grid-pane {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 1rem;
    }
  }
</style>