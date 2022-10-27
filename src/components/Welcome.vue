<template>
    <div class="main-home columns is-centered is-vcentered">
        <div class="content has-text-centered light-container">
        <h1>Making You More Productive</h1>
        <h2>Tools to help you and make your life easier beyond the limits!</h2>
            <router-link :to="{name: 'register'}" class="button is-primary mt-5">
                <strong>GET STARTED</strong>
            </router-link>
            <p class="mt-2">It's free now and forever.</p>
    </div>
    <div></div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.main-home {
    background-color: rgba(0,0,0,0.8);
    background-image: url(../assets/background-light.jpeg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
}
h1 { 
    font-size: 68px;
    color: black;
}
h2 {
    color: white;
    font-size: 22px;
}
.light-container {
    background-color: rgba(188, 187, 187, 0.5);
    border-radius: 15px;
    padding: 2rem;
}
</style>