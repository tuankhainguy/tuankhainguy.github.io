import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'


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


createApp(App).mount('#app')
