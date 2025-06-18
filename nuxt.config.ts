export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image','@nuxt/ui-pro','@clerk/nuxt'],
  css: ['~/assets/css/main.css'],
  plugins: [
    '~/plugins/clerk.client.ts'
  ],
  clerk: {
    appearance: {},
  },
  runtimeConfig: {
    public: {
      clerkPublishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    },
  }
})