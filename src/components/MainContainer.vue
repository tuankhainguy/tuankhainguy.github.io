<script setup lang="ts">
import { getFractionVisible, selectTab } from '../common/utils';
import { GlobalStore } from '../main';
import { onMounted, useTemplateRef } from 'vue';
import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Contacts from './sections/Contacts.vue';
import Portfolio from './sections/Portfolio.vue';

const containerRef = useTemplateRef('main');
let scrollEl: HTMLElement | null = null;

const keys = Object.keys(GlobalStore.sections as object);

function onScroll() {
  const container = containerRef.value;
  if (!container || scrollEl === null) return;

  let highestOpacity = 0;
  let highestOpacityElement: HTMLElement | null = null;
  container.childNodes.forEach((section) => {
    const id = (section as HTMLElement).id;
    if (id === "topShadow" || id === "topbar" || id === "bgObjs" || id === "underlay") return;
    const frac = getFractionVisible(
      section as HTMLElement,
      scrollEl!,
    );

    if (frac > highestOpacity) {
      highestOpacity = frac;
      highestOpacityElement = section as HTMLElement
    }

    (section as HTMLElement).style.opacity = `${frac * 2 - 1}`;
  });

  if (!highestOpacityElement) return;
  if (highestOpacityElement === GlobalStore.currentSection!.section) return;

  const nextTab =
    GlobalStore.sections![(highestOpacityElement as HTMLElement).id].tab;

  selectTab(nextTab!);
}

onMounted(() => {
  document.addEventListener('scroll', onScroll);
  scrollEl = document.firstElementChild as HTMLElement;
  const sections = GlobalStore.sections;
  const container = containerRef.value as HTMLElement;
  container.scrollTop = 0;

  let highestOpacity = 0;
  let highestOpacityElement: HTMLElement | null = null;
  // v-for creates 2 additional "#text" nodes that makes it not work
  Array.from(container.childNodes).forEach((section) => {
    const id = (section as HTMLElement).id;
    if (!id) {
      section.remove();
      return;
    }
    if (id === "topShadow" || id === "topbar" || id === "bgObjs" || id === "underlay") return;
    sections![(section as HTMLElement).id].section = section as HTMLElement;

    const frac = getFractionVisible(
      section as HTMLElement,
      scrollEl!,
    );

    if (frac > highestOpacity) {
      highestOpacity = frac;
      highestOpacityElement = section as HTMLElement
    }

    (section as HTMLElement).style.opacity = `${frac * 2 - 1}`;
  });

  if (!highestOpacityElement) return;

  const nextTab =
    GlobalStore.sections![(highestOpacityElement as HTMLElement).id].tab;

  selectTab(nextTab!);
});
</script>


<template>
  <div id="mainContainer" ref="main" >
    <!-- <div v-for="key in keys" :id="key" class="section"></div> -->
    <Home :id="keys[0]" />
    <About :id="keys[1]" />
    <Portfolio :id="keys[2]" />
    <Contacts :id="keys[3]" />
    <div id="topShadow" />
    <div id="underlay" />
    <div id="bgObjs">
      <!-- <div id="obj1" /> -->
      <div id="obj2" />
    </div>
  </div>
</template>


<style scoped>
#mainContainer {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: start;
  align-items: center;
  padding: var(--main-empty-space);
  padding-top: calc(var(--main-empty-space) + var(--topbar-height));
  margin: 0;
  width: 100%;
  height: max-content;
  /* height: 100%; */
  /* overflow: scroll; */
  gap: var(--main-empty-space);
  box-sizing: border-box; /* stop overflow when there is padding */
  z-index: 0;
}


#mainContainer #topShadow {
  top: 0;
  width: 100%;
  height: var(--topbar-height);
  content: '';
  position: fixed;
  box-shadow: 0px 0px 8px 8px rgb(from var(--catppuccin-base) r g b);
  background-color: var(--catppuccin-base);
}


#bgObjs {
  position: fixed;
  top: 0;
  left: 0;
  width: 100lvw;
  height: 100lvh;
  z-index: -2;
}


#bgObjs #obj1 {
  position: absolute;
  width: 100px;
  aspect-ratio: 1 / 1;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  content: '';
  background-color: var(--catppuccin-maroon);
  border-radius: 50px;
}


#bgObjs #obj2 {
  position: absolute;
  width: 200px;
  aspect-ratio: 1 / 1;
  top: calc(var(--vh) / 2);
  left: calc(var(--vw) / 2);
  transform: translate(-50%, -50%);
  content: '';
  background-color: var(--catppuccin-mauve);
  border-radius: 50%;
}


#underlay {
  position: fixed;
  top: 0;
  padding-top: calc(var(--main-empty-space) + var(--topbar-height));
  margin: 0;
  width: 100%;
  height: max-content;
  height: 100vh;
  border-radius: 8px;
  background: rgb(from var(--catppuccin-base) r g b / 0.3);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  /* left and right */
  /* border-inline: none; */
  box-sizing: border-box;
  z-index: -1;
}
</style>


<!-- can mix this type of script with Vue 3 Composition API to access DOM Element -->
<!-- <script lang="ts"> -->
<!-- export default { -->
<!--   mounted() { -->
<!--     const sections = GlobalStore.sections; -->
<!--     const container = (this.$el as HTMLElement); -->
<!--     container.scrollTop = 0; -->
<!---->
<!--     // v-for creates 2 additional "#text" nodes that makes it not work -->
<!--     Array.from(container.childNodes).forEach((section) => { -->
<!--       const id = (section as HTMLElement).id; -->
<!--       if (!id) { -->
<!--         section.remove(); -->
<!--         return; -->
<!--       } -->
<!--       if (id === "topShadow") return; -->
<!--       sections![(section as HTMLElement).id].section = section as HTMLElement; -->
<!---->
<!--       const frac = getFractionVisible( -->
<!--         section as HTMLElement, -->
<!--         container, -->
<!--       ); -->
<!---->
<!--       (section as HTMLElement).style.opacity = `${frac}`; -->
<!--     }); -->
<!--   }, -->
<!-- } -->
<!-- </script> -->

