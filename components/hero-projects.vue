<script setup lang="ts">
import projects from "@/assets/data/projects.json";

const items = ref(projects);
const responsiveOptions = ref([
  {
    breakpoint: "1440px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 1,
    numScroll: 1,
  },
]);
enum Orientation {
  Horizontal = "horizontal",
  Vertical = "vertical",
}
const orientation: Ref<Orientation> = ref(Orientation.Horizontal);
onMounted(() => {
  const mobileMediaQuery = "not all and (min-width: 768px)";
  const currentMedia = matchMedia(mobileMediaQuery);

  updateOrientation(currentMedia);
  currentMedia.addEventListener("change", updateOrientation);
});
function updateOrientation(mobileMedia: MediaQueryList | MediaQueryListEvent) {
  const isMobile = mobileMedia.matches;
  orientation.value = isMobile ? Orientation.Vertical : Orientation.Horizontal;
}
</script>

<template>
  <app-hero title="Projects" description="See what I've developed.">
    <template #links>
      <a
        v-ripple
        href="https://github.com/tmthyadms?tab=repositories"
        target="_blank"
        class="p-ripple p-button p-button-sm p-button-secondary p-button-outlined"
      >
        <icon name="mdi:folder-multiple-outline" size="1rem" />
        See all projects
      </a>
    </template>
    <prime-carousel
      :value="items"
      :num-visible="4"
      :num-scroll="1"
      :responsive-options="responsiveOptions"
      :orientation="orientation"
      vertical-view-port-height="480px"
      :autoplay-interval="3000"
      circular
      class="max-w-80 sm:max-w-xl lg:max-w-screen-lg 2xl:max-w-screen-2xl"
    >
      <template #item="{ data }">
        <card-project
          :image="data.image"
          :title="data.title"
          :subtitle="data.subtitle"
          :description="data.description"
          :to="data.to"
          class="m-2"
        />
      </template>
    </prime-carousel>
  </app-hero>
</template>

<style scoped>
:deep(.p-carousel-item) {
  @apply flex;
}
</style>
