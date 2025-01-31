<script lang="ts">
import { GlobalStore } from '../main';


  let mainContainer: HTMLElement | null = null;

  export default {
    setup() {
      function onTabClick(e: MouseEvent) {
        if (!mainContainer) return;
        const el = e.currentTarget as HTMLElement;
        const value: string | undefined = el.dataset.section;

        if (!value) return;

        const sectionEl = GlobalStore.sections[value].section as HTMLElement;

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
        onTabClick,
      }
    },
    mounted() {
      mainContainer = document.getElementById("mainContainer");

      const tabEls = this.$el as HTMLElement;
      tabEls.childNodes.forEach((tab) => {
        const section = (tab as HTMLElement).dataset.section;

        if (section) GlobalStore.sections[section].tab = tab as HTMLElement;
      });

      GlobalStore.currentSection =
        GlobalStore.sections["home"];
    },
  }
</script>

<template>
  <div id="tabsContainer">
    <button class="tabs active" data-section="home" @click="onTabClick">Home</button>
    <button class="tabs" data-section="about" @click="onTabClick">About</button>
    <button class="tabs" data-section="projects" @click="onTabClick">Projects</button>
    <button class="tabs" data-section="contacts" @click="onTabClick">Contacts</button>
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
