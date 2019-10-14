import backButton from './Buttons/backButton/backButton.vue'
import defaultButton from './Buttons/defaultButton/defaultButton.vue'
import deleteButton from './Buttons/deleteButton/deleteButton.vue'
import editButton from './Buttons/editButton/editButton.vue'
import saveButton from './Buttons/saveButton/saveButton.vue'

export default {
    install: (Vue) => {
      Vue.component('backButton', backButton)
      Vue.component('defaultButton', defaultButton)
      Vue.component('deleteButton', deleteButton)
      Vue.component('editButton', editButton)
      Vue.component('saveButton', saveButton)
    }
  }