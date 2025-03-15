<script setup lang="ts">
import ProjectCard from './ProjectCard.vue';
import Card from '../../Card.vue';
import { onMounted, useTemplateRef } from 'vue';
import PortfolioArea from './PortfolioArea.vue';
import { projects } from '../../../main';
import gsap from 'gsap';

const inner = useTemplateRef("inner");
const outer = useTemplateRef("outer");
let timeout: ReturnType<typeof setTimeout> | null = null;
let tl: ReturnType<typeof gsap.timeline> | null = null;
let currX: number | null = null;
let currInnerWidth: number | null = null;

const animate = () => {
  if (window.innerWidth === currInnerWidth) {
    return;
  }
  else if (currInnerWidth === null) {
    currInnerWidth = window.innerWidth;
  }

  if (tl) {
    tl.restart();
    tl.kill();
    tl = null;
  }
  if (window.innerWidth <= 570) {
    tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      '.innerContainer',
      {
        transform: "translateX(0)",
      },
      {
        duration: 10,
        transform: "translateX(calc(-50% - var(--gap) / 2))",
        ease: "none"
      }
    )
  }
}

const onTouchStart = (e: TouchEvent) => {
  if (timeout) {
    clearTimeout(timeout);
  }
  tl?.pause();
  if (outer.value && inner.value) {
    currX = e.changedTouches[0].screenX;

    outer.value!.$el.addEventListener('touchend', onTouchEnd);
    outer.value!.$el.addEventListener('touchmove', onTouchMove);
  }
}

const onTouchMove = (e: TouchEvent) => {
  e.preventDefault();
  if (outer.value && inner.value && currX) {
    let currProgress = tl?.progress() ;
    let diff = e.changedTouches[0].screenX - currX;

    if (!currProgress) {
      currProgress = 0;
    }

    if (Math.abs(currProgress) < 0.01) {
      currProgress = diff > 0 ? 0.99 : 0.01;
    }

    const newProgress =
      currProgress -
      (diff) / inner.value.clientWidth * 1.5;
    currX = e.changedTouches[0].screenX;

    tl?.progress(newProgress);
  }
}

const onTouchEnd = () => {
  // const scrollLeft = outer.value.$el.scrollLeft;
  // const scrollWidth = outer.value.$el.scrollWidth;
  // tl?.progress(scrollLeft / scrollWidth);
  timeout = setTimeout(() => {
    if (outer.value) {
      tl?.play();
      outer.value!.$el.removeEventListener('touchend', onTouchEnd);
      outer.value!.$el.removeEventListener('touchmove', onTouchMove);
    }
  }, 1000);
}

onMounted(() => {
  inner.value?.children.length
    ? inner.value?.setAttribute("style", `${inner.value?.children.length}s`)
    : null;

  Array.from(inner.value?.children ?? []).forEach((card) => {
    const duplicatedCard = card.cloneNode(true) as HTMLElement;
    duplicatedCard.setAttribute("aria-hidden", "true");
    duplicatedCard.id = card.id;
    duplicatedCard.classList.add("duplicate");
    inner.value?.appendChild(duplicatedCard);
  });
  animate();
  window.addEventListener('resize', animate);
  outer.value?.$el.addEventListener('touchstart', onTouchStart);
});
</script>


<template>
  <PortfolioArea ref="outer">
    <div class="innerContainer" ref="inner">
      <Suspense v-for="value, key in projects /* key and value position opposite of regular js and ts*/">
        <ProjectCard :repo="key" :img-src="value.imgSrc" />
        <template #fallback>
          <Card :id="key">
            <p>Loading...</p>
          </Card>
        </template>
      </Suspense>
    </div>
  </PortfolioArea>
</template>


<style scoped>
.innerContainer {
  --gap: 12px;
  gap: var(--gap);
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  grid-auto-flow: row;
  position: relative;
}

:deep(.card) {
  position: relative;
  /* needs to specify a value so that the inner can contain it */
  width: 100%;
  /* value cannot be anything? (at least not 100%) so that the inner can contain it */
  flex-basis: unset;
  /* for aspect-ratio to work at least width or height must not be set */
  height: unset;
  aspect-ratio: 3 / 4;
  padding: 12px;
  gap: 12px;
  border-radius: 12px;
  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: auto 1fr auto;
}

@media only screen and (min-width: 571px) {
  .duplicate {
    display: none;
  }
}

@media only screen and (max-width: 570px) {
  .container {
    display: flex;
    overflow-x: hidden;
    -webkit-mask:
      linear-gradient(to right, transparent, white 20% 80%, transparent);
    mask:
      linear-gradient(to right, transparent, white 20% 80%, transparent);
  }

  .innerContainer {
    --scroll-speed: 10s;
    width: max-content;
    display: flex;
    flex-wrap: nowrap;
    flex-shrink: 0;
    /* animation: scroll var(--scroll-speed) linear infinite; */
    /* somehow this is necessary for the mask to show on grandchildren elements */
    /* but this is not added in Kevin Powell tutorial */
    -webkit-mask:
      linear-gradient(to right, white, white);
    mask:
      linear-gradient(to right, white, white);
  }

  .innerContainer > :deep(.card) {
    width: 70dvw;
  }
}

@keyframes scroll {
  to { transform: translateX(calc(-50% - var(--gap) / 2)); }
}
</style>
