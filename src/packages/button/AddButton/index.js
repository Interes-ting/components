import AddButton from './AddButton.vue'; //添加按钮

AddButton.install = function(Vue) {
  Vue.component(AddButton.name, AddButton);
};

export default AddButton;