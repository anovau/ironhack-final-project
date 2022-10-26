<template>
    <div class="task notification box column is-4 is-12-mobile">
        <button @click="deleteTask" class="delete is-medium"></button>
        <div v-if="!showEdit" class="content content-task">

            <h2>{{props.task.title}}</h2>
            <p>{{props.task.description}}</p>
            <p>{{props.task.created_at}}</p>
            <div class="actions-task">
                <button @click="editForm">Edit</button>
                <button>Done</button>
            </div>
        </div>
        <div v-else>
            <form @submit.prevent="onSubmit">
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input v-model="editTitle" class="input" type="text" :placeholder="props.task.title">
                    </div>
                </div>

                <div class="field">
                    <label class="label">Description</label>
                    <div class="control">
                        <textarea v-model="editDescription" class="textarea"
                            :placeholder="props.task.description"></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button @click="saveEdit" class="button is-link">Save</button>
                    </div>
                    <div class="control">
                        <button @click="closeEdit" class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { useTaskStore } from '../store/task.js';
import { getTasks } from '../api';

const taskStore = useTaskStore();
const showEdit = ref(false)
const editTitle = ref('');
const editDescription = ref('');

const props = defineProps({
    task: Object
});

const deleteTask = async () => {
    if (confirm("Are you sure you want to delete task id ?")) {
        await taskStore.deleteTask(props.task.id)
        await getTasks()
        console.log("eliminara task " + props.task.id)
    }
};

const editForm = () => {
    showEdit.value = true;
}
const closeEdit = () => {
    showEdit.value = false;
};
const saveEdit = async () => {
    await taskStore.updateTask(props.task.id, editTitle.value, editDescription.value)
    await taskStore.getTask();
    showEdit.value = false;
}

</script>
<style scoped>
.actions-task{
    border-top: 1px solid rgb(206, 205, 205);
    padding: 1rem;
    display: flex;
    justify-content: space-around;
}

.content-task {
    padding: 2rem 1rem 0rem 1rem;
}
</style>