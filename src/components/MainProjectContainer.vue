<script setup lang="ts">
import { useRouter } from 'vue-router';
import ProjectWrapper from './ProjectWrapper.vue';

const { project } = defineProps<{
  project: string
}>();

const router = useRouter();

const onBackButtonClick = () => {
  router.push('/');
}
</script>

<template>
  <div id="mainContainer">
    <div class="topbar">
      <button type="button" @click="onBackButtonClick">
        <-
      </button>
    </div>
    <Suspense>
      <ProjectWrapper :project="project" />
      <template #fallback>
        <p>Loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.topbar > button {
  background-color: var(--accent);
  color: var(--accent-compliment);
  padding-block: 2px;
  padding-inline: 12px;
}
</style>
