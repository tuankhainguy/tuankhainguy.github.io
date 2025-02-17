<script setup lang="ts">
import { onMounted } from 'vue';
import Section from './Section.vue';
import { GlobalStore } from '../../main';


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
    <template v-slot:primary>
      <h3>Frontend Web Developer</h3>
      <h3>Knows a bit about Full-stack</h3>
      <h3>Computer Science Student</h3>
      <div class="buttons">
        <button
          v-for="key in keys"
          class="tabs"
          :data-section="key"
          @click="onTabClick"
        >
          {{ ((key === "contacts") ? key.slice(0, key.length - 1) + " me" : key) }}
        </button>
      </div>
    </template>
    <template v-slot:secondary>
      <div class="typewriterContainer">
        <div class="typewriter">
          <div class="typewriterText"></div>
        </div>
      </div>
    </template>
  </Section>
</template>


<style scoped>
.section {
  --h1-font-size: min(max(4vw, 3rem), 5rem);
  align-items: center;
  padding-top: 6rem;
  font-size: max(1.2vw, 1.2rem);
  border: none;
  border-radius: 0;
  background: none;
  box-shadow: none;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}


h2 {
  width: 100%;
  margin-top: 5rem;
  font-size: min(max(2vw, 1.5rem), 2.5rem);
}


h3 {
  padding: 4px;
}


.typewriterContainer {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 12px;
	margin-top: 24px;
	margin-bottom: 24px;
}


.typewriter {
  display: flex;
  justify-content: start;
  align-items: center;
  width: max-content;
  max-width: 100%;
}

.typewriter:before {
  font-size: max(1vw, 1rem);
  color: var(--catppuccin-flamingo);
  content: '$';
  margin-right: 8px;
}

.typewriter:after {
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background-color: var(--catppuccin-mantle);
  z-index: -1;
}

.typewriterText {
  font-size: max(1vw, 1rem);
  width: 0;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid var(--catppuccin-maroon); /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  animation:
    typing 25s steps(20, end) infinite,
    blink-caret .75s step-end infinite;
}

.typewriterText:after {
  content: '';
  animation:
    /* the steps are for timing with the typing */
    text 25s steps(6, end) infinite;
}

/* The typing effect */
@keyframes typing {
  0%,
  2% {
    width: 0;
  }

  6%,
  14% {
    width: 100%;
  }

  18%,
  22% {
    width: 0;
  }

  26%,
  34% {
    width: 100%
  }

  38%,
  42% {
    width: 0;
  }

  46%,
  54% {
    width: 100%
  }

  58%,
  62% {
    width: 0;
  }

  66%,
  74% {
    width: 100%
  }

  78%,
  82% {
    width: 0;
  }

  86%,
  94% {
    width: 100%
  }

  98%,
  100% {
    width: 0;
  }
}

/* I DO NOT understand why it has to be offsetted like that */
/* propably something with the steps */
@keyframes text {
  0%,
  10% {
    content: 'print("Hello world!")';
  }
  30% {
    content: 'printf("Hello world!");';
  }
  50% {
    content: 'console.log("Hello world!")';
  }
  70% {
    content: 'System.out.println("Hello world!")';
  }
  90%,
  100% {
    content: 'fmt.Println("Hello world!")';
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: var(--catppuccin-maroon) }
}


.buttons {
  margin: 1.5rem;
  margin-inline: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 24px;
}


.tabs {
  background: none;
  color: var(--catppuccin-mantle);
  border-radius: 8px;
  padding: 4px;
  padding-inline: 8px;
  position: relative;
  overflow: hidden;
  background-color: var(--catppuccin-peach);
  box-shadow:
    0 0 4px 2px rgb(from var(--catppuccin-peach) r g b /  0.5);
  transition: box-shadow .2s ease-in-out;
}


.tabs:hover {
  box-shadow:
    0 0 4px 2px rgb(from var(--catppuccin-peach) r g b / 0.8),
    inset 0 0 5px 3px rgb(from var(--catppuccin-yellow) r g b / 0.8);
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
