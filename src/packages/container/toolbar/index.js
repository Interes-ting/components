import mtToolbar from './toolbar.vue'; //工具栏

mtToolbar.install = function(Vue) {
  Vue.component(mtToolbar.name, mtToolbar);
};

export default mtToolbar;