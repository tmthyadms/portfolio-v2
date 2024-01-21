<script setup lang="ts">
import schools from "@/assets/data/education.json";

const events = ref(schools);
</script>

<template>
  <app-hero title="Education" description="See where I've studied.">
    <prime-timeline :value="events" align="alternate">
      <template #content="{ item }">
        <app-card
          v-animateonscroll.once="{
            enterClass: 'fadein',
            leaveClass: 'fadeout',
          }"
          :title="item.school"
          :subtitle="`${item.degree}, ${item.field}`"
          class="mt-3 duration-1000"
        >
          <template #content>
            <p class="text-[15px]">
              {{ item.grade.type }}: {{ item.grade.value }}
            </p>
          </template>
        </app-card>
      </template>
    </prime-timeline>
  </app-hero>
</template>

<style scoped>
:deep(.p-timeline-event:nth-child(even)) {
  @apply max-md:flex-row;

  .p-timeline-event-content {
    @apply max-md:text-left;
  }
}

:deep(.p-timeline-event-opposite) {
  @apply max-md:flex-none;
}
</style>
