<script setup lang="ts">
interface Props {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  to?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <prime-card class="app-ring shadow">
    <template #header>
      <prime-image :src="props.image" alt="" size="64" preview />
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
      <a v-ripple :href="props.to" target="_blank" class="p-ripple p-button"
        >Learn more <icon name="mdi:arrow-right" size="1.25rem" />
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
