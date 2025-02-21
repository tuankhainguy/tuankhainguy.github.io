<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import Area from './Area.vue';
import Card from '../../Card.vue';

</script>


<template>
  <Area>
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
  </Area>
</template>


<style scoped>
</style>
