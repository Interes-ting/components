import mtPage from './page.vue'; //分页

mtPage.install = function(Vue) {
  Vue.component(mtPage.name, mtPage);
};

export default mtPage;
