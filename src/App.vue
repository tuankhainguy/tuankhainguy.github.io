<script setup lang="ts">
import Logo from '/src/assets/TKN.svg?component'
import Tabs from './components/Tabs.vue'
import MainContainer from './components/MainContainer.vue';
</script>

<template>
  <div id="topbar" >
    <Logo class="logo" id="topLogo" />
    <Tabs />
  </div>
  <MainContainer />
</template>

<script lang="ts">
  export default {
    mounted() {
      const logo =
        (this.$el as HTMLElement).parentElement
          ?.firstElementChild
          ?.firstElementChild;
      const logoBg = logo?.firstElementChild;
      logoBg ?
        (logoBg as HTMLElement).style.fill = "var(--catppuccin-base)" :
        null;
    }
  }
</script>

<style scoped>
#topbar {
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em;
  box-sizing: border-box;
  background-color: inherit;
  box-shadow: 0px 16px 12px rgb(from var(--catppuccin-base) r g b);
  z-index: 1;
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
</style>
