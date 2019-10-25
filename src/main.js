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


// Vue.prototype.$alertMsgBox = function alert(msg = '确认要删除该数据？', title = '提示', settings = {}) {
//   Object.assign(settings, {  //合并对象
//     confirmButtonText: '确定',
//     cancelButtonText: '取消',
//     dangerouslyUseHTMLString: true //允许确认框内容为html格式
//   })
//   return this.$confirm(`<p>${msg}</p>`, title, settings)
// }





new Vue({
  el: '#app',
  render: h => h(App)
})
