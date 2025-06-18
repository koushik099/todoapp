<template>
    <div class="todo-app">
        <UFormField
    description="Entre your todo"
    help="Your Todos Lists"
    size="xl"
      @submit.prevent="addTodo">
    <UInput placeholder="Codeforce div 3" class="w-full" v-model="newTodo" autocomplete="off"/>
<UButton icon="i-lucide-rocket" size="md" color="primary" variant="solid" @click="addTodo">Add To List</UButton>  
</UFormField>
  <div>
    <ul class="space-y-2 font-bold capitalize   text-lg">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <UButton size="md" class="ml-2" color="primary" variant="solid" @click="removeTodo(index)">X</UButton>
      </li>
    </ul>
  </div>
    </div>
</template>
<script setup lang="ts">
definePageMeta({
    layout: 'user'
})
import { ref, watch, onMounted } from 'vue'
const newTodo=ref('')
const todos=ref([])
onMounted(() => {
  const stored = localStorage.getItem('todos')
  if (stored) {
    todos.value = JSON.parse(stored)
  }
})
watch(todos, (newVal) => {
  localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })
function addTodo() {
  if (newTodo.value.trim() === '') return
  todos.value.push({ text: newTodo.value, done: false })
  newTodo.value = ''
}
function removeTodo(index) {
  todos.value.splice(index, 1)
}
</script>
<style>
.done {
  text-decoration: line-through;
  color: gray;
}
</style>