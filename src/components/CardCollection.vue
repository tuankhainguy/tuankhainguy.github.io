<script setup lang="ts">
import Clang from './typewriter_cards/Clang.vue';
import JS from './typewriter_cards/JS.vue';
import Python from './typewriter_cards/Python.vue';

</script>


<template>
  <div class="cardCollection">
    <Python />
    <Clang />
    <JS />
  </div>
</template>


<style scoped>
.cardCollection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  position: relative;
  height: 100%;
}
</style>
