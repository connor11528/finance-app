import UIkitIcons from 'uikit/dist/js/uikit-icons';
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VueAxios from 'vue-axios';
import NotifyPlugin from './plugins/NotifyPlugin';
import { groupDate, transactionDate, prettyCurrency } from './filters';

try {
  window.$ = window.jQuery = $;
} catch (e) {}

// Setup the Base URL for all API requests
let baseURL = `${location.protocol}//${location.hostname}`;

// If there's a port (Browsersync) add it
if (location.port) {
  baseURL = baseURL + ':' + location.port;
}

// Set the Axios base URL
axios.defaults.baseURL = `${baseURL}/api`;

// Components
Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(NotifyPlugin, {
  status: 'success',
  pos: 'top-center',
  timeout: 5000
});
UIkit.use(UIkitIcons);

// Filters
Vue.filter('groupDate', groupDate);
Vue.filter('transactionDate', transactionDate);
