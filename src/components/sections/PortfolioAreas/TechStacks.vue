<script setup lang="ts">
import Bash from './Icons/bash.vue';
import Clang from './Icons/clang.vue';
import Csharp from './Icons/csharp.vue';
import Css from './Icons/css.vue';
import Html from './Icons/html.vue';
import Js from './Icons/js.vue';
import Next from './Icons/next.vue';
import Node from './Icons/node.vue';
import Python from './Icons/python.vue';
import React from './Icons/react.vue';
import T3 from './Icons/t3.vue';
import Ts from './Icons/ts.vue';
import Unity from './Icons/unity.vue';
import Vue from './Icons/vue.vue';
import PortfolioArea from './PortfolioArea.vue';
import TechStack from './TechStack.vue';
</script>


<template>
  <PortfolioArea>
    <TechStack group="primary-stacks">
      <T3 />
    </TechStack>
    <TechStack group="programming-languages">
      <Clang />
      <Ts />
      <Js />
      <Python />
      <Csharp />
    </TechStack>
    <TechStack group="other-languages">
      <Html />
      <Css />
      <Bash />
    </TechStack>
    <TechStack group="libraries">
      <React />
      <Node />
    </TechStack>
    <TechStack group="frameworks">
      <Next />
      <Vue />
    </TechStack>
    <TechStack group="others">
      <Unity />
    </TechStack>
  </PortfolioArea>
</template>


<style scoped>
:deep(svg) {
  width: 5rem;
  height: 5rem;
  will-change: filter;
  transition: filter 300ms;
}
:deep(svg:hover) {
  filter: drop-shadow(0 0 .2em var(--accent));
}

:deep(#t3 > svg),
:deep(#bash > svg),
:deep(#unity > svg) {
  border-radius: .5em;
  background-color: var(--text);
  padding: 8px;
}
:deep(#unity > svg) {
  padding-right: 10px;
}

</style>
