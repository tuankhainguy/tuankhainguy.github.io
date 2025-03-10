<script setup lang="ts">
import MainProjectContainer from '../components/MainProjectContainer.vue';

defineProps<{
  project: string
}>();
</script>

<template>
  <MainProjectContainer :project="project" />
</template>

<style scoped>
</style>
