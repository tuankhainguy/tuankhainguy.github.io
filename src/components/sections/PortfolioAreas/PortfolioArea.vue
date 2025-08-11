<script setup lang="ts">
</script>


<template>
  <div class="container">
    <slot />
  </div>
</template>


<style scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 12px; */
  /* padding-inline: 12px; */
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); */
  /* grid-auto-flow: row; */
}
</style>
