<script setup lang="ts">
// import { onMounted, useTemplateRef } from 'vue';
import Clang from './TypewriterCards/Clang.vue';
import JS from './TypewriterCards/JS.vue';
import Python from './TypewriterCards/Python.vue';

// const deck = useTemplateRef('deck');
// let dragging = false;
// let timeout: ReturnType<typeof setTimeout> | null = null;
// let startX: number | null = null, startY: number | null  = null;
//
// const onEnter = (e: MouseEvent) => {
//   const el = e.currentTarget as HTMLElement;
//   el.classList.add('pause');
// }
//
// const onLeave = (e: MouseEvent) => {
//   if (dragging) { return; }
//   const el = e.currentTarget as HTMLElement;
//   el.classList.remove('pause');
// }
//
// const onMouseDown = (e: MouseEvent) => {
//   dragging = true;
//   startX = e.clientX, startY = e.clientY;
//   deck.value?.classList.add('pause');
// }
//
// const onMouseMove = (e: MouseEvent) => {
//   if (!dragging) { return; }
//   if (timeout !== null) {
//     window.clearTimeout(timeout);
//   }
//   timeout = setTimeout(() => {
//     const x = startX ? e.clientX - startX : 0, y = startY ? e.clientY - startY : 0;
//     const dir: string = (Math.abs(x) > Math.abs(y)) ?
//       (x > 0 ? 'right' : 'left') :
//       (y > 0 ? 'down' : 'up')
//
//     const el = deck.value;
//     if (!el) { return; }
//
//     dragging = false;
//     el.classList.remove('pause');
//     el.classList.remove('right');
//     el.classList.add(dir);
//     setTimeout(() => {
//       el.classList.remove(dir);
//       el.classList.add('right');
//     }, 5000);
//   }, 200);
// }
//
// const onMouseUp = () => {
//   dragging = false;
//   startX = null, startY = null;
//   deck.value?.classList.remove('pause');
// }

// onMounted(() => {
//   deck.value?.addEventListener('mouseenter', onEnter)
//   deck.value?.addEventListener('mouseleave', onLeave)
//   deck.value?.addEventListener('mousedown', onMouseDown)
//   deck.value?.addEventListener('mousemove', onMouseMove)
//   deck.value?.addEventListener('mouseup', onMouseUp)
// });
</script>


<template>
  <div class="deck right" ref="deck">
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
  --translate-right: 200px;
  --translate-left: -200px;
  --translate-up: -200px;
  --translate-down: 200px;
  top: 50%;
  left: 50%;
  animation: onFront 15s ease 15s infinite;
  animation-play-state: running;
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

.deck.pause > .card {
  animation-play-state: paused;
}

.deck.right > .card {
  --translate-x: var(--translate-right);
  --translate-y: 0;
}
.deck.left > .card {
  --translate-x: var(--translate-left);
  --translate-y: 0;
}
.deck.up > .card {
  --translate-x: 0;
  --translate-y: var(--translate-up);
}
.deck.down > .card {
  --translate-x: 0;
  --translate-y: var(--translate-down);
}

@keyframes onFront {
  5% {
    transform: translate(var(--translate-x), var(--translate-y));
    z-index: 3;
    translate: var(--middle);
  }
  10% {
    transform: translate(0, 0);
    z-index: 2;
    translate: var(--back);
  }
  40% {
    transform: translate(0, 0);
    z-index: 2;
    translate: var(--back);
  }
  50% {
    transform: translate(0, 0);
    z-index: 3;
    translate: var(--middle);
  }
  70% {
    transform: translate(0, 0);
    z-index: 3;
    translate: var(--middle);
  }
  80% {
    transform: translate(0, 0);
    z-index: 4;
    translate: var(--front);
  }
}
@keyframes onMiddle {
  10% {
    transform: translate(0, 0);
    z-index: 4;
    translate: var(--front);
  }
  40% {
    transform: translate(0, 0);
    z-index: 4;
    translate: var(--front);
  }
  45% {
    transform: translate(var(--translate-x), var(--translate-y));
    z-index: 3;
    translate: var(--middle);
  }
  50% {
    transform: translate(0, 0);
    z-index: 2;
    translate: var(--back);
  }
  70% {
    transform: translate(0, 0);
    z-index: 2;
    translate: var(--back);
  }
  80% {
    transform: translate(0, 0);
    z-index: 3;
    translate: var(--middle);
  }
}
@keyframes onBack {
  10% {
    transform: translate(0, 0);
    z-index: 3;
    translate: var(--middle);
  }
  40% {
    transform: translate(0, 0);
    z-index: 3;
    translate: var(--middle);
  }
  50% {
    transform: translate(0, 0);
    z-index: 4;
    translate: var(--front);
  }
  70% {
    transform: translate(0, 0);
    z-index: 4;
    translate: var(--front);
  }
  75% {
    transform: translate(var(--translate-x), var(--translate-y));
    z-index: 3;
    translate: var(--middle);
  }
  80% {
    transform: translate(0, 0);
    z-index: 2;
    translate: var(--back);
  }
}
</style>
