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
        id="greet"
        class="text-center font-serif text-3xl sm:text-4xl lg:text-5xl"
      >
        <div
          class="skeleton h-9 w-[274px] sm:h-10 sm:w-[329px] lg:h-12 lg:w-[438px]"
        ></div>
      </h1>
    </template>
    <template #description>
      <p class="mt-4 text-center text-lg text-content">
        A final year Computer Science student with expertize in web development
        using <em>Vue.js</em>, <em>Tailwind CSS</em>, and <em>Bootstrap</em>,
        <wbr />as well as experienced in mobile development using
        <em>Flutter</em>.
      </p>
    </template>
    <template #links>
      <a v-ripple href="resume.pdf" target="_blank" class="p-ripple p-button">
        <icon name="ph:rocket-launch-duotone" size="1.25rem" />
        See resume
      </a>
      <span>or</span>
      <a
        v-ripple
        href="resume.pdf"
        download="timothy-resume.pdf"
        class="p-ripple p-button p-button-link px-0 hover:underline"
        >grab a copy</a
      >
    </template>
  </app-hero>
</template>
