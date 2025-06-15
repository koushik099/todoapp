<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
  {
    label: 'About',
    icon: 'i-lucide-book-open',
    to: '/About',
  },
  {
    label: 'Get Started',
    to: '/',
    children: [
      {
        label: 'SignUp',
        icon: 'i-lucide-user',
        description: 'SignUp Here.',
        to: '/components/signup'
      },
      {
        label: 'SignIn',
        icon: 'i-lucide-user',
        description: 'SignIn Here.',
        to: '/components/signup'
      },
    ]
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    badge: 'code it here',
    to: 'https://github.com/koushik099/todoapp',
    target: '_blank'
  }
])
</script>

<template>
  <UNavigationMenu :items="items" class="w-full justify-center" />
</template>
