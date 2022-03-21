import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import i18n from "./services/i18n/i18n";

createApp(App).use(store).use(router).use(i18n).mount('#app')
