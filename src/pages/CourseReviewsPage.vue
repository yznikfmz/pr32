<script setup>
import { inject } from 'vue'

const course = inject('course')
</script>

<template>
  <h2>Отзывы</h2>
  <article v-for="(review, index) in course.reviews" :key="index">
    <strong>{{ review.author }}</strong>
    <p>{{ review.text }}</p>
    <p>Оценка: {{ review.rating }} из 5</p>
  </article>
</template>