<script setup lang="ts">
import Clang from './TypewriterCards/Clang.vue';
import JS from './TypewriterCards/JS.vue';
import Python from './TypewriterCards/Python.vue';

</script>


<template>
  <div class="deck">
    <Clang :class="{ front: true }"/>
    <Python  :class="{ middle: true }"/>
    <JS  :class="{ back: true }"/>
  </div>
</template>


<style scoped>
.deck {
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.card {
  --front: calc(-5% - 50%) calc(-5% - 50%);
  --middle: -50% -50%;
  --back: calc(5% - 50%) calc(5% - 50%);
  top: 50%;
  left: 50%;
  animation: onFront 15s ease 15s infinite;
}

.card.nearest {
  z-index: 5;
  translate: calc(2 * -5%) calc(2 * -5% - 50%);
  animation: none;
}
.card.front {
  z-index: 4;
  translate: var(--front);
  animation-name: onFront;
}
.card.middle {
  z-index: 3;
  translate: var(--middle);
  animation-name: onMiddle;
}
.card.back {
  z-index: 2;
  translate: var(--back);
  animation-name: onBack;
}
.card.furthest {
  z-index: 1;
  translate: calc(2 * 5%) calc(2 * 5% - 50%);
  animation: none;
}

@keyframes onFront {
  5% {
    transform: translateX(200px);
    z-index: 3;
    translate: var(--middle);
  }
  10% {
    transform: translateX(0);
    z-index: 2;
    translate: var(--back);
  }
  40% {
    transform: translateX(0);
    z-index: 2;
    translate: var(--back);
  }
  50% {
    transform: translateX(0);
    z-index: 3;
    translate: var(--middle);
  }
  70% {
    transform: translateX(0);
    z-index: 3;
    translate: var(--middle);
  }
  80% {
    transform: translateX(0);
    z-index: 4;
    translate: var(--front);
  }
}
@keyframes onMiddle {
  10% {
    transform: translateX(0);
    z-index: 4;
    translate: var(--front);
  }
  40% {
    transform: translateX(0);
    z-index: 4;
    translate: var(--front);
  }
  45% {
    transform: translateX(200px);
    z-index: 3;
    translate: var(--middle);
  }
  50% {
    transform: translateX(0);
    z-index: 2;
    translate: var(--back);
  }
  70% {
    transform: translateX(0);
    z-index: 2;
    translate: var(--back);
  }
  80% {
    transform: translateX(0);
    z-index: 3;
    translate: var(--middle);
  }
}
@keyframes onBack {
  10% {
    transform: translateX(0);
    z-index: 3;
    translate: var(--middle);
  }
  40% {
    transform: translateX(0);
    z-index: 3;
    translate: var(--middle);
  }
  50% {
    transform: translateX(0);
    z-index: 4;
    translate: var(--front);
  }
  70% {
    transform: translateX(0);
    z-index: 4;
    translate: var(--front);
  }
  75% {
    transform: translateX(200px);
    z-index: 3;
    translate: var(--middle);
  }
  80% {
    transform: translateX(0);
    z-index: 2;
    translate: var(--back);
  }
}
</style>
