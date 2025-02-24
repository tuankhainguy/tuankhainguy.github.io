<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import Area from './Area.vue';
import Card from '../../Card.vue';
import { onMounted, useTemplateRef } from 'vue';

const inner = useTemplateRef("inner");

onMounted(() => {
  inner.value?.children.length
    ? inner.value?.setAttribute("style", `${inner.value?.children.length}s`)
    : null;

  Array.from(inner.value?.children ?? []).forEach((card) => {
    const duplicatedCard = card.cloneNode(true) as HTMLElement;
    duplicatedCard.setAttribute("aria-hidden", "true");
    inner.value?.appendChild(duplicatedCard);
  });
});
</script>


<template>
  <Area>
    <div class="innerContainer" ref="inner">
      <Suspense>
        <ProjectCard repo="algorithms-in-action/algorithms-in-action.github.io"/>
        <template #fallback>
          <Card>
            <p>Loading...</p>
          </Card>
        </template>
      </Suspense>
      <Suspense>
        <ProjectCard repo="WEHI-RCPStudentInternship/pdf-coder"/>
        <template #fallback>
          <Card>
            <p>Loading...</p>
          </Card>
        </template>
      </Suspense>
      <Card>
        <p>Loading...</p>
      </Card>
    </div>
  </Area>
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

@media only screen and (max-width: 768px) {
  .container {
    display: flex;
    overflow-x: hidden;
    -webkit-mask:
      linear-gradient(to right, transparent, white 20% 80%, transparent);
    mask:
      linear-gradient(to right, transparent, white 20% 80%, transparent);
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
    mask: inherit;
  }

  .innerContainer > :deep(.card) {
    flex-shrink: 0;
  }
}

@keyframes scroll {
  to { transform: translateX(calc(-50% - var(--gap) / 2)); }
}
</style>
