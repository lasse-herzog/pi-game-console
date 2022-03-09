import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faFacebook,
  faBtc,
  faPaypal,
  faApplePay,
  faAmazonPay,
  faCcVisa,
  faCcMastercard,
  faEthereum,
  faDhl,
  faUps,
  faFedex,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'vue-material-design-icons/styles.css';
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

library.add(
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
  faBtc,
  faPaypal,
  faApplePay,
  faAmazonPay,
  faCcVisa,
  faCcMastercard,
  faEthereum,
  faDhl,
  faUps,
  faFedex
);

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
