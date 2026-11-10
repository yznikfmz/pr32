<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function login() {
  localStorage.setItem('authToken', 'demo-token')

  const nextPage = route.query.redirect
  if (typeof nextPage === 'string' && nextPage.startsWith('/') && !nextPage.startsWith('//')) {
    router.replace(nextPage)
  } else {
    router.replace('/dashboard')
  }
}
</script>

<template>
  <h1>Вход</h1>
  <button @click="login">Войти</button>
  <p><RouterLink to="/courses">Назад к курсам</RouterLink></p>
</template>