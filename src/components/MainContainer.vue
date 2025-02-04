<script setup lang="ts">
import { getFractionVisible, selectTab } from '../common/utils';
import { GlobalStore } from '../main';


const keys = Object.keys(GlobalStore.sections as object);

function onScroll(e: Event) {
  const container = e.currentTarget as HTMLElement;

  let highestOpacity = 0;
  let highestOpacityElement: HTMLElement | null = null;
  container.childNodes.forEach((section) => {
    if ((section as HTMLElement).id === "topShadow") return;
    const frac = getFractionVisible(
      section as HTMLElement,
      container,
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
</script>

<script lang="ts">
export default {
  mounted() {
    const sections = GlobalStore.sections;
    const container = (this.$el as HTMLElement);
    container.scrollTop = 0;

    // v-for creates 2 additional "#text" nodes that makes it not work
    Array.from(container.childNodes).forEach((section) => {
      const id = (section as HTMLElement).id;
      if (!id) {
        section.remove();
        return;
      }
      if (id === "topShadow") return;
      sections![(section as HTMLElement).id].section = section as HTMLElement;

      const frac = getFractionVisible(
        section as HTMLElement,
        container,
      );

      (section as HTMLElement).style.opacity = `${frac}`;
    });
  },
}
</script>

<template>
  <div id="mainContainer" @scroll="onScroll" >
    <div v-for="key in keys" :id="key" class="section"></div>
    <div id="topShadow">
    </div>
  </div>
</template>

<style scoped>
.section {
  display: flex;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
  /* border: 0.5rem solid var(--catppuccin-lavender); */
  border-radius: 8px;
  /* left and right */
  /* border-inline: none; */
  box-sizing: border-box;
  background:
    linear-gradient(to bottom right, var(--catppuccin-surface1), var(--catppuccin-crust));
	box-shadow:
		-3px -3px 12px rgb(from var(--catppuccin-lavender) r g b / .83),
		1px 2px 3px rgb(from var(--catppuccin-crust) r g b / .05),
		3px 4px 7px rgb(from var(--catppuccin-crust) r g b / .1),
		inset -2px -2px 2px rgb(from var(--catppuccin-crust) r g b / .1),
		inset -1px -1px 3px rgb(from var(--catppuccin-lavender) r g b / .6),
		inset 2px 2px 8px rgb(from var(--catppuccin-lavender) r g b / .2),
		inset 1px 1px 8px rgb(from var(--catppuccin-lavender) r g b / .2),
		-3px -3px 12px rgb(from var(--catppuccin-lavender) r g b / .8);
  z-index: 0;
}


#mainContainer {
  --empty-space: 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: var(--empty-space);
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  gap: var(--empty-space);
  box-sizing: border-box; /* stop overflow when there is padding */
  scrollbar-width: thin;
  scrollbar-color: var(--catppuccin-lavender) var(--catppuccin-mantle);
  z-index: 1;
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
</style>
