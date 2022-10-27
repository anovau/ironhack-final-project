<template>
    <div v-if="!authStore.isAuth">
        <Welcome />
    </div>
    <div v-else class="container mt-6">
        <PostTask @handleRefresh="refresh" />
        <div class="columns is-multiline mt-5 task-container" >
         <Task :task="task" v-for="task in tasks" @handleRefresh="refresh"/>
        </div>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../store/auth.js';
import { useTaskStore } from '../store/task.js';
import Welcome from '../components/Welcome.vue';
import PostTask from '../components/PostTask.vue';
import Task from '../components/Task.vue';

const authStore = useAuthStore();
const taskStore = useTaskStore();
const tasks = ref()

const listTasks = async () => {
    tasks.value = await taskStore.getTask()
}

const refresh = async () => {
    await listTasks()
}

onMounted( async () => {
    listTasks();
});

</script>
<style scoped>
.task-container {
    padding-bottom: 100px;
}

</style>