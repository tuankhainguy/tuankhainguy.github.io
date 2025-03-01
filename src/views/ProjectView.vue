<script setup lang="ts">
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
  <button type="button" @click="onBackButtonClick">
    Back
  </button>
  <div>{{ project }}</div>
</template>

<style scoped>
</style>
