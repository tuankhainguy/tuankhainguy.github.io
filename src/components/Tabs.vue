<script lang="ts">
import { GlobalStore } from '../main';

let root: HTMLElement | null = null;
let mainContainer: HTMLElement | null = null;

export default {
  setup() {
    const keys = Object.keys(GlobalStore.sections as object);

    function onTabClick(e: MouseEvent) {
      e.preventDefault();

      if (!root || !mainContainer) return;
      const el = e.currentTarget as HTMLElement;
      const value: string | undefined = el.dataset.section;

      if (!value) return;

      const sectionEl = GlobalStore.sections![value].section as HTMLElement;

      // no need to subtract sectionEl.clienTop (border width)
      // because we need to add it again later for the border from
      // the section above to not show
      // if the main container have padding top, only subtract the padding top
      // value for the first section
      const scrollTop = sectionEl.offsetTop;

      root.scrollTo({
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
    root = document.firstElementChild as HTMLElement;
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
  },
}
</script>

<template>
  <div id="tabsContainer">
    <button
      type="button"
      v-for="(value, key) in keys"
      class="tabs"
      :class="`delay-${key + 1}`"
      :data-section="value"
      @click="onTabClick"
    >
      {{ value.charAt(0).toUpperCase() + value.slice(1) }}
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
  justify-content: space-between;
}


.tabs {
  display: flex;
  background-color: transparent;
  border-radius: 0;
  transition: border .1s ease-in-out;
  padding: 4px;
}


.tabs.active {
  color: var(--accent);
  border-bottom: 0.1rem solid var(--accent);
  background:
    linear-gradient(to bottom, var(--highlight3), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}


@media only screen and (max-width: 768px) {
  #tabsContainer#tabsContainer {
    display: flex;
    margin: 0;
    position: fixed;
    inset-inline: 0;
    top: var(--topbar-height);
    height: 0;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: end;
    background: var(--base);
    /* box-shadow: 0px 0px 8px 8px rgb(from var(--base) r g b); */
    /* box-shadow: 0 4px 30px rgb(from var(--accent-compliment) r g b /  0.1); */
    /* backdrop-filter: blur(5px); */
    /* -webkit-backdrop-filter: blur(5px); */
    padding: 0 0.75rem;
    z-index: 5;

    /* what the engine will use when closing the container */
    /* only happens when dest state has new transition */
    transition:
      padding .3s ease-in-out .2s,
      height .3s ease-in-out .2s;
    overflow: hidden;
  }


  .delay-1 {
    --delay-in: 0.2s;
    --delay-out: 0.2s;
  }
  .delay-2 {
    --delay-in: 0.25s;
    --delay-out: 0.15s;
  }
  .delay-3 {
    --delay-in: 0.3s;
    --delay-out: 0.05s;
  }
  .delay-4 {
    --delay-in: 0.35s;
    --delay-out: 0s;
  }
  [class*='delay-'] {
    opacity: 0;
    transform: translateX(-20px);
    transition: transform 0.3s linear, opacity 0.3s linear;
    transition-delay: var(--delay-out);
  }

  .tabs {
    justify-content: end;
    border-radius: 8px;
    padding: 4px 8px;
    position: relative;
    overflow: hidden;
  }

  .tabs:before {
    z-index: -1;
    content: '';
    position: absolute;
    inset: 100%;
    transition: inset .15s ease-in-out;
    background:
      linear-gradient(to bottom, var(--highlight3), var(--accent));
  }

  .tabs.active {
    border: none;
    color: var(--base);
    background: none;
    -webkit-background-clip: unset;
    background-clip: unset;
    -webkit-text-fill-color: unset;
  }

  .tabs.active:before {
    inset: 0;
  }
}
</style>
