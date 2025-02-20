<script setup lang="ts">
</script>


<template>
  <div class="card">
    <slot />
  </div>
</template>


<style scoped>
.card {
  position: absolute;
  top: 0;
  /* left: 4px; */
  /* right: 4px; */
  height: 100%;
  max-height: 30rem;
  overflow: hidden;
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgb(from var(--accent) r g b / 0.4);
  /* background: rgb(from var(--base) r g b / 0.4); */
  /* backdrop-filter: blur(5px); */
  /* -webkit-backdrop-filter: blur(5px); */
  border: 1px solid rgb(from var(--accent) r g b / 0.5);
  flex-basis: 100%;
}
</style>
