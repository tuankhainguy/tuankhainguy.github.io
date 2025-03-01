<script setup lang="ts">
import { ref } from 'vue';
import Projects from './PortfolioAreas/Projects.vue';
import Section from './Section.vue';
import TechStacks from './PortfolioAreas/TechStacks.vue';

const currentArea = ref('projects');

const changeArea = (e: Event) => {
  e.preventDefault();
  currentArea.value =
    (e.currentTarget as HTMLElement).dataset.area ?? currentArea.value;
}
</script>

<template>
  <Section>
    <div id="portfolioAreas">
      <button class="area" data-area="projects" @click="changeArea">
        <p>Projects</p>
      </button>
      <button class="area" data-area="techStacks" @click="changeArea">
        <p>Tech stacks</p>
      </button>
    </div>
    <Projects id='projects' v-if='currentArea === "projects"' />
    <TechStacks id='techStacks' v-if='currentArea === "techStacks"' />
  </Section>
</template>

<style scoped>
@media only screen and (min-width: 769px) {
  .section :deep(.primary) {
    padding-inline: 56px;
  }
}

#portfolioAreas {
  gap: 12px;
  padding: 12px;
  width: 100%;
  height: max-content;
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: rgb(from var(--base) r g b / 0.4);
  box-shadow: 0 4px 30px rgb(from var(--accent-compliment) r g b /  0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  grid-auto-flow: row;
  border: 1px solid rgb(from var(--accent) r g b / 0.5);
  border-radius: 12px;
}

.area {
  width: 100%;
  border-radius: 8px;
  background: none;
  color: var(--accent-compliment);
  border-radius: 8px;
  padding: 4px;
  padding-inline: 8px;
  overflow: hidden;
  background-color: var(--accent);
  box-shadow:
    0 0 4px 2px rgb(from var(--accent) r g b / 0.5);
  transition: .2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.area > p {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

#portfolioAreas:has(.area:hover):hover .area:not(:hover) {
  background-color: rgb(from var(--accent) r g b / 0.5);
}

#portfolioAreas:hover .area:hover {
  scale: 1.02;
}

@media (pointer: coarse) {
  #portfolioAreas:hover .area:not(:hover) {
    background-color: var(--accent);
  }
  #portfolioAreas:hover .area:hover {
    scale: unset;
  }
}
</style>
<!-- <div id="portfolioContainer" class="section" > -->
<!--   <!-- {{ data }} --> -->
<!-- </div> -->
