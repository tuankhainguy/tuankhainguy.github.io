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
  color: var(--text);
  height: 100%;
  max-height: 30rem;
  overflow: hidden;
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0 0 4px 2px rgb(from var(--subtext) r g b / 0.4);
  box-shadow:
    -1px -1px 4px rgb(from var(--subtext) r g b / .83),
    1px 3px 5px rgb(from var(--subbase) r g b / .05),
    5px 7px 11px rgb(from var(--subbase) r g b / .1),
    inset -2px -2px 2px rgb(from var(--subbase) r g b / .1),
    inset -1px -1px 3px rgb(from var(--subtext) r g b / .6),
    inset 2px 2px 8px rgb(from var(--subtext) r g b / .2),
    inset 1px 1px 8px rgb(from var(--subtext) r g b / .2),
    -1px -1px 4px rgb(from var(--subtext) r g b / .8);
  background: var(--base);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgb(from var(--accent) r g b / 0.5);
  flex-basis: 100%;
}
</style>
