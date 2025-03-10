import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import ProjectView from './views/ProjectView.vue'
import { createPinia } from 'pinia'

const routes = [
  { path: '/', component: HomeView },
  { path: '/project/:project', component: ProjectView, props: true },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, /* savedPosition */) {
    if (from.fullPath === '/') { return; }
    if (to.fullPath !== '/') { return; }
    return {
      el: '#portfolio',
      top: 0,
    }
  },
})

const pinia = createPinia();

export const assets: Record<string, { default: string }> =
  import.meta.glob('/src/assets/*', { eager: true });

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
  portfolio: SectionType,
  contacts: SectionType,
}

const sections: SectionsType = {
  home: { tab: null, section: null },
  about: { tab: null, section: null },
  portfolio: { tab: null, section: null },
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


createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
