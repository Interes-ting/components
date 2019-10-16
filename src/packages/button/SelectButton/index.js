import SelectButton from './SelectButton.vue'; //查询按钮

SelectButton.install = function(Vue) {
  Vue.component(SelectButton.name, SelectButton);
};

export default SelectButton;