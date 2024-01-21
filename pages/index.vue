<script setup lang="ts">
useServerSeoMeta({
  title: "Portfolio | TA",
  ogTitle: "Portfolio | TA",
  description: "Always bet on Timothy.",
  ogDescription: "Always bet on Timothy.",
});
</script>

<template>
  <div class="hero-overlay hero-overlay-blob">
    <hero-about id="about" />
  </div>
  <hero-experience id="experience" />
  <hero-education id="education" />
  <hero-projects id="projects" />
</template>

<style scoped>
.hero-overlay {
  @apply aspect-[960/540] bg-contain bg-no-repeat;
}
.hero-overlay-blob {
  @apply bg-[url('@/assets/images/light-blob.svg')] dark:bg-[url(@/assets/images/dark-blob.svg)];
}
</style>
