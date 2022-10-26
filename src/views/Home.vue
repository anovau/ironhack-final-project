<template>
    <h1>HOME</h1>
    <div v-if="!authStore.isAuth">
        <Welcome />
    </div>
    <div v-else>
        <PostTask />
        <div class="columns is-multiline mt-5">
         <Task :task="task" v-for="task in tasks" />
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue';
import { useAuthStore } from '../store/auth.js';
import { useTaskStore } from '../store/task.js';
import Welcome from '../components/Welcome.vue';
import PostTask from '../components/PostTask.vue';
import Task from '../components/Task.vue';

const authStore = useAuthStore();
const taskStore = useTaskStore();
const tasks = ref()

watch(useTaskStore, () => {
    useTaskStore.tasks.data = useTaskStore.tasks.data;
});

const listTasks = async () => {
    tasks.value = await taskStore.getTask()
}

listTasks();
onMounted( async () => {
    
});

</script>
<style scoped>

</style>