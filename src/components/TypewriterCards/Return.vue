<script setup lang="ts">
</script>


<template>
  <div class="return">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      class="icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m7.49 12-3.75 3.75m0 0 3.75 3.75m-3.75-3.75h16.5V4.499"
      />
    </svg>
  </div>
</template>


<style scoped>
.return {
  font-size: 1rem;
  position: absolute;
  bottom: 16px;
  right: 20px;
  color: var(--subtext);
  width: max-content;
  height: max-content;
  opacity: 0;
  animation: return 5s step-end infinite;
  z-index: 3;
}

@keyframes return {
  from, to { opacity: 0; }
  38% { opacity: 1; }
  42% { opacity: 0; }
}
</style>
