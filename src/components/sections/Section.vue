<script setup lang="ts">
import { useSlots } from 'vue';

const { sectionTitle } = defineProps<{
  sectionTitle?: string
}>();

const slots = useSlots();
</script>


<template>
  <div class="section" ref="section">
    <span class="sectionName" v-if="!sectionTitle">{{ `/${$attrs.id}` }}</span>
    <div class="sectionContent">
      <div class="primary">
        <h1 v-if="sectionTitle">{{ sectionTitle }}</h1>
        <slot />
      </div>
      <div v-if="slots.secondary" class="secondary">
        <slot name="secondary" />
      </div>
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

.sectionContent {
  display: flex;
  width: 100%;
  height: 100%;
}

.section span.sectionName {
  max-width: 100%;
  margin-bottom: 2.5rem;
  font-size: min(max(1.5vw, 1rem), 1.25rem);
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
  .sectionContent {
    flex-direction: column;
    height: max-content;
  }

  .section#home > .sectionContent {
    height: 100%;
  }

  .secondary {
    width: 100%;
  }
}
</style>
