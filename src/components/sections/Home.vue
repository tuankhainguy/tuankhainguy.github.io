<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
});
</script>


<template>
  <div class="section">
    <h1>SOFTWARE ENGINEERING IS FUN</h1>
    <h2>Really fun</h2>
  </div>
</template>


<style scoped>
h1 {
  width: 100%;
  margin: 0;
  margin-top: 5rem;
  font-size: 6vw;
  font-weight: 300;
}

h2 {
  width: 100%;
  margin: 0;
  margin-top: 5rem;
  font-size: 4vw;
  font-weight: 300;
}

.section {
  flex-direction: column;
  border: none;
  border-radius: 0;
  background: none;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  justify-content: space-between;
}
</style>
