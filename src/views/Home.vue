<template>
    <h1>HOME</h1>
    <div v-if="!authStore.isAuth">
        <Welcome />
    </div>
    <div v-else>
        <PostTask />
    </div>
</template>
<script setup>
import Welcome from '../components/Welcome.vue';
import PostTask from '../components/PostTask.vue';
import { useAuthStore } from '../store/auth.js';

const authStore = useAuthStore();

</script>
<style scoped>

</style>