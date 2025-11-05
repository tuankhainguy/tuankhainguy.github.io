import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProjectView from './views/ProjectView.vue'
import { createPinia } from 'pinia'
// import { useProjectsStore } from './stores/projects'

const routes = [
  { path: '/', component: HomeView },
  { path: '/project/:project', component: ProjectView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, /* savedPosition */) {
    if (from.fullPath === '/') {
      return {
        top: 0,
      }
    }
    if (to.fullPath !== '/') { return; }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          el: '#portfolio',
          top: 0,
        })
      }, 500);
    });
  },
})

const pinia = createPinia();

export type SectionType = {
  tab: HTMLElement | null,
  section: HTMLElement | null
}

// only need to add the [key: string] to tell Typescript the
// the index type the keys use
export type SectionsType = {
  [key: string]: SectionType,
  home: SectionType,
  about: SectionType,
  // portfolio: SectionType,
  contacts: SectionType,
}

const sections: SectionsType = {
  home: { tab: null, section: null },
  about: { tab: null, section: null },
  // portfolio: { tab: null, section: null },
  contacts: { tab: null, section: null },
};

interface GlobalStoreType {
  sections: typeof sections | null,
  currentSection: SectionType | null,
}

export const GlobalStore: GlobalStoreType = {
  sections: sections,
  currentSection: null,
}

export const assets: Record<string, { default: string }> =
  import.meta.glob('/src/assets/*', { eager: true });

// export const projects: Record<string, { imgSrc?: string }> = {
//   "algorithms-in-action/algorithms-in-action.github.io": { imgSrc: "/src/assets/algos-in-action.png" },
//   "WEHI-RCPStudentInternship/pdf-coder": { imgSrc: "/src/assets/pdf-coder.png" },
// };

// we may need to force this to finish first then mount app later
// or maybe not TEST LATER
// TESTED - doesn't seem to have a problem - probably as getProject is async
// const setup = async () => {
//   const store = useProjectsStore();
//   for (let [key, value] of Object.entries(projects)) {
//     const project = await store.getProject(key);
//     if (project) project.imgSrc = value.imgSrc;
//   }
// }

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')

// setup();
