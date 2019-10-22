import mtContainer from './container.vue'; //分页

mtContainer.install = function(Vue) {
  Vue.component(mtContainer.name, mtContainer);
};

export default mtContainer;