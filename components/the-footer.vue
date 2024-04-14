<script setup lang="ts">
import socials from "@/assets/data/socials.json";
</script>

<template>
  <footer>
    <prime-divider align="center">
      <app-logo :short="true" />
    </prime-divider>
    <div
      class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:flex lg:items-center lg:justify-between lg:px-8 lg:py-4"
    >
      <div class="flex justify-center gap-x-1.5 lg:order-2">
        <template v-for="social in socials">
          <a
            class="p-ripple p-button p-button-sm p-button-square p-button-text p-button-plain p-button-icon-only"
            v-ripple
            :href="social.to"
            target="_blank"
          >
            <icon :name="social.icon" size="1.25rem" />
          </a>
        </template>
      </div>
      <div class="mt-3 flex justify-center lg:order-1 lg:mt-0 lg:justify-start">
        <p class="text-sm text-content">
          <icon class="mb-0.5" name="ph:star-duotone" />&nbsp;<time
            datetime="2024"
            >2024</time
          >&nbsp;<span>Timothy Adams</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.p-button {
  @apply shadow-none;
}
</style>
