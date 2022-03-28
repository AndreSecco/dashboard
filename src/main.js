import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

axios.defaults.baseURL = 'http://localhost:8000/api'; 


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
