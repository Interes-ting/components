import Vue from 'vue'
import App from './App.vue'
import MoorUI from './index.js'
Vue.use(MoorUI)

// 引入element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// import {add} from './packages/common/common.js'
// Vue.prototype注册的是一个全局的变量原型，而不是一个全局变量
// 注册全局变量原型common
// Vue.prototype.add = add

new Vue({
  el: '#app',
  render: h => h(App)
})
