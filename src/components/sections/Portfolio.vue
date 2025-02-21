<script setup lang="ts">
import ProjectCard from '../ProjectCard.vue';
import Section from './Section.vue';
</script>

<template>
  <Section>
    <div id="portfolioAreas">
      <button class="area">
        <h4>Projects</h4>
      </button>
      <button class="area">
        <h4>Tech stack</h4>
      </button>
    </div>
    <div class="container">
      <Suspense>
        <ProjectCard repo="algorithms-in-action/algorithms-in-action.github.io"/>
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
      <Suspense>
        <ProjectCard repo="WEHI-RCPStudentInternship/pdf-coder"/>
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
    </div>
  </Section>
</template>

<style scoped>
.container {
  gap: 12px;
  padding-inline: 12px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: row;
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

.area > h4 {
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

#portfolioAreas:hover .area:not(:hover) {
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
