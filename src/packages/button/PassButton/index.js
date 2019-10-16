import PassButton from './PassButton.vue'; //通过按钮

PassButton.install = function(Vue) {
  Vue.component(PassButton.name, PassButton);
};

export default PassButton;