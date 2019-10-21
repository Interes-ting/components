import mtListContent from './listContent.vue'; //列表内容区域

mtListContent.install = function(Vue) {
  Vue.component(mtListContent.name, mtListContent);
};

export default mtListContent;