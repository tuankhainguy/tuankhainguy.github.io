<script setup lang="ts">
import Logo from '/src/assets/TKN.svg?component'
import Tabs from './Tabs.vue'
import { onMounted, useTemplateRef } from 'vue';

const topbarRef = useTemplateRef("topbar");

onMounted(() => {
  const topbar = topbarRef.value;
  const logo = topbar?.firstElementChild;
  const logoBg = logo?.firstElementChild;
  logoBg ?
    (logoBg as HTMLElement).style.fill = "var(--catppuccin-base)" :
    null;
});
</script>


<template>
  <div id="topbar" ref="topbar">
    <Logo class="logo" id="topLogo" />
    <input type="checkbox" id="checkMenu" />
    <label id="menu" for="checkMenu">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </label>
    <Tabs />
  </div>
</template>


<style scoped>
#checkMenu {
  display: none;
}


.size {
  width: 1.2em;
  height: 1.2em;
  padding: 0;
}


#menu {
  display: none;
  width: max-content;
  justify-content: center;
  align-items: center;
}


#topbar {
  height: var(--topbar-height);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  background-color: inherit;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

#topbar > * {
  z-index: 10;
}

.logo {
  height: 2em;
  will-change: filter;
  transition: filter 300ms;
  border-radius: .5em;
}
.logo:hover {
  filter: drop-shadow(0 0 .2em var(--accent));
}


@media only screen and (max-width: 768px) {
  #menu {
    display: flex;
    z-index: 5;
  }

  /* to act as a menu disabler when click other places of page */
  #menu:before {
    display: none;
    position: fixed;
    inset: 0;
    opacity: 0;
    content: '';
  }

  #checkMenu:checked ~ #tabsContainer {
    height: 12rem;
    /* border-bottom: 1px solid rgb(from var(--accent) r g b / 0.75); */
    padding: 0.75rem;

    /* what the engine will use when opening the container */
    transition:
      padding .3s ease-in-out,
      height .3s ease-in-out;
  }

  #checkMenu:checked ~ #menu:before {
    display: block;
  }


  #checkMenu:checked ~ #tabsContainer :deep([class*='delay-']) {
    opacity: 1;
    transform: translateX(0);
    transition-delay: var(--delay-in);
  }
}
</style>
