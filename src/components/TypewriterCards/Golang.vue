<script setup lang="ts">
import Card from '../Card.vue';
import Typewriter from './Typewriter.vue';
</script>


<template>
  <Card>
    <Typewriter :class="{ full: true }" />
  </Card>
</template>


<style scoped>
</style>
