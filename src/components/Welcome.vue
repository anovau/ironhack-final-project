<template>
    <div class="content has-text-centered ">
        <div>
        <h1>Welcome</h1>
        <p>Hola, para usar esta To Do App tienes que esta registrado. Por favor, inicia sesión o crea una cuenta</p>
        <div class="buttons is-centered">
            <router-link :to="{name: 'register'}" class="button is-primary">
                <strong>Sign up</strong>
            </router-link>
            <router-link :to="{name: 'login'}" class="button is-light">
                Log in
            </router-link>
        </div>
    </div>
    </div>
</template>
<script setup>
</script>
<style scoped>

</style>