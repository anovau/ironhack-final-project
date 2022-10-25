<template>
    <div class="container">
        <h1>SIGN UP</h1>
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
                <p class="control has-icons-left">
                    <input v-model="passwordConfirm" class="input" type="password" placeholder="Confirm Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success">
                        Sign Up
                    </button>
                </p>
            </div>
        </form>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth.js';
import { signup } from '../api';

const authStore = useAuthStore();
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')

const onSubmit = async () => {
    console.log("formulario enviado Login");
    console.log(email.value);
    console.log(password.value);

    if(password.value === passwordConfirm.value && password.value.length > 5){
        const res = await signup(email.value, password.value);
    console.log("contraseñas iguales");

    }else if(password.value !== passwordConfirm.value){
        alert("contraseñas no coinciden");
    }else{
        alert("La contraseña debe tener moinimo 6 caracteres");
    }

};

</script>
<style scoped>

</style>