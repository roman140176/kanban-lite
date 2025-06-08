<template>
  <h1>Kanban Board</h1>
  <button data-testid="add-card-btn" @click="show = true">Add Card</button>

  <input placeholder="Card title" v-model="title" />
  <button @click="addCard">Save</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const title = ref('')
function addCard() {
  // TODO: push into Pinia store
  show.value = false
}
</script>
