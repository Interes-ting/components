import mtTbale from './table.vue'; //表格

mtTbale.install = function(Vue) {
  Vue.component(mtTbale.name, mtTbale);
};

export default mtTbale;