<script setup lang="ts">
import { getFractionVisible, selectTab } from '../common/utils';
import { GlobalStore } from '../main';


function onScroll(e: Event) {
  const container = e.currentTarget as HTMLElement;

  let highestOpacity = 0;
  let highestOpacityElement: HTMLElement | null = null;
  container.childNodes.forEach((section) => {
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
  if (highestOpacityElement === GlobalStore.currentSection.section) return;

  const nextTab =
    GlobalStore.sections[(highestOpacityElement as HTMLElement).id].tab;

  selectTab(nextTab);
}
</script>

<script lang="ts">
export default {
  mounted() {
    const sections = GlobalStore.sections;
    const container = (this.$el as HTMLElement);
    container.scrollTop = 0;

    container.childNodes.forEach((section) => {
      sections[(section as HTMLElement).id].section = section as HTMLElement;

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
    <div id="home" class="section"></div>
    <div id="about" class="section"></div>
    <div id="projects" class="section"></div>
    <div id="contacts" class="section"></div>
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
}
</style>
