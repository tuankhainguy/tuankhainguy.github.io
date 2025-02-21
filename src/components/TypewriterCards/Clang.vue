<script setup lang="ts">
import Card from '../Card.vue';
import Typewriter from '../Typewriter.vue';
import Return from './Return.vue';
</script>


<template>
  <Card>
    <Typewriter :class="{ full: true, editor: true }">
      <template v-slot:above>
        <div class="textline" data-row="1">
          <span style="color: var(--highlight2);">#include</span>
          &nbsp
          <span style="color: var(--highlight6)">&ltstdio.h&gt</span>
        </div>
        <div class="textline" data-row="2">
          <span style="color: var(--highlight4)">int</span>
          &nbsp
          <span style="color: var(--highlight10)">main()</span>
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
    <Typewriter :class="{ full: true, once: true }">
      <template v-slot:text>
          gcc hello_world.c -o hello_world
      </template>
    </Typewriter>
    <Typewriter :class="{ full: true }">
      <template v-slot:below>
        <div class="textline"></div>
      </template>
    </Typewriter>
    <Return />
  </Card>
</template>


<style scoped>
/* .card { */
/*   flex-basis: 300%; */
/* } */
/**/
.typewriterContainer.editor .textline {
  color: var(--subtext);
}

.typewriterContainer.editor .textline:before {
  color: var(--subtext);
  margin-inline: 12px;
  content: attr(data-row);
}

/* .typewriter.typewriter increase importance */
/* \00a0 white space code point */
.typewriterContainer.editor :deep(.typewriter:before) {
  content: '3\00a0\00a0\00a0\00a0' !important;
  margin-left: 0;
  margin-right: 24px;
}

.typewriterContainer.editor {
  border-bottom: 1px solid var(--subtext);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.typewriterContainer.editor :deep(.typewriter .typewriterText) {
  color: var(--subtext);
  animation-iteration-count: 1, 5;
  animation-fill-mode: forwards;
}

.typewriterContainer.editor :deep(.typewriter .typewriterText:before) {
  animation: none;
}

.typewriterContainer:not(:is(.editor)).once {
  height: max-content;
	padding-bottom: 0px;
}

.typewriterContainer:not(:is(.editor)).once :deep(.typewriter .typewriterText) {
  height: max-content;
  animation-delay: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1, 4;
}

.typewriterContainer:not(:is(.editor)):not(:is(.once)) :deep(.typewriter .typewriterText) {
  animation-delay: 11s;
  animation-name: typing, blink-caret;
  animation-timing-function: steps(13, end), step-end;
}

.typewriterContainer:not(:is(.editor)):not(:is(.once)) .textline:after {
  color: var(--text);
  animation:
    return 5s step-end 11s infinite;
}

.typewriterContainer:not(:is(.editor)):not(:is(.once)) :deep(.typewriter .typewriterText:before) {
  animation: none;
  content: './hello_world';
}

.typewriterContainer:not(:is(.editor)):not(:is(.once)) :deep(.typewriter) {
  opacity: 0;
  animation: show 0s step-end 8s forwards;
}

.return {
  animation-delay: 11s;
}

@keyframes return {
  from, to { content: ''; }
  40%,
  100% { content: 'Hello, World!'; }
}

/* The typing effect */
@keyframes typing {
  0% {
    width: 0;
  }

  20%,
  100% {
    width: 100%
  }
}

@keyframes show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
