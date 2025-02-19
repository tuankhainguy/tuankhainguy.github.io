<script setup lang="ts">
import Card from '../Card.vue';
import Typewriter from '../Typewriter.vue';
import Return from './Return.vue';
</script>


<template>
  <Card>
    <Typewriter :class="{ full: true }">
      <template v-slot:below>
        <div class="textline"></div>
      </template>
    </Typewriter>
    <Return />
  </Card>
</template>


<style scoped>
.textline.textline {
  width: 100%;
  animation: show-line 5s step-end 22s infinite;
}

.textline.textline:after {
  color: var(--text);
  animation:
    return 5s step-end 22s infinite;
}

.textline.textline:before {
  font-size: max(1vw, 1rem);
  color: transparent;
  content: '>>';
  margin-right: 8px;
}

/* ,typewriter.typewriter increase importance */
.typewriterContainer :deep(.typewriter.typewriter:before) {
  content: '>>' !important;
  margin: 0;
  margin-right: 8px;
}

.typewriterContainer :deep(.typewriter .typewriterText) {
  animation-delay: 22s;
}

.typewriterContainer :deep(.typewriter .typewriterText:before) {
  animation: none;
  content: 'console.log("Hello, World!")';
}

.return {
  animation-delay: 22s;
}

@keyframes return {
  from { content: ''; }
  40%,
  100% { content: 'Hello, World!'; }
}

@keyframes show-line {
  from {
    border: none;
    background: none;
  }
  40%,
  100% {
    border-top: 0.1em solid var(--catppuccin-surface2);
    border-bottom: 0.1em solid var(--catppuccin-surface2);
    background-color: var(--base);
  }
}
</style>
