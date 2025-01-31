import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'


type SectionType = {
  tab: HTMLElement | null,
  section: HTMLElement | null
}

const sections: Record<string, SectionType> = {
  "home": { tab: null, section: null },
  "about": { tab: null, section: null },
  "projects": { tab: null, section: null },
  "contacts": { tab: null, section: null },
};

export const GlobalStore: Record<any, any> = {}

GlobalStore.sections = sections;

createApp(App).mount('#app')
