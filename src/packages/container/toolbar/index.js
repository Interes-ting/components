import mtContainer from './toolbar.vue'; //工具栏

mtContainer.install = function(Vue) {
  Vue.component(mtContainer.name, mtContainer);
};

export default mtContainer;