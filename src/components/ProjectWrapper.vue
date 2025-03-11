<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useProjectsStore } from '../stores/projects';
import Section from './sections/Section.vue';
import { assets, projects } from '../main';

const { project } = defineProps<{
  project: string
}>();

const store = useProjectsStore();
const currentProject = (await store.getProject(project));
const currentProjectName = currentProject?.name;
const imgSrc = assets[projects[currentProject?.data.full_name].imgSrc ?? ''].default;

const router = useRouter();
if (!store.projects[router.currentRoute.value.fullPath.split('/')[2]]) {
  router.push('/');
}
</script>

<template>
  <Section :section-title="currentProjectName">
    <p>
    </p>
    <template v-slot:secondary>
      <img :src="imgSrc" />
    </template>
  </Section>
</template>

<style scoped>
img {
  width: 100%;
}

.section :deep(.secondary) {
  justify-content: start;
}
</style>
