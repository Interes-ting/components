import mtTable from './table.vue'; //表格

mtTable.install = function (Vue) {
  Vue.component(mtTable.name, mtTable);
};

export default mtTable;
