import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/scss/style.scss'
import router from './router'

window.$ = window.jQuery = jQuery;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
