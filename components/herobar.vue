<script setup lang="ts">
const links = ref([
  {
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    label: 'Signup',
    to: '',
    color: 'neutral',
    variant: 'subtle',
    trailingIcon: 'i-lucide-arrow-right'
  }
])
</script>

<template>
  <UPageHero
    title="Todo App"
    description="Just A Todo App why not try it out"
    headline="Try it out"
    orientation="horizontal"
    :links="links"
  >
  </UPageHero>
</template>