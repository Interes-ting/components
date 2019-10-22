import mtViewConetnt from './viewContent.vue'; //分页

mtViewConetnt.install = function(Vue) {
  Vue.component(mtViewConetnt.name, mtViewConetnt);
};

export default mtViewConetnt;