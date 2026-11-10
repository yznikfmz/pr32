<script setup>
import { inject } from 'vue'

const course = inject('course')
</script>

<template>
  <h2>Программа</h2>
  <p v-for="(topic, index) in course.program" :key="topic">
    {{ index + 1 }}. {{ topic }}
  </p>
</template>