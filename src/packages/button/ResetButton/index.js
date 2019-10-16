import ResetButton from './ResetButton.vue'; //重置按钮

ResetButton.install = function(Vue) {
  Vue.component(ResetButton.name, ResetButton);
};

export default ResetButton;