<script setup lang="ts">
import socials from "@/assets/data/socials.json";

const items = ref([
  {
    label: "About",
    icon: "ph:baseball-cap-duotone",
    url: "#about",
  },
  {
    label: "Experience",
    icon: "ph:briefcase-duotone",
    url: "#experience",
  },
  {
    label: "Education",
    icon: "ph:graduation-cap-duotone",
    url: "#education",
  },
  {
    label: "Projects",
    icon: "ph:rocket-launch-duotone",
    url: "#projects",
  },
]);

// Logo Scroll
function scrollToTop() {
  scrollTo({ top: 0 });
}

// Header's Shadow
onMounted(() => {
  const header = document.getElementById("header")!;
  const shadowClass = "shadow-sm";
  addEventListener("scroll", () => {
    if (scrollY > 0) header.classList.add(shadowClass);
    else header.classList.remove(shadowClass);
  });
});

// Theme Switcher
const theme = {
  light: {
    name: "viva-light",
    icon: "ph:sun-duotone",
  },
  dark: {
    name: "viva-dark",
    icon: "ph:moon-duotone",
  },
};
const isDark = ref(false);
const themeIcon = computed(() =>
  isDark.value ? theme.dark.icon : theme.light.icon,
);
watch(isDark, () => {
  switchTheme();
});
onMounted(() => {
  const DEFAULT_IS_DARK = "false";
  const storageIsDark = localStorage.getItem("isDark") ?? DEFAULT_IS_DARK;
  const userIsDark = JSON.parse(storageIsDark);
  isDark.value = userIsDark;
});
function switchTheme() {
  const TAILWIND_DARK_CLASS = "dark";
  const html = document.documentElement;
  const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
  const themePath = (themeName: string) => `themes/${themeName}/theme.css`;
  const currentTheme = isDark.value
    ? themePath(theme.dark.name)
    : themePath(theme.light.name);
  themeLink.href = currentTheme;

  if (isDark.value) html.classList.add(TAILWIND_DARK_CLASS);
  else html.classList.remove(TAILWIND_DARK_CLASS);
  localStorage.setItem("isDark", JSON.stringify(isDark.value));
}
</script>

<template>
  <header
    id="header"
    class="sticky top-0 z-[1] bg-surface-a/90 backdrop-blur transition-shadow duration-100"
  >
    <prime-menubar :model="items" mobileActive>
      <template #start>
        <div
          @click="scrollToTop"
          class="flex cursor-pointer items-center gap-1.5 transition-opacity duration-200 hover:opacity-60"
        >
          <app-logo />
          <icon
            name="ph:circle-wavy-check-duotone"
            size="1.25rem"
            class="text-blue-400"
          />
        </div>
      </template>
      <template #menubuttonicon>
        <icon name="ph:list" />
      </template>
      <template #itemicon="{ item }">
        <icon :name="item.icon!" class="p-menuitem-icon" size="1.25rem" />
      </template>
      <template #end>
        <prime-toggle-button
          v-model="isDark"
          off-label=""
          class="p-button-sm p-button-square gap-0"
        >
          <template #icon>
            <icon :name="themeIcon" size="1.25rem" />
          </template>
        </prime-toggle-button>
        <template v-for="social in socials">
          <a
            v-ripple
            :href="social.to"
            target="_blank"
            class="p-ripple p-button p-button-sm p-button-square p-button-text p-button-plain p-button-icon-only"
          >
            <icon :name="social.icon" size="1.25rem" />
          </a>
        </template>
      </template>
    </prime-menubar>
  </header>
</template>

<style scoped>
.p-menubar {
  @apply mx-auto max-w-7xl gap-1.5 rounded-none border-0 bg-transparent px-4 sm:px-6 lg:px-8;
}

:deep(.p-menubar-root-list) {
  @apply mx-auto shadow-sm lg:gap-8 lg:shadow-none;
}

:deep(.p-menuitem-content:hover) {
  @apply bg-transparent;
}

/* selector taken from devtools */
.p-menubar
  :deep(
    .p-menuitem:not(.p-highlight):not(.p-disabled).p-focus > .p-menuitem-content
  ) {
  @apply bg-transparent;
}

:deep(.p-menuitem-link) {
  @apply gap-x-2;
}

:deep(.p-menuitem-icon) {
  @apply lg:hidden;
}

:deep(.p-menuitem-text, .p-menuitem-icon) {
  @apply transition duration-200;
}

:deep(.p-menuitem:hover .p-menuitem-text),
:deep(.p-menuitem:hover .p-menuitem-icon) {
  @apply text-primary;
}

:deep(.p-menubar-end) {
  @apply flex items-center gap-x-1.5 lg:ml-0;
}

.p-button {
  @apply shadow-none;
}

.p-togglebutton {
  @apply border-0;
}
</style>
