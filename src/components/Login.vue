<template>
    <div class="columns is-centered background-grey">
    <div class="column is-two-fifths is-full-mobile total-height">
        <div class="box m-5">
        <h1 class="mb-3">Login</h1>
        <div v-show="ErrorMessage" class="notification is-danger is-light">
            <button class="delete"></button>
            <strong>Error:</strong> Invalid login credentials
        </div>
        <form @submit.prevent="onSubmit">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input v-model="email" class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input v-model="password" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success">
                        Login
                    </button>
                </p>
            </div>
            <P>Not yet registered? <router-link :to="{name: 'register'}">Create a free account.</router-link>
            </P>
        </form>
    </div>
    </div>
</div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth.js'
import { login } from '../api';

const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const ErrorMessage = ref(false);


const onSubmit = async () => {
    const res = await login(email.value, password.value)
    ErrorMessage.value = false;
    if (res) {
        authStore.login(res, email.value, password.value);
        router.push({ name: 'home' })
    } else {
        ErrorMessage.value = true;
        // NO FUNCIONA MOSTRAR EL MENSAJE DE ERROR
    }
};

</script>
<style scoped>


</style>