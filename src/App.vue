<template>
  <div class="background-grey">
    <Navbar />
    <router-view></router-view>
  </div>
  <Footer />
</template>
<script setup>
import { ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { onMounted } from 'vue';


onMounted(() => {
  
});

</script>
<style scoped>

</style>