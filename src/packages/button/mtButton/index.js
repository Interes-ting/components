import mtButton from './mtButton.vue'; //添加按钮

mtButton.install = function(Vue) {
  Vue.component(mtButton.name, mtButton);
};

export default mtButton;