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
import { plugin, defaultConfig } from '@formkit/vue';
import './style/formkit-style.css';
import { TroisJSVuePlugin } from 'troisjs';
import 'vue-material-design-icons/styles.css';
import App from './App.vue';
import Datenschutz from './components/Datenschutz.vue';
import FAQ from './components/FAQNew.vue';
import GameConsole from './components/GameConsole.vue';
import Games from './components/Games.vue';
import Impressum from './components/Impressum.vue';
import Shop from './components/Order.vue';
import Start from './components/StartPage.vue';

const routes = [
  { path: '/', component: Start },
  { path: '/console', component: GameConsole },
  { path: '/datenschutz', component: Datenschutz },
  { path: '/faq', component: FAQ },
  { path: '/games', component: Games },
  { path: '/impressum', component: Impressum },
  { path: '/shop', component: Shop },
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
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

createApp(App)
  .use(router)
  .use(plugin, defaultConfig)
  .use(TroisJSVuePlugin)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
