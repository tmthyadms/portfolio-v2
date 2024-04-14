<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
  description: string;
  category: string;
  image: string;
  to?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <prime-card class="app-ring shadow">
    <template #header>
      <PrimeImage
        :src="props.image"
        :alt="`${props.title}'s image'`"
        size="64"
        preview
      >
        <!-- TODO: fix primevue's image component documentation -->
        <template #indicatoricon>
          <icon name="ph:eye-duotone" size="1.25rem" />
        </template>
      </PrimeImage>
      <app-chip
        class="mx-4 mt-5 sm:mx-5 sm:mt-6"
        :label="props.category"
        severity="primary"
      />
    </template>
    <template #title>
      {{ props.title }}
    </template>
    <template v-if="props.subtitle" #subtitle>
      {{ props.subtitle }}
    </template>
    <template #content>
      <p class="text-[15px]">{{ props.description }}</p>
    </template>
    <template v-if="props.to" #footer>
      <a
        class="p-ripple p-button p-button-sm p-button-secondary p-button-outlined"
        v-ripple
        :href="props.to"
        target="_blank"
        ><icon name="ph:bookmark-simple-duotone" /> Learn more
      </a>
    </template>
  </prime-card>
</template>

<style scoped>
@import url("@/assets/css/card.css");

:deep(.p-card-header) {
  @apply p-0;
}
</style>
