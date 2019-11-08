import mtNav from './nav.vue';

mtNav.install = function (Vue) {
  Vue.component(mtNav.name, mtNav);
};

export default mtNav;
