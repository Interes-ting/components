import ExportButton from './ExportButton.vue'; //查询按钮

ExportButton.install = function(Vue) {
  Vue.component(ExportButton.name, ExportButton);
};

export default ExportButton;