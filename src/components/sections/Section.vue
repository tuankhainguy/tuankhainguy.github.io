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
      <h1>{{ sectionTitle ?? `/${$attrs.id}` }}</h1>
      <slot name="primary" />
    </div>
    <div v-if="slots.secondary" class="secondary">
      <slot name="secondary" />
    </div>
  </div>
</template>


<style scoped>
.primary {
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  height: 100%;
  width: 100%;
}

.secondary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 100%;
  height: 100%;
  width: 66%;
}

@media only screen and (max-width: 768px) {
  .secondary {
    width: 100%;
  }
}
</style>
