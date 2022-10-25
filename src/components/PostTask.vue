<template>
    <form action="">
        <div class="field">
  <label class="label">Title</label>
  <div class="control">
    <input v-model="title" class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Description</label>
  <div class="control">
    <textarea v-model="description" class="textarea" placeholder="Textarea"></textarea>
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
    <Task />
</template>
<script setup>
import { ref } from 'vue'
import Task from './Task.vue';

const title = ref('');
const description = ref('');

</script>
<style scoped>
</style>