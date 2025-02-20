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
        <ProjectCard owner="algorithms-in-action" repo="algorithms-in-action.github.io"/>
        <template #fallback>
          <p>Loading...</p>
        </template>
      </Suspense>
      <Suspense>
        <ProjectCard owner="WEHI-RCPStudentInternship" repo="pdf-coder"/>
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
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

#portfolioAreas {
  gap: 12px;
  width: 100%;
  height: max-content;
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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

#portfolioAreas:hover .area:not(:hover) {
  background-color: rgb(from var(--accent) r g b / 0.5);
}

@media (pointer: coarse) {
  #portfolioAreas:hover .area:not(:hover) {
    background-color: var(--accent);
  }
}
</style>
<!-- <div id="portfolioContainer" class="section" > -->
<!--   <!-- {{ data }} --> -->
<!-- </div> -->
