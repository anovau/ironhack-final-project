<template>
    <div class="columns is-centered background-grey">
    <div class="total-height column is-half is-full-mobile">
        <div class="box m-5">
        <h1 class="mb-3">Create new account</h1>
        <div v-show="ConfirmationMessage" class="notification is-success is-light">
  <button class="delete"></button>
 <h2 class="notification-title" >Congratulations Your account has been created</h2> 
 Confirm your registration by going to your inbox <strong>{{email}}</strong> and <strong>click the confirmation link</strong> that we just sent you. 
 when the email has been confirmed, you can access in <router-link :to="{name: 'login'}" ><strong>Login</strong> </router-link> page.
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
                <p v-show="passwordNotMatch" class="help is-danger">Passwords do not match</p>
                <p v-show="passwordError" class="help is-danger">The password must be at least 6 characters long.</p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input v-model="passwordConfirm" class="input" type="password" placeholder="Confirm Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
                <p v-show="passwordNotMatch" class="help is-danger">Passwords do not match</p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success">
                        Sign Up
                    </button>
                </p>
            </div>
            <P>Already have an account? <router-link :to="{name: 'login'}">Log in</router-link></P>
        </form>
    </div>
</div>
</div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/auth.js';
import { signup } from '../api';

const authStore = useAuthStore();
const email = ref('')
const password = ref('')
const passwordConfirm = ref('')
const passwordNotMatch = ref(false)
const passwordError = ref(false)
const ConfirmationMessage = ref(false)

const onSubmit = async () => {
    console.log("formulario enviado Login");
    console.log(email.value);
    console.log(password.value);
    passwordNotMatch.value = false;
    passwordError.value = false;

    if(password.value === passwordConfirm.value && password.value.length > 5){
        const res = await signup(email.value, password.value);
        ConfirmationMessage.value = true;

    }else if(password.value.length < 6){
        passwordError.value = true;
    }
    else if(password.value !== passwordConfirm.value){
        passwordNotMatch.value = true;
    }

};

</script>
<style scoped>
.notification-title {
    font-size: 22px;
    font-weight: bold;
}
</style>