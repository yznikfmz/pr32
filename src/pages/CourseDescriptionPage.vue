<script setup>
import { inject } from 'vue'

const course = inject('course')
</script>

<template>
  <h2>Описание</h2>
  <p>{{ course.description }}</p>
</template>