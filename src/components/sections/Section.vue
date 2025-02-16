<script setup lang="ts">
const { sectionTitle } = defineProps<{
  sectionTitle?: string
}>();
</script>


<template>
  <div class="section" ref="section">
    <h1>{{ sectionTitle ?? `/${$attrs.id}` }}</h1>
    <slot />
  </div>
</template>


<style scoped>
</style>
