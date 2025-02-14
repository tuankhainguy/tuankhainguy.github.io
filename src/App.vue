<script setup lang="ts">
import MainContainer from './components/MainContainer.vue';


const width = window.innerWidth;
const height = window.innerHeight;

const root = document.documentElement;
root.style.setProperty('--vw', `${width}px`);
root.style.setProperty('--vh', `${height}px`);
</script>

<template>
  <MainContainer />
</template>

<style scoped>
</style>
