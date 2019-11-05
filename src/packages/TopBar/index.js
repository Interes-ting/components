import mtTopBar from './TopBar.vue'; //表格

mtTopBar.install = function (Vue) {
  Vue.component(mtTopBar.name, mtTopBar);
};

export default mtTopBar;
