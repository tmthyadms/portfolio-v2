<script setup lang="ts">
onMounted(() => {
  const greet = document.getElementById("greet");
  // @ts-ignore
  const typewriter = new Typewriter(greet, { loop: true });
  typewriter
    .pauseFor(150)
    .typeString("Hello, I'm Timothy!")
    .pauseFor(700)
    .deleteChars(5)
    .typeString("!")
    .pauseFor(1000)
    .start();
});
</script>

<template>
  <app-hero>
    <template #top>
      <the-avatar />
    </template>
    <template #title>
      <h1
        class="text-center font-serif text-3xl sm:text-4xl lg:text-5xl"
        id="greet"
      >
        <div
          class="skeleton h-9 w-[274px] sm:h-10 sm:w-[329px] lg:h-12 lg:w-[438px]"
        ></div>
      </h1>
    </template>
    <template #description>
      <p class="mt-4 text-center text-lg text-content">
        A recent Computer Science graduate with expertise in web development
        using <em>Vue.js</em> and <em>Tailwind CSS</em>. Experience in mobile
        app development using <em>Flutter</em> and desktop app development using
        <em>.NET</em>.
      </p>
    </template>
    <template #links>
      <a class="p-ripple p-button" v-ripple href="resume.pdf" target="_blank">
        <icon name="ph:rocket-launch-duotone" size="1.25rem" />
        See resume
      </a>
      <span>or</span>
      <a
        class="p-ripple p-button p-button-link px-0 hover:underline"
        v-ripple
        href="resume.pdf"
        download="timothy-resume.pdf"
        >grab a copy</a
      >
    </template>
  </app-hero>
</template>
