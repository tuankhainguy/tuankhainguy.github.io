<script setup lang="ts">
import MainContainer from './components/MainContainer.vue';
import TopBar from './components/TopBar.vue';


function windowWidthAndHeight() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const root = document.documentElement;
  root.style.setProperty('--vw', `${width}px`);
  root.style.setProperty('--vh', `${height}px`);
}

windowWidthAndHeight();

window.addEventListener("resize", windowWidthAndHeight);
</script>

<template>
  <TopBar />
  <MainContainer />
</template>

<style scoped>
</style>
