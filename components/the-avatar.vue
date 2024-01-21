<script setup lang="ts">
// Profile Picture Fallback
const isLoading = ref(false);
onMounted(() => {
  const profilePic = document.querySelector(
    "#profile-avatar img",
  ) as HTMLImageElement;
  const hasCompleted = profilePic.complete;
  const hasNaturalWidth = profilePic.naturalWidth > 0;
  isLoading.value = hasCompleted && hasNaturalWidth ? false : true;
});
</script>

<template>
  <div class="group">
    <prime-avatar
      v-show="!isLoading"
      id="profile-avatar"
      image="profile-picture.png"
      class="mask mask-squircle avatar-size overflow-hidden shadow-xl"
    />
    <prime-avatar
      v-if="isLoading"
      label="TA"
      class="mask mask-squircle avatar-size font-shadows text-3xl font-bold text-content shadow-xl sm:text-4xl lg:text-5xl"
    />
  </div>
</template>

<style scoped>
.p-avatar > :deep(img) {
  @apply transition-transform duration-300 ease-out group-hover:scale-110;
}

.avatar-size {
  @apply h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56;
}
</style>
