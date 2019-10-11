import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


import saveButton from './components/Buttons/saveButton/saveButton.vue' 
import backButton from './components/Buttons/backButton/backButton.vue'
import deleteButton from './components/Buttons/deleteButton/deleteButton.vue'
import editButton from './components/Buttons/editButton/editButton.vue'
import defaultButton from './components/Buttons/defaultButton/defaultButton.vue'

Vue.component(saveButton.name, saveButton)
Vue.component(backButton.name, backButton)
Vue.component(deleteButton.name, deleteButton)
Vue.component(editButton.name, editButton)
Vue.component(defaultButton.name, defaultButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
