<template>
    <div class="column is-4-desktop is-12-mobile is-6-tablet">
        <div class="notification box" :class="{ doneStyle: props.task.isCompleted }">
            <button @click="deleteTask" class="delete is-medium"></button>
            <div v-if="!showEdit" class="content content-task">
                <div>
                    <h2 :class="{ textDone: props.task.isCompleted }">{{ props.task.title }}</h2>
                    <p>{{ props.task.description }}</p>
                </div>
                <div class="">
                    <p class="date">{{ date.toLocaleDateString('en-us', options) }}</p>
                    <div class="actions-task">
                        <i @click="editForm" class="far fa-edit"></i>
                        <label class="checkbox">
                            <input @click="done" v-model="props.task.isCompleted" type="checkbox">
                            Done
                        </label>
                    </div>
                </div>
            </div>
            <div v-else>
                <form @submit.prevent="onSubmit">
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                            <input v-model="editTitle" class="input" :class="{ 'is-danger': titleRequired }" type="text"
                                :placeholder="props.task.title">
                            <p v-show="titleRequired" class="help is-danger">Title is required</p>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                            <textarea v-model="editDescription" class="textarea"
                                :class="{ 'is-danger': descriptionRequired }"
                                :placeholder="props.task.description"></textarea>
                            <p v-show="descriptionRequired" class="help is-danger">Description is required</p>
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
    </div>
</template>
<script setup>
import { ref, defineProps } from 'vue';
import { useTaskStore } from '../store/task.js';
import { defineEmits } from 'vue';

const emit = defineEmits(['handleRefresh'])

const taskStore = useTaskStore();
const showEdit = ref(false)
const editTitle = ref(props.task.title);
const editDescription = ref(props.task.description);
const isCompleted = ref(props.task.isCompleted)
const date = ref(new Date(props.task.created_at))
const options = { weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12: "false" };
const titleRequired = ref(false)
const descriptionRequired = ref(false)

const props = defineProps({
    task: Object
});

const deleteTask = async () => {
    if (confirm("Are you sure you want to delete task id ?")) {
        await taskStore.deleteTask(props.task.id)
        emit("handleRefresh")
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
    if (editTitle.value !== '' && editDescription.value !== '') {
        await taskStore.updateTask(props.task.id, editTitle.value, editDescription.value)
        emit("handleRefresh")
        showEdit.value = false;
    }if (editTitle.value == '') {
        titleRequired.value = true;
        setTimeout(() => {
            titleRequired.value = false;
        }, 3000);
    }if (editDescription.value == '') {
        descriptionRequired.value = true;
        setTimeout(() => {
            descriptionRequired.value = false;
        }, 3000);
    }
}
const done = async () => {
    isCompleted.value = !isCompleted.value;
    await taskStore.taskDone(props.task.id, isCompleted.value)
    emit("handleRefresh")
}

</script>
<style scoped>
.textDone {
    text-decoration: line-through
}

.actions-task {
    border-top: 1px solid rgb(206, 205, 205);
    padding: 1rem;
    display: flex;
    justify-content: space-around;
}

.doneStyle {
    background-color: rgb(230, 228, 228);
    color: rgb(196, 196, 196);
}

.content-task {
    padding: 2rem 1rem 0rem 1rem;
    /* display: flex;
    flex-direction: column;
    justify-content: space-around; */
}

.date {
    font-size: 14px;
    font-weight: 250;
}
</style>