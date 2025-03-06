<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import Card from '../../Card.vue';
import { onMounted, useTemplateRef } from 'vue';
import PortfolioArea from './PortfolioArea.vue';

const inner = useTemplateRef("inner");
const projectLinks: string[] = [
  "algorithms-in-action/algorithms-in-action.github.io",
  "WEHI-RCPStudentInternship/pdf-coder",
];

onMounted(() => {
  inner.value?.children.length
    ? inner.value?.setAttribute("style", `${inner.value?.children.length}s`)
    : null;

  Array.from(inner.value?.children ?? []).forEach((card) => {
    const duplicatedCard = card.cloneNode(true) as HTMLElement;
    duplicatedCard.setAttribute("aria-hidden", "true");
    duplicatedCard.id = card.id;
    duplicatedCard.classList.add("duplicate");
    inner.value?.appendChild(duplicatedCard);
  });
});
</script>


<template>
  <PortfolioArea>
    <div class="innerContainer" ref="inner">
      <Suspense v-for="link in projectLinks">
        <ProjectCard :repo="link"/>
        <template #fallback>
          <Card :id="link">
            <p>Loading...</p>
          </Card>
        </template>
      </Suspense>
    </div>
  </PortfolioArea>
</template>


<style scoped>
.innerContainer {
  --gap: 12px;
  gap: var(--gap);
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-flow: row;
}

.card {
  position: relative;
  /* needs to specify a value so that the inner can contain it */
  width: 240px;
  /* value cannot be anything? (at least not 100%) so that the inner can contain it */
  flex-basis: unset;
  /* for aspect-ratio to work at least width or height must not be set */
  height: unset;
  aspect-ratio: 3 / 4;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
  cursor: pointer;
}

.duplicate {
  display: none;
}

@media only screen and (max-width: 570px) {
  .container {
    display: flex;
    overflow-x: hidden;
    -webkit-mask:
      linear-gradient(to right, transparent, white 20% 80%, transparent);
    mask:
      linear-gradient(to right, transparent, white 20% 80%, transparent);
  }

  .duplicate {
    display: flex;
  }

  .innerContainer {
    --scroll-speed: 10s;
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    animation: scroll var(--scroll-speed) linear infinite;
    /* somehow this is necessary for the mask to show on grandchildren elements */
    /* but this is not added in Kevin Powell tutorial */
    -webkit-mask:
      linear-gradient(to right, white, white);
    mask:
      linear-gradient(to right, white, white);
  }

  .innerContainer > :deep(.card) {
    flex-shrink: 0;
  }
}

@keyframes scroll {
  to { transform: translateX(calc(-50% - var(--gap) / 2)); }
}
</style>
