<script setup lang="ts">
</script>


<template>
  <div class="card">
    <slot />
  </div>
</template>


<style scoped>
.card {
  /* position: absolute; */
  /* top: 4px; */
  /* left: 4px; */
  /* right: 4px; */
  height: 100%;
  display: flex;
  background: rgb(from var(--base) r g b / 0.4);
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgb(from var(--accent) r g b / 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgb(from var(--accent) r g b / 0.5);
  padding: 12px;
  flex-basis: 100%;
}
</style>
