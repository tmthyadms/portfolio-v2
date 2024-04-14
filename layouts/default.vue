<script setup lang="ts">
const openSearch = ref(false);
</script>

<template>
  <div class="flex min-h-screen flex-col justify-between">
    <the-header @open-search="openSearch = true" />
    <main>
      <slot />
    </main>
    <the-footer />
  </div>
  <dialog-search v-model="openSearch" />
</template>
