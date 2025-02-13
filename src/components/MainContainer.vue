<script setup lang="ts">
import { getFractionVisible, selectTab } from '../common/utils';
import { GlobalStore } from '../main';
import Logo from '/src/assets/TKN.svg?component'
import Tabs from './Tabs.vue'
import { onMounted, useTemplateRef } from 'vue';

const containerRef = useTemplateRef('main');
const topbarRef = useTemplateRef("topbar");
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
  const topbar = topbarRef.value;
  const logo = topbar?.firstElementChild;
  const logoBg = logo?.firstElementChild;
  logoBg ?
    (logoBg as HTMLElement).style.fill = "var(--catppuccin-base)" :
    null;
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

<template>
  <div id="mainContainer" ref="main" >
    <div id="topbar" ref="topbar">
      <Logo class="logo" id="topLogo" />
      <Tabs />
    </div>
    <div v-for="key in keys" :id="key" class="section"></div>
    <div id="topShadow" />
    <div id="underlay" />
    <div id="bgObjs">
      <div id="obj1" />
      <div id="obj2" />
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-shrink: 0;
  /* this is just place-holder value */
  /* heights or widths using vh/vw or svh/svw or dvh/dvw */
  /* have issues with mobile browsers because of browser navbar resizing */
  /* especially so for moving elements like this */
  /* if use viewport values and the navbar resizes, everything else with */
  /* viewport values resize making scrolling and maybe other interactions */
  /* not smooth/choppy */
  height: 800px;
  width: 100%;
  border: 2px solid var(--catppuccin-lavender);
  border-radius: 8px;
  background: rgb(from var(--catppuccin-surface1) r g b / 0.4);
  box-shadow: 0 4px 30px rgb(from var(--catppuccin-base) r g b / 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  /* left and right */
  /* border-inline: none; */
  box-sizing: border-box;
  z-index: 0;
}


#mainContainer {
  --empty-space: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: start;
  align-items: center;
  padding: var(--empty-space);
  padding-top: calc(var(--empty-space) + var(--topbar-height));
  margin: 0;
  width: 100%;
  height: max-content;
  /* height: 100%; */
  /* overflow: scroll; */
  gap: var(--empty-space);
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


#topbar {
  height: var(--topbar-height);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  box-sizing: border-box;
  background-color: inherit;
  z-index: 10;
  position: fixed;
  top: 0;
}

.logo {
  height: 2em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: .5em;
}
.logo:hover {
  filter: drop-shadow(0 0 .2em var(--catppuccin-lavender));
}


#bgObjs #obj1 {
  position: fixed;
  width: 100px;
  aspect-ratio: 1 / 1;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  content: '';
  background-color: var(--catppuccin-maroon);
  z-index: -2;
  border-radius: 50px;
}


#bgObjs #obj2 {
  position: fixed;
  width: 400px;
  aspect-ratio: 1 / 1;
  top: 20%;
  left: 30%;
  transform: translate(-20%, -10%);
  content: '';
  background-color: var(--catppuccin-mauve);
  z-index: -2;
  border-radius: 200px;
}


#underlay {
  position: fixed;
  top: 0;
  padding-top: calc(var(--empty-space) + var(--topbar-height));
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
