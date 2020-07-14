import './bootstrap';
import store from './store';
import Vue from 'vue';
import Dashboard from './components/Dashboard.vue';
let app = new Vue({
  store,
  render: h => h(Dashboard)
}).$mount('#app')
