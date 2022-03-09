import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import GameConsole from './components/GameConsole.vue';
import Games from './components/Games.vue';
import Start from './components/StartPage.vue';

const routes = [
  { path: '/', component: Start },
  { path: '/console', component: GameConsole },
  //{ path: '/datenschutz', component: Datenschutz },
  //{ path: '/faq', component: FAQ },
  { path: '/games', component: Games },
  //{ path: '/impressum', component: Impressum },
  //{ path: '/shop', component: Shop },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
