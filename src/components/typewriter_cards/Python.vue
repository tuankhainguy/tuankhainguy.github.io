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
.textline.textline:after {
  color: var(--text);
  animation:
    return 5s step-end infinite;
}

.textline.textline:before {
  margin: 0;
}

/* ,typewriter.typewriter increase importance */
.typewriterContainer :deep(.typewriter.typewriter:before) {
  content: '>>>' !important;
  margin: 0;
  margin-right: 8px;
}

.typewriterContainer :deep(.typewriter .typewriterText:before) {
  animation: none;
  content: 'print("Hello, World!")';
}

@keyframes return {
  from, to { content: ''; }
  40%,
  100% { content: 'Hello, World!'; }
}
</style>
