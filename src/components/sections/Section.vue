<script setup lang="ts">
import { useSlots } from 'vue';

const { sectionTitle } = defineProps<{
  sectionTitle?: string
}>();

const slots = useSlots();
</script>


<template>
  <div class="section" ref="section">
    <div class="primary">
      <h1 v-if="sectionTitle">{{ sectionTitle }}</h1>
      <span class="sectionName" v-if="!sectionTitle">{{ `/${$attrs.id}` }}</span>
      <slot />
    </div>
    <div v-if="slots.secondary" class="secondary">
      <slot name="secondary" />
    </div>
  </div>
</template>


<style scoped>
h1 {
  width: max-content;
  max-width: 100%;
  background:
    linear-gradient(to bottom right, var(--highlight3), var(--highlight5));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section span.sectionName {
  max-width: 100%;
  margin-bottom: 2.5rem;
  font-size: min(max(1vw, .75rem), 1.5rem);
  width: max-content;
  background:
    linear-gradient(to bottom right, var(--highlight3), var(--highlight5));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.primary {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 12px;
}

.secondary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 66%;
  gap: 12px;
}

@media only screen and (max-width: 768px) {
  .secondary {
    width: 100%;
  }
}
</style>
