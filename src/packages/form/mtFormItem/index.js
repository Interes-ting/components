import mtFormItem from './mtFormItem.vue'; //表单一行三列

mtFormItem.install = function(Vue) {
  Vue.component(mtFormItem.name, mtFormItem);
};

export default mtFormItem;