<template>
  <app-hero title="Experience" description="See where I've worked.">
    <app-card
      v-animateonscroll.once="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
      once
      icon="mdi:briefcase-account-outline"
      title="Frontend Support"
      subtitle="Internship"
      class="duration-1000"
    >
      <template #content>
        <ul class="list-inside list-disc text-[15px]">
          <li>Resolved front-end issues.</li>
          <li>Developed new components.</li>
          <li>Built an end-to-end (E2E) automated testing.</li>
        </ul>
      </template>
    </app-card>
  </app-hero>
</template>
