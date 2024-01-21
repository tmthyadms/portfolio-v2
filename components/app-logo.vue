<script setup lang="ts">
interface Props {
  short?: boolean;
}
const props = withDefaults(defineProps<Props>(), { short: false });
const isShort = computed(() => props.short);
</script>

<template>
  <p class="font-shadows text-xl font-bold text-content">
    T<span v-if="!isShort">imothy&nbsp;</span>
    <span class="text-primary">A<span v-if="!isShort">dams</span></span>
  </p>
</template>
