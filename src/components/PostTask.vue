<template>
  <div class="columns">
    <form @submit.prevent="onSubmit" class="column is-6 is-12-mobile is-offset-one-quarter box p-5">
        <div class="field">
  <label class="label">Title</label>
  <div class="control">
    <input v-model="title" class="input" type="text" placeholder="Task title">
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
  <div class="control">
    <textarea v-model="description" class="textarea" placeholder="Description"></textarea>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Save</button>
  </div>
  <div class="control">
    <button class="button is-link is-light">Cancel</button>
  </div>
</div>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../store/task.js'
import { useAuthStore } from '../store/auth.js';
import { defineEmits } from 'vue';

const emit = defineEmits(['handleRefresh'])
const taskStore = useTaskStore();
const authStore = useAuthStore();

const title = ref('');
const description = ref('');

const onSubmit = async () => {
  if (title.value !== '' && description.value !== '') {
        await taskStore.addTask(authStore.$state.user.id, title.value, description.value);
        await taskStore.getTask();
        title.value = '';
        description.value = '';
        console.log("Task creada")
        emit('handleRefresh');
    }
};

</script>
<style scoped>
</style>