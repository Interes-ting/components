import mtListContent from './listContent.vue'; 

mtListContent.install = function(Vue) {
  Vue.component(mtListContent.name, mtListContent);
};

export default mtListContent;