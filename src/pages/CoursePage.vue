<script setup>
import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import { courses } from '../data/courses.js'

const route = useRoute()
const course = computed(() =>
  courses.find(item => item.id === Number(route.params.id))
)

provide('course', course)
</script>

<template>
  <p><RouterLink to="/courses">Назад к списку</RouterLink></p>

  <div v-if="course">
    <h1>{{ course.title }}</h1>
    <nav>
      <RouterLink to="description">Описание</RouterLink> |
      <RouterLink to="program">Программа</RouterLink> |
      <RouterLink to="reviews">Отзывы</RouterLink>
    </nav>
    <RouterView />
  </div>

  <p v-else>Курс не найден.</p>
</template>