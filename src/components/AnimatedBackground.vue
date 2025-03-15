<script setup lang="ts">
</script>


<template>
  <div id="bgContainer">
    <div class="blob" />
  </div>
</template>


<style scoped>
#bgContainer {
  position: fixed;
  inset: 0;
  top: var(--topbar-height);
  z-index: -2;
  overflow: hidden;
  border-radius: 50dvh;
  overflow: hidden;
  scale: 0.5;
}

.blob {
  position: absolute;
  inset: -100%;
  background:
    conic-gradient(from 0deg, var(--highlight1), var(--highlight2), var(--highlight3), var(--highlight4), var(--highlight5), var(--highlight6));

  animation: spinning 15s ease infinite;
  translate: 0 -5%;
}

@keyframes spinning {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}
</style>
