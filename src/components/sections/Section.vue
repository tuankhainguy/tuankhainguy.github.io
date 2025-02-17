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
  flex-direction: column;
  justify-content: center;
  width: 100%;
}

.secondary {
  flex-direction: column;
  justify-content: center;
  width: 66%;
}

@media only screen and (max-width: 768px) {
  .secondary {
    width: 100%;
  }
}
</style>
