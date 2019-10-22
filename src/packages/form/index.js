import mtForm from './mtForm.vue'; //input表单容器

mtForm.install = function(Vue) {
  Vue.component(mtForm.name, mtForm);
};

export default mtForm;