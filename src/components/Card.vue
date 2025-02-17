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
  top: 4px;
  left: 4px;
  right: 4px;
  height: 200px;
  display: flex;
  background: rgb(from var(--catppuccin-base) r g b / 0.4);
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgb(from var(--catppuccin-lavender) r g b / 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgb(from var(--catppuccin-lavender) r g b / 0.75);
}
</style>
