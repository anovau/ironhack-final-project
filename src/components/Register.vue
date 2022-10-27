<template>
    <div class="columns is-centered background-grey">
        <div class="total-height column is-two-fifths is-full-mobile">
            <div class="box m-5">
                <h1 class="mb-3">Create new account</h1>
                <div v-show="confirmationMessage" class="notification is-success is-light">
                    <button class="delete"></button>
                    <h2 class="notification-title">Congratulations Your account has been created</h2>
                    Confirm your registration by going to your inbox <strong>{{ email }}</strong> and <strong>click the
                        confirmation link</strong> that we just sent you.
                    when the email has been confirmed, you can access in <router-link :to="{ name: 'login' }">
                        <strong>Login</strong> </router-link> page.
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
                        <p v-show="emailError" class="help is-danger">Email is required</p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input v-model="password" class="input" :class="{ 'is-danger': anyPasswordError }" type="password" placeholder="Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        <p v-show="passwordNotMatch" class="help is-danger">Passwords do not match</p>
                        <p v-show="passwordError" class="help is-danger">The password must be at least 6 characters
                            long.</p>
                        <p v-show="passwordRequired" class="help is-danger">Password is required</p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input v-model="passwordConfirm" class="input" :class="{ 'is-danger': anyPasswordError }" type="password"
                                placeholder="Confirm Password">
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                        <p v-show="passwordNotMatch" class="help is-danger">Passwords do not match</p>
                        <p v-show="passwordRequired" class="help is-danger">Password is required</p>
                    </div>
                    <div class="field">
                        <p class="control">
                            <button class="button is-primary">
                                Sign Up
                            </button>
                        </p>
                    </div>
                    <P>Already have an account? <router-link :to="{ name: 'login' }">Log in</router-link>
                    </P>
                </form>
            </div>
        </div>
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
const passwordNotMatch = ref(false)
const passwordError = ref(false)
const confirmationMessage = ref(false)
const emailError = ref(false)
const passwordRequired = ref(false)
const anyPasswordError = ref(false)

const onSubmit = async () => {
    passwordNotMatch.value = false;
    passwordError.value = false;
    emailError.value = false;
    passwordRequired.value = false;
    anyPasswordError.value = false;
    if (password.value === passwordConfirm.value && password.value.length > 5) {
        const res = await signup(email.value, password.value);
        confirmationMessage.value = true;

    }else if(email.value == ''){
        emailError.value = true;
    }else if(password.value == ''){
        passwordRequired.value = true;
        anyPasswordError.value = true;
    }
    else if (password.value.length < 6) {
        passwordError.value = true;
        anyPasswordError.value = true;
    }
    else if (password.value !== passwordConfirm.value) {
        passwordNotMatch.value = true;
        anyPasswordError.value = true;
    }

};

</script>
<style scoped>
.notification-title {
    font-size: 22px;
    font-weight: bold;
}
</style>