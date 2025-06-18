<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  },
  {
    label: 'Github',
    to: 'https://github.com/koushik099/todoapp',
    target: '_blank'
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      <img src="/logo.png" alt="Logo" class="h-12 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
         <UButton
          color="neutral"
          to="/signin"
          icon="i-lucide-user"
          aria-label="User"
        />
    </template>
  </UHeader>
</template>
