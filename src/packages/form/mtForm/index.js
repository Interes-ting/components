
import mtForm from './mtForm.vue'; //表单一行三列

mtForm.install = function(Vue) {
  Vue.component(mtForm.name, mtForm);
};

export default mtForm;