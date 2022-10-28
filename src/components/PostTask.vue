<template>
  <div class="columns">
    <form @submit.prevent="onSubmit" class="column is-6 is-12-mobile is-offset-one-quarter box p-5 mb-5">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input v-model="title" class="input" :class="{ 'is-danger': titleRequired }" type="text"
            placeholder="Task title">
          <p v-show="titleRequired" class="help is-danger">Title is required</p>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control">
          <textarea v-model="description" class="textarea" :class="{ 'is-danger': descriptionRequired }"
            placeholder="Description"></textarea>
          <p v-show="descriptionRequired" class="help is-danger">Description is required</p>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Save</button>
        </div>
        <div class="control">
          <button @click="cancelSubmit" class="button is-link is-light">Cancel</button>
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

const emits = defineEmits(['handleRefresh'])
const taskStore = useTaskStore();
const authStore = useAuthStore();

const title = ref('');
const description = ref('');
const titleRequired = ref(false)
const descriptionRequired = ref(false)

const onSubmit = async () => {
  if (title.value !== '' && description.value !== '') {
    await taskStore.addTask(authStore.$state.user.id, title.value, description.value);
    await taskStore.getTask();
    title.value = '';
    description.value = '';
    emits('handleRefresh');
  }if (title.value == '') {
    titleRequired.value = true;
    setTimeout(() => {
      titleRequired.value = false;
    }, 3000);
  }if (description.value == '') {
    descriptionRequired.value = true;
    setTimeout(() => {
      descriptionRequired.value = false;
    }, 3000);
  }
};
const cancelSubmit = () => {
  titleRequired.value = false;
  descriptionRequired.value = false;
  title.value = '';
    description.value = '';
}

</script>
<style scoped>

</style>