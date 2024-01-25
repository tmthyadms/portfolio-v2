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
const isVertical = computed(() => orientation.value === Orientation.Vertical);
const nextIcon = computed(() =>
  isVertical.value ? "ph:arrow-down" : "ph:arrow-right",
);
const previousIcon = computed(() =>
  isVertical.value ? "ph:arrow-up" : "ph:arrow-left",
);
</script>

<template>
  <app-hero title="Projects" description="See what I've developed.">
    <template #links>
      <a
        v-ripple
        href="https://github.com/tmthyadms?tab=repositories"
        target="_blank"
        class="p-ripple p-button p-button-contrast"
      >
        <icon name="ph:folders-duotone" size="1.25rem" />
        See all projects
      </a>
    </template>
    <prime-carousel
      :value="items"
      :num-visible="4"
      :num-scroll="1"
      :responsive-options="responsiveOptions"
      :orientation="orientation"
      vertical-view-port-height="490px"
      :autoplay-interval="3000"
      circular
      class="max-w-80 sm:max-w-xl lg:max-w-screen-lg 2xl:max-w-screen-2xl"
    >
      <template #item="{ data }">
        <card-project
          :title="data.title"
          :subtitle="data.subtitle"
          :description="data.description"
          :category="data.category"
          :image="data.image"
          :to="data.to"
          class="m-2"
        />
      </template>
      <template #nexticon>
        <icon :name="nextIcon" size="1.25rem" />
      </template>
      <template #previousicon>
        <icon :name="previousIcon" size="1.25rem" />
      </template>
    </prime-carousel>
  </app-hero>
</template>

<style scoped>
:deep(.p-carousel-prev),
:deep(.p-carousel-next) {
  @apply ring-surface-200 dark:ring-surface-100 bg-surface-b ring-1 ring-inset dark:bg-surface-c;
}

:deep(.p-carousel-prev:hover),
:deep(.p-carousel-next:hover) {
  @apply bg-primary/10 text-primary ring-primary ring-opacity-50;
}

:deep(.p-carousel-indicators) {
  @apply space-x-2;
}

:deep(.p-carousel-indicator) {
  @apply m-0;
}

:deep(.p-carousel-indicator button) {
  @apply h-2 w-2 rounded-full;
}

:deep(.p-carousel-item) {
  @apply flex;
}

:deep(.p-card-footer) {
  @apply mt-auto p-0;
}
</style>
