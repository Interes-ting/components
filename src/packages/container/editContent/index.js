import mtEditContent from './editContent.vue'; //编辑区域

mtEditContent.install = function(Vue) {
  Vue.component(mtEditContent.name, mtEditContent);
};

export default mtEditContent;