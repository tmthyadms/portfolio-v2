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
    class="chip-ring"
    :label="props.label"
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
</style>
