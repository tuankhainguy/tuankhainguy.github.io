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
const htmlURL = currentProject?.data.html_url;

const router = useRouter();
if (!store.projects[router.currentRoute.value.fullPath.split('/')[2]]) {
  router.push('/');
}
</script>

<template>
  <Section :section-title="currentProjectName">
    <div id="descriptionWrapper">
      <h4>Description</h4>
      <div id="description">
        <p>
          {{ currentProject?.data?.description }}
        </p>
      </div>
    </div>
    <a :href="htmlURL" target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
      GitHub
    </a>
    <template v-slot:secondary>
      <img :src="imgSrc" />
    </template>
  </Section>
</template>

<style scoped>
img {
  width: 100%;
}

.section :deep(.sectionContent) {
  gap: 36px;
}

.section :deep(.secondary) {
  justify-content: start;
}

a {
  border-radius: 12px;
  padding: 8px;
  width: max-content;
  color: var(--accent-compliment);
  background-color: var(--subtext);
  text-decoration: none;
  transition: .2s ease-in-out;
  gap: 8px;
  font-weight: bold;
}

a:hover {
  background-color: var(--text);
}

#descriptionWrapper {
  display: flex;
  flex-direction: column;
  margin-block: 2rem;
  gap: 12px;
}

#description {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px;
}

#description > p {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: var(--base);
  padding: 12px;
}

#description > p:before {
  z-index: -1;
  border-radius: 10px;
  position: absolute;
  inset: calc(8px - 0.2rem);
  background:
    linear-gradient(to right, var(--accent), var(--highlight6));
  content: '';
}
</style>
