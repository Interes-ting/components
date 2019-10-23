import SeleteButton from './SeleteButton.vue'; //查询按钮

SeleteButton.install = function(Vue) {
  Vue.component(SeleteButton.name, SeleteButton);
};

export default SeleteButton;