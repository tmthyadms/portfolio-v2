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
    cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
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
        "Divider",
        "Image",
        "Menubar",
        "Timeline",
        "ToggleButton",
        "Skeleton",
      ],
    },
    directives: {
      include: ["AnimateOnScroll", "Ripple"],
    },
  },
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true,
  },
});
