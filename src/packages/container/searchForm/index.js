import mtSearchForm from './searchForm.vue'; //搜索内容区域

mtSearchForm.install = function(Vue) {
  Vue.component(mtSearchForm.name, mtSearchForm);
};

export default mtSearchForm;