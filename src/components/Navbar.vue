<template>
    <nav class="navbar px-5" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <router-link :to="{name: 'home'}" class="navbar-item">
                <img src="../images/to-to-logo-black.png" width="112" height="28">
                </router-link>
            <a @click="showBurgerMenu" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false"
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': burgerMenu }">
            <div class="navbar-start">
                <router-link :to="{name: 'home'}" class="navbar-item">
                    Home
                </router-link>
                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Style
                    </a>
                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Dark
                        </a>
                        <a class="navbar-item">
                            Light
                        </a>
                        <a class="navbar-item">
                            Contact
                        </a>
                        <hr class="navbar-divider">
                        <a class="navbar-item">
                            Report an issue
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div v-if="!authStore.isAuth" class="buttons">
                        <router-link :to="{name: 'register'}" class="button is-primary">
                            <strong>Sign up</strong>
                        </router-link>
                        <router-link :to="{name: 'login'}" class="button is-light">
                            Log in
                        </router-link>
                    </div>
                    <div v-else class="buttons">
                        <p class="mx-5">Hello {{authStore.$state.user.email}}</p>
                        <router-link @click="logout" :to="{name: 'register'}" class="button is-primary">
                            <strong>Logout</strong>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth.js'
import { useRouter } from 'vue-router'

const router = useRouter();
const authStore = useAuthStore();
const burgerMenu = ref(false)

const logout = () => {
    authStore.logout();
    router.push({name: 'home'})
};

const showBurgerMenu = () => {
    burgerMenu.value = !burgerMenu.value;
}

</script>
<style scoped>

</style>