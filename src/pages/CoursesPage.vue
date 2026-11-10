<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { courses } from '../data/courses.js'

const route = useRoute()
const router = useRouter()
const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

const visibleCourses = computed(() => {
  const category = route.query.category
  if (!category || category === 'all') return courses
  return courses.filter(course => course.category === category)
})

function selectCategory(category) {
  router.push({ path: '/courses', query: { category } })
}
</script>

<template>
  <h1>Каталог курсов</h1>
  <p><RouterLink to="/dashboard">Личный кабинет</RouterLink></p>

  <button @click="selectCategory('all')">Все</button>
  <button @click="selectCategory('frontend')">Frontend</button>
  <button @click="selectCategory('backend')">Backend</button>

  <p v-if="loading" role="status"><span class="spinner"></span> Загрузка…</p>

  <div v-else>
    <p v-if="visibleCourses.length === 0">В этой категории нет курсов.</p>
    <article v-for="course in visibleCourses" :key="course.id">
      <h2>{{ course.title }}</h2>
      <p>Категория: {{ course.category }}</p>
      <button @click="router.push(`/courses/${course.id}`)">Подробнее</button>
    </article>
  </div>
</template>

<style scoped>
.spinner {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid #ccc;
  border-top-color: #2458a6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>