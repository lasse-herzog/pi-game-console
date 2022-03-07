import { createApp } from 'vue';
import App from './App.vue';

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
  faFedex
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'vue-material-design-icons/styles.css';

library.add(faInstagram, faFacebook, faTwitter, faYoutube, faBtc, faPaypal, faApplePay, faAmazonPay, faCcVisa, faCcMastercard, faEthereum, faDhl, faUps, faFedex);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
