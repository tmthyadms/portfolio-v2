// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          href: "themes/viva-light/theme.css",
          rel: "stylesheet",
          id: "theme-link",
        },
      ],
      script: [
        { src: "https://unpkg.com/typewriter-effect@latest/dist/core.js" },
      ],
    },
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-primevue", "nuxt-icon"],
  primevue: {
    options: {
      ripple: true,
    },
    components: {
      prefix: "Prime",
      include: [
        "Avatar",
        "Button",
        "Card",
        "Carousel",
        "Chip",
        "Dialog",
        "Divider",
        "Image",
        "Menubar",
        "Timeline",
        "ToggleButton",
      ],
    },
    directives: {
      include: ["AnimateOnScroll", "Ripple", "Tooltip"],
    },
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  },
  typescript: {
    shim: false,
    typeCheck: false,
    strict: true,
  },
});
