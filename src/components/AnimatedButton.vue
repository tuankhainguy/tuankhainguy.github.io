<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const button = useTemplateRef("button");
let animationTimeout: ReturnType<typeof setTimeout> | null = null;

const onClick = (e: MouseEvent) => {
  if (animationTimeout) {
    clearTimeout(animationTimeout);
  }

  const el = e.currentTarget as HTMLElement;

  const relativeMouseX = e.clientX - el.getBoundingClientRect().left,
    relativeMouseY = e.clientY - el.getBoundingClientRect().top;

  el.style.setProperty('--mouse-Y', `${relativeMouseY}px`);
  el.style.setProperty('--mouse-X', `${relativeMouseX}px`);
  el.setAttribute("data-clicked", "true");

  animationTimeout = setTimeout(() => {
    el.style.removeProperty('--mouse-X');
    el.style.removeProperty('--mouse-Y');
    el.setAttribute("data-clicked", "false");
  }, 450);
}

onMounted(() => {
  button.value?.addEventListener("click", onClick);
});
</script>


<template>
  <button ref="button" type="button" data-clicked="false">
    <slot />
  </button>
</template>


<style scoped>
button {
  --mouse-X: 50%;
  --mouse-Y: 50%;
  width: max-content;
  display: block;
  padding-block: 0.25rem;
  padding-inline: 1rem;
  background-color: rgb(from var(--subtext) r g b / 0.25);
  overflow: hidden;
  position: relative;
  border-radius: 8px;
}

button::before {
  position: absolute;
  content: '';
  top: var(--mouse-Y);
  left: var(--mouse-X);
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  transition: width .4s ease-in-out, height .4s ease-in-out;
  background-color: rgb(from var(--subtext) r g b / 0.4);
  border-radius: 8px;
}

button[data-clicked="true"]::before {
  width: 200%;
  height: 200%;
  transition: width .4s ease-in-out, height .4s ease-in-out;
}
</style>
