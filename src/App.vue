<template>
  <h1>Task App</h1>
  <ul>
    <li>
      <router-link :to="{name: 'home'}">Home</router-link>
    </li>

    <li>
      <router-link :to="{name: 'login'}">Login</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
<script setup>
import { ref } from 'vue';

console.log(process.env.NODE_ENV)
console.log(import.meta.env.BASE_URL)

</script>
<style scoped>
</style>