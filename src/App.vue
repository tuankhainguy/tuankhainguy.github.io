<!-- <script setup lang="ts"> -->
<!-- import HelloWorld from './components/HelloWorld.vue' -->
<!-- </script> -->
<script setup lang="ts">
  import Logo from '/src/assets/TKN.svg?component'
</script>

<template>
  <div>
    <!-- <img src="/TKN.svg" class="logo" alt="TKN logo" /> -->
    <Logo class="logo" id="main" />
  </div>
</template>

<style scoped>
@import url('./styles/style.css');

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: 2em;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
