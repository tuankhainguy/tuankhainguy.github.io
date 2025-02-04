<script lang="ts">
import { GlobalStore } from '../main';


  let mainContainer: HTMLElement | null = null;

  export default {
    setup() {
      const keys = Object.keys(GlobalStore.sections as object);

      function onTabClick(e: MouseEvent) {
        if (!mainContainer) return;
        const el = e.currentTarget as HTMLElement;
        const value: string | undefined = el.dataset.section;

        if (!value) return;

        const sectionEl = GlobalStore.sections![value].section as HTMLElement;

        // no need to subtract sectionEl.clienTop (border width)
        // because we need to add it again later for the border from
        // the section above to not show
        const scrollTop = sectionEl.offsetTop -
          mainContainer.offsetTop -
          mainContainer.clientTop -
          parseInt(window.getComputedStyle(mainContainer).gap);

        mainContainer.scrollTo({
          top: scrollTop,
          behavior: "smooth",
        });
      }

      return {
        keys,
        onTabClick,
      }
    },
    mounted() {
      mainContainer = document.getElementById("mainContainer");

      const tabEls = this.$el as HTMLElement;
      Array.from(tabEls.childNodes).forEach((tab) => {
        const dataset = (tab as HTMLElement).dataset;
        if (!dataset) {
          tab.remove();
          return;
        }

        const section = dataset.section;

        if (section) GlobalStore.sections![section].tab = tab as HTMLElement;
      });

      GlobalStore.currentSection =
        GlobalStore.sections!["home"];
    },
  }
</script>

<template>
  <div id="tabsContainer">
    <button
      v-for="key in keys"
      :class="{tabs: true, active: key === 'home'}"
      :data-section="key"
      @click="onTabClick"
    >
      {{ key.charAt(0).toUpperCase() + key.slice(1) }}
    </button>
  </div>
</template>

<style scoped>
#tabsContainer {
  display: flex;
  margin: 4px;
  gap: 12px;
  font-size: 1rem;
  font-weight: bold;
}

.tabs {
  border-radius: 0;
  transition: border .1s ease-in-out;
}

.tabs.active {
  color: var(--catppuccin-lavender);
  border-bottom: 0.1rem solid var(--catppuccin-lavender);
}
</style>
