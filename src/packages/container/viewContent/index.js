import mtViewContent from './viewContent.vue'; //查看页面区域

mtViewContent.install = function(Vue) {
  Vue.component(mtViewContent.name, mtViewContent);
};

export default mtViewContent;