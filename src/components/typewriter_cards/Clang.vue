<script setup lang="ts">
import Card from '../Card.vue';
import Typewriter from '../Typewriter.vue';
</script>


<template>
  <Card>
    <Typewriter :class="{ full: true }">
      <template v-slot:above>
        <div class="textline" data-row="1">
          <span style="color: var(--highlight2);">#include</span>
          &nbsp
          <span style="color: var(--highlight6)">&ltstdio.h&gt</span>
        </div>
        <div class="textline" data-row="2">
          <span style="color: var(--highlight4)">int</span>
          &nbsp
          <span style="color: var(--highlight7)">main()</span>
          &nbsp{
        </div>
      </template>
      <template v-slot:text>
        <span style="color: var(--highlight5)">printf</span>(<span style="color: var(--highlight6)">"Hello, World!"</span>);
      </template>
      <template v-slot:below>
        <div class="textline" data-row="4">
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style="color: var(--highlight2)">return</span>
          &nbsp;
          <span style="color: var(--highlight5)">0</span>
          ;
        </div>
        <div class="textline" data-row="5">
          }
        </div>
      </template>
    </Typewriter>
  </Card>
</template>


<style scoped>
/* .card { */
/*   flex-basis: 300%; */
/* } */
/**/
.textline.textline {
  color: var(--subtext);
}

.textline.textline:before {
  color: var(--subtext);
  margin-inline: 12px;
  content: attr(data-row);
}

/* .typewriter.typewriter increase importance */
/* \00a0 white space code point */
.typewriterContainer :deep(.typewriter.typewriter:before) {
  content: '3\00a0\00a0\00a0\00a0' !important;
  margin-left: 0;
  margin-right: 24px;
}

.typewriterContainer :deep(.typewriter .typewriterText) {
  color: var(--subtext);
  animation-delay: 1s, 0s;
  animation-iteration-count: 1, 5;
  animation-fill-mode: forwards;
}

.typewriterContainer :deep(.typewriter .typewriterText:before) {
  animation: none;
}
</style>
