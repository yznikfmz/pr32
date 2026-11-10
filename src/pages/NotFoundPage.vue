<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <h1>Страница не найдена</h1>
  <button @click="router.push('/')">На главную</button>
</template>