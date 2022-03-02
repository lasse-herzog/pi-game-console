import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Start from './components/StartPage.vue';
import Test from './components/Test.vue';

const routes = [
  { path: '/', component: Start },
  { path: '/test', component: Test },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
