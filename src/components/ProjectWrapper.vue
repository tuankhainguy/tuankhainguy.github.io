<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProjectsStore } from '../stores/projects';

const { project } = defineProps<{
  project: string
}>();

const projects = useProjectsStore();
const currentProject = (await projects.getProject(project));
const currentProjectName = currentProject?.name;

const router = useRouter();
if (!projects.projects[router.currentRoute.value.fullPath.split('/')[2]]) {
  router.push('/');
}
</script>

<template>
  <div class="projectWrapper">
    <h3>
      {{ currentProjectName }}
    </h3>
    <p>
    </p>
  </div>
</template>

<style scoped>
</style>
