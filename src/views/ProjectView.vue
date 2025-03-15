<script setup lang="ts">
import AnimatedButton from '../components/AnimatedButton.vue';
import MainProjectContainer from '../components/MainProjectContainer.vue';
import { useRouter } from 'vue-router';

defineProps<{
  project: string
}>();

const router = useRouter();

const onBackButtonClick = () => {
  setTimeout(() => {
    router.push('/');
  }, 200);
}
</script>

<template>
  <div class="topbar">
    <AnimatedButton @click="onBackButtonClick">
      <-
    </AnimatedButton>
  </div>
  <MainProjectContainer :project="project" />
</template>

<style scoped>
</style>
