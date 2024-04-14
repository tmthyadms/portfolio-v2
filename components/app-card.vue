<script setup lang="ts">
interface Props {
  icon?: string;
  title: string;
  subtitle?: string;
  description?: string;
}
const props = defineProps<Props>();
</script>

<template>
  <prime-card class="app-ring shadow">
    <template v-if="props.icon" #header>
      <Icon class="text-primary" :name="props.icon" size="2.5rem" />
    </template>
    <template #title>{{ props.title }}</template>
    <template v-if="props.subtitle || !!useSlots()['subtitle']" #subtitle>
      <slot name="subtitle">{{ props.subtitle }}</slot>
    </template>
    <template #content>
      <slot name="content">
        <p class="text-[15px]">{{ props.description }}</p>
      </slot>
    </template>
    <template v-if="!!useSlots()['footer']" #footer>
      <slot name="footer"></slot>
    </template>
  </prime-card>
</template>

<style scoped>
@import url("@/assets/css/card.css");
</style>
