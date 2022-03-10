import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import './style/formkit-style.css'
import { TroisJSVuePlugin } from 'troisjs';

createApp(App).use(plugin, defaultConfig).use(TroisJSVuePlugin).mount('#app')
