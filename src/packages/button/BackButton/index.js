
import BackButton from './backButton.vue'; //返回按钮

BackButton.install = function(Vue) {
  Vue.component(BackButton.name, BackButton);
};

export default BackButton;
