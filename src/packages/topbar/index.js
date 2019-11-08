import mtTopbar from './topbar.vue';

mtTopbar.install = function (Vue) {
  Vue.component(mtTopbar.name, mtTopbar);
};

export default mtTopbar;
