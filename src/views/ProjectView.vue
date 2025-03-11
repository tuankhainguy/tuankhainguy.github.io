<script setup lang="ts">
import MainProjectContainer from '../components/MainProjectContainer.vue';
import { useRouter } from 'vue-router';

defineProps<{
  project: string
}>();

const router = useRouter();

const onBackButtonClick = () => {
  router.push('/');
}
</script>

<template>
  <div class="topbar">
    <button type="button" @click="onBackButtonClick">
      <-
    </button>
  </div>
  <MainProjectContainer :project="project" />
</template>

<style scoped>
.topbar > button {
  background-color: var(--accent);
  color: var(--accent-compliment);
  padding-block: 2px;
  padding-inline: 12px;
}
</style>
