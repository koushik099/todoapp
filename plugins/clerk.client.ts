import { Clerk } from '@clerk/clerk-js'

export default defineNuxtPlugin((nuxtApp) => {
  const clerk = import.meta.env.NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY
  nuxtApp.provide('clerk', clerk)
})