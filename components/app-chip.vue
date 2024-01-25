<script setup lang="ts">
interface Props {
  label: string;
  severity?: "null" | "primary";
}
const props = withDefaults(defineProps<Props>(), { severity: "null" });
const isPrimary = computed(() => props.severity === "primary");
</script>

<template>
  <prime-chip
    :label="props.label"
    class="chip-ring"
    :class="{ 'chip-primary chip-ring-primary': isPrimary }"
  />
</template>

<style scoped>
.p-chip {
  @apply rounded-md bg-surface-b dark:bg-surface-c;
}

:deep(.p-chip-text) {
  @apply text-xs font-medium;
}

.chip-primary {
  @apply bg-primary-50 text-primary;
}

.chip-ring {
  @apply ring-surface-200 dark:ring-surface-100 ring-1 ring-inset;
}

.chip-ring-primary {
  @apply ring-primary ring-opacity-25;
}
</style>
