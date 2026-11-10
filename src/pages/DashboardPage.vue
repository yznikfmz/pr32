<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('authToken')
  router.replace('/login')
}
</script>

<template>
  <h1>Личный кабинет</h1>
  <p>Вы авторизованы.</p>
  <button @click="logout">Выйти</button>
  <p><RouterLink to="/courses">Назад к курсам</RouterLink></p>
</template>