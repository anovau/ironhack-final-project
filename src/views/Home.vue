<template>
    <h1>HOME</h1>
    <div v-if="!authStore.isAuth">
        <Welcome />
    </div>
    <div v-else>
        <PostTask />
        <div>
         <Task :task="task" v-for="task in tasks" />
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../store/auth.js';
import { useTaskStore } from '../store/task.js';
import { getTasks } from '../api';
import Welcome from '../components/Welcome.vue';
import PostTask from '../components/PostTask.vue';
import Task from '../components/Task.vue';

const authStore = useAuthStore();
const taskStore = useTaskStore();
const tasks = ref()
const isLoaded = ref()

const listTasks = async () => {
    tasks.value = await getTasks()
    isLoaded.value = true;

}

onMounted( async () => {
    listTasks();
});

</script>
<style scoped>

</style>