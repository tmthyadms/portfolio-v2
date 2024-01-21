<script setup lang="ts">
interface Props {
  title?: string;
  description?: string;
  align?: "left" | "center" | "right";
}
const props = withDefaults(defineProps<Props>(), {
  align: "center",
});
const isLeftAligned = computed(() => props.align === "left");
const isCenterAligned = computed(() => props.align === "center");
const isRightAligned = computed(() => props.align === "right");
</script>

<template>
  <div class="hero">
    <div
      class="hero-container flex-col gap-8 sm:gap-y-16"
      :class="{
        'lg:flex-row': isLeftAligned,
        'lg:flex-row-reverse': isRightAligned,
      }"
    >
      <div
        class="flex max-w-lg flex-col"
        :class="{ 'items-center': isCenterAligned }"
      >
        <div v-if="!!useSlots()['top']" class="mb-4">
          <slot name="top"></slot>
        </div>
        <slot name="title">
          <h1
            class="font-serif text-3xl sm:text-4xl lg:text-5xl"
            :class="{ 'text-center': isCenterAligned }"
          >
            {{ props.title }}
          </h1>
        </slot>
        <slot name="description">
          <p
            class="mt-4 text-lg text-content"
            :class="{ 'text-center': isCenterAligned }"
          >
            {{ props.description }}
          </p>
        </slot>
        <div
          v-if="!!useSlots()['links']"
          class="mt-8 flex items-center gap-x-3 gap-y-1"
          :class="{ 'justify-center': isCenterAligned }"
        >
          <slot name="links"></slot>
        </div>
      </div>
      <div v-if="!!useSlots()['default']" class="hero-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  @apply grid min-h-screen place-content-center;
}

.hero-container {
  @apply flex items-center;
}
</style>
