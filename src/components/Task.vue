<template>
    <div class="container">
        <h2>{{props.task.title}}</h2>
        <p>{{props.task.description}}</p>
        <p>{{props.task.created_at}}</p>
        <button>Delete</button>
        <button>Edit</button>
        <button>Done</button>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  task: Object
});

</script>
<style scoped>

</style>