<script setup lang="ts">
const data: any = await fetch('https://api.github.com/repos/tuankhainguy/tuankhainguy.github.io')
  .then((res) => res.json())
  // .then((_data) => console.log(_data));
  // .then((_data) => fetch(`https://api.github.com/repos/tuankhainguy/tuankhainguy.github.io/git/blobs/${_data.sha}`))
  // .then((res) => res.json())
  // .then((_data) => JSON.parse(atob(_data.content)));

console.log(data);
</script>

<template>
  <div id="projectsContainer" >
    <!-- {{ data }} -->
  </div>
</template>
