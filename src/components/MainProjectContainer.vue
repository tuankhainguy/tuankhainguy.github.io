<script setup lang="ts">
import ProjectWrapper from './ProjectWrapper.vue';

const { project } = defineProps<{
  project: string
}>();
</script>

<template>
  <div id="mainContainer">
    <Suspense>
      <ProjectWrapper :project="project" />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
</style>
