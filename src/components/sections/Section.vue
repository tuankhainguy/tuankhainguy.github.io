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

.section {
  height: 800px;
  align-items: center;
  font-size: max(1.2vw, 1.2rem);
  border: none;
  border-radius: 0;
  background: none;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.sectionContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: calc(var(--section-max-w) * 7 / 10);
  height: 100%;
  max-width: var(--section-max-w);
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

.primary,
.secondary {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  gap: 12px;
}

.primary {
  height: max-content;
}

.secondary {
  height: 100%;
}


@media only screen and (min-width: 768px) {
  .section:not(:has(.sectionName)) .primary {
    padding-top: 10rem;
  }
}

@media only screen and (max-width: 768px) {
  .section#home > .sectionContent {
    height: 100%;
  }

  .sectionContent,
  .primary,
  .secondary {
    width: 100% !important;
  }
}
</style>
