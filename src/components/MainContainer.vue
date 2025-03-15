<script setup lang="ts">
import { getFractionVisible, selectTab } from '../common/utils';
import { GlobalStore } from '../main';
import { onMounted, useTemplateRef } from 'vue';
import Home from './sections/Home.vue';
import About from './sections/About.vue';
import Contacts from './sections/Contacts.vue';
import Portfolio from './sections/Portfolio.vue';
import AnimatedBackground from './AnimatedBackground.vue';

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
    if (!keys.includes(id)) return;
    const frac = getFractionVisible(
      section as HTMLElement,
      scrollEl!,
    );

    if (frac > highestOpacity) {
      highestOpacity = frac;
      highestOpacityElement = section as HTMLElement
    }

    (section as HTMLElement).style.opacity = `${frac * 3 - 1}`;
  });

  if (!highestOpacityElement) { return; }
  if (!GlobalStore.currentSection) {
    GlobalStore.currentSection =
      GlobalStore.sections![(highestOpacityElement as HTMLElement).id];
  }
  else if (highestOpacityElement === GlobalStore.currentSection!.section) {
    return;
  }

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
    if (!keys.includes(id)) return;
    sections![(section as HTMLElement).id].section = section as HTMLElement;

    const frac = getFractionVisible(
      section as HTMLElement,
      scrollEl!,
    );

    if (frac > highestOpacity) {
      highestOpacity = frac;
      highestOpacityElement = section as HTMLElement
    }

    (section as HTMLElement).style.opacity = `${frac * 3 - 1}`;
  });

  if (!highestOpacityElement) { return; }
  if (!GlobalStore.currentSection) {
    GlobalStore.currentSection =
      GlobalStore.sections![(highestOpacityElement as HTMLElement).id];
  }

  const nextTab =
    GlobalStore.sections![(highestOpacityElement as HTMLElement).id].tab;

  selectTab(nextTab!);
});
</script>


<template>
  <div id="mainContainer" ref="main" >
    <Home :id="keys[0]" />
    <About :id="keys[1]" />
    <Portfolio :id="keys[2]" />
    <Contacts :id="keys[3]" />
    <AnimatedBackground />
  </div>
</template>


<style scoped>
/**/
/* #mainContainer:after { */
/*   top: 0; */
/*   left: 0; */
/*   width: 100%; */
/*   height: var(--topbar-height); */
/*   content: ''; */
/*   position: fixed; */
/*   box-shadow: 0px 0px 8px 8px rgb(from var(--base) r g b); */
/*   background-color: var(--base); */
/* } */
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

