<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import Area from './Area.vue';
import Card from '../../Card.vue';

const scrollDelay = 3 * 5;
</script>


<template>
  <Area>
    <div class="innerContainer" :style="`--scroll-delay: ${scrollDelay}s`">
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
  gap: 12px;
  padding-inline: 12px;
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
      linear-gradient(to right, transparent, white 20%, white 80%, transparent);
    mask:
      linear-gradient(to right, transparent, white 20%, white 80%, transparent);
  }

  .innerContainer {
    --scroll-delay: 10s;
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    animation: scroll var(--scroll-delay) linear infinite;
  }

  .innerContainer:after {
    content: ".";
    visibility: hidden;
    display: block;
    clear: both;
    height: 100%;
    font-size: 0;
  }

  .innerContainer > :deep(.card) {
    flex-shrink: 0;
  }
}

@keyframes scroll {
  from, to { transform: translateX(0); }
  50% { transform: translateX(-100%); }
}
</style>
