import Vue from 'vue'
import App from './App.vue'

import MoorUI from './index.js'
Vue.use(MoorUI)

// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
})
