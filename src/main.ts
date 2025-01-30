import { createApp } from 'vue'
import './styles/style.css'
import App from './App.vue'

createApp(App).mount('#app')

const logo = document.getElementById("main");

const logoBg = logo?.firstElementChild;
logoBg ?
  (logoBg as HTMLElement).style.fill = "var(--catppuccin-base)" :
  null;
