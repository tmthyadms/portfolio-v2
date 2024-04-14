<script setup lang="ts">
import jobs from "@/assets/data/experience.json";

const inplace = ref(false);
</script>

<template>
  <app-hero title="Experience" description="See where I've worked.">
    <template v-for="job in jobs">
      <app-card
        class="transition-opacity duration-1000 max-w-xl mx-4 sm:mx-auto"
        v-animateonscroll.once="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
        once
        :icon="!job.resigned ? 'ph:briefcase-duotone' : ''"
        :title="job.role.name"
      >
        <template #subtitle>
          <p class="mb-1">{{ job.company }}</p>
          <p>
            <time datetime="2023-08">{{ job.date.start }}</time>
            -
            <time datetime="2024-01">{{ job.date.end }}</time>
          </p>
        </template>
        <template #content>
          <div class="text-[15px] text-content prose">
            <prime-button
              class="w-full sm:hidden"
              :class="{
                'inline-flex': !inplace,
                hidden: inplace,
              }"
              size="small"
              severity="secondary"
              outlined
              @click="inplace = true"
            >
              <icon class="text-primary" name="ph:bookmark-simple-duotone" />
              Read more about this job
            </prime-button>
            <ul class="sm:block" :class="{ hidden: !inplace }">
              <li v-for="item in job.description">
                {{ item }}
              </li>
            </ul>
          </div>
        </template>
        <template #footer>
          <app-chip :label="job.role.type" />
        </template>
      </app-card>
    </template>
  </app-hero>
</template>

<style scoped>
.hero {
  @apply content-center justify-normal;
}

:deep(.hero-content) {
  @apply w-full space-y-8;
}

:deep(.p-button-outlined) {
  @apply border border-dashed border-surface-200 ring-0 dark:border-surface-100;
}
</style>
