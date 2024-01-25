<template>
  <app-hero title="Experience" description="See where I've worked.">
    <app-card
      v-animateonscroll.once="{ enterClass: 'fadein', leaveClass: 'fadeout' }"
      once
      icon="ph:briefcase-duotone"
      title="Frontend Support"
      subtitle="Benefit Solutions Pte Ltd"
      class="duration-1000"
    >
      <template #content>
        <div class="space-y-1.5 text-[15px]">
          <ul class="list-inside list-disc">
            <li>Resolved front-end issues.</li>
            <li>Developed new components.</li>
            <li>Built an end-to-end (E2E) automated testing.</li>
          </ul>
          <p><time>Duration: 6 months</time></p>
        </div>
      </template>
      <template #footer>
        <app-chip label="Internship" />
      </template>
    </app-card>
  </app-hero>
</template>
