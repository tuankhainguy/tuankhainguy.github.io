<script setup lang="ts">
import { onMounted } from 'vue';
import Section from './Section.vue';
import { GlobalStore } from '../../main';
import Deck from '../Deck.vue';


const keys = Object.keys(GlobalStore.sections as object).splice(1);

const onTabClick = (e: Event) => {
  e.preventDefault();

  const el = e.currentTarget as HTMLElement;
  const value: string | undefined = el.dataset.section;

  if (!value || !GlobalStore.sections) return;

  GlobalStore.sections[value].tab?.click();
}

onMounted(() => {
});
</script>


<template>
  <Section section-title="SOFTWARE ENGINEER">
    <h4>Frontend Web Developer</h4>
    <h4>Knows a bit about Backend and Full-stack</h4>
    <div class="buttons">
      <button
        type="button"
        v-for="key in keys"
        class="tabs"
        :data-section="key"
        @click="onTabClick"
      >
        {{ ((key === "contacts") ? key.slice(0, key.length - 1) + " me" : key) }}
      </button>
    </div>
    <template v-slot:secondary>
      <Deck />
    </template>
  </Section>
</template>


<style scoped>
.section {
  height: 800px;
  align-items: center;
  font-size: max(1.2vw, 1.2rem);
  border: none;
  border-radius: 0;
  background: none;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}


.section :deep(.primary),
.section :deep(.secondary) {
  justify-content: center;
}
/**/
/* .section :deep(.secondary) { */
/*   border-radius: 12px; */
/*   box-shadow: 0 0 4px 2px rgb(from var(--accent) r g b / 0.4); */
/*   backdrop-filter: blur(5px); */
/*   -webkit-backdrop-filter: blur(5px); */
/*   border: 1px solid rgb(from var(--accent) r g b / 0.5); */
/* } */


h2 {
  width: 100%;
  margin-top: 5rem;
  font-size: min(max(2vw, 1.5rem), 2.5rem);
}


h3 {
  padding: 4px;
}


.buttons {
  margin: 1.5rem;
  margin-inline: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
  /* flex-wrap: wrap; */
}


.tabs {
  background: none;
  color: var(--accent-compliment);
  border-radius: 8px;
  padding: 4px;
  padding-inline: 8px;
  position: relative;
  overflow: hidden;
  background-color: var(--highlight5);
  box-shadow:
    0 0 4px 2px rgb(from var(--highlight5) r g b /  0.5);
  transition: box-shadow .2s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}


.tabs:hover {
  box-shadow:
    0 0 4px 2px rgb(from var(--highlight5) r g b / 0.8),
    inset 0 0 5px 12px rgb(from var(--highlight4) r g b / 0.4);
}


@media (pointer: coarse) {
  .tabs:hover {
    box-shadow:
      0 0 4px 2px rgb(from var(--highlight5) r g b /  0.5);
  }
}


@media only screen and (max-width: 768px) {
  .section :deep(.primary) {
    justify-content: end;
  }

  .section :deep(.secondary) {
    justify-content: start;
  }

  .buttons {
    gap: 8px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-flow: row;
    height: max-content;
  }

  .tabs {
    height: 100%;
  }
}
/**/
/**/
/* .tabs:before { */
/*   position: absolute; */
/*   top: 0; */
/*   left: 0; */
/*   width: 100%; */
/*   height: 100%; */
/*   z-index: -1; */
/*   content: ''; */
/*   background-color: var(--catppuccin-peach); */
/* } */
/**/
/**/
/* .tabs:after { */
/*   position: absolute; */
/*   top: 0; */
/*   left: 0; */
/*   width: 100%; */
/*   height: 0; */
/*   z-index: -1; */
/*   content: ''; */
/*   background-color: rgb(from var(--catppuccin-maroon) r g b / 0.8); */
/*   transition: height .2s ease-in-out; */
/* } */
/**/
/**/
/**/
/* .tabs:hover:after { */
/*   height: 100%; */
/* } */


/* :deep selector to affect the Section style */
/* .section :deep(.secondary) { */
/*   width: 66%; */
/* } */
</style>
