import RefuseButton from './RefuseButton.vue'; //拒绝按钮

RefuseButton.install = function(Vue) {
  Vue.component(RefuseButton.name, RefuseButton);
};

export default RefuseButton;