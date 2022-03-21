import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import i18n from "./services/i18n/i18n";
import VueAxios from 'vue-axios'
import ApiService from './services/api.service'

const axios = ApiService.init()

const app = createApp(App)
  .use(store)
  .use(router)
  .use(i18n)
  .use(VueAxios, axios)

app.provide('axios', app.config.globalProperties.axios)
app.mount('#app')
