// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios  from 'vue-axios'

import App from './App'
import router from './router'
import Search from './components/Search'

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.component('search', Search)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
