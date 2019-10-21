import mtSearchForm from './searchForm.vue'; //查询区域

mtSearchForm.install = function(Vue) {
  Vue.component(mtSearchForm.name, mtSearchForm);
};

export default mtSearchForm;