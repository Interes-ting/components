import BackButton from './packages/button/BackButton/index'; //返回按钮
import SaveButton from './packages/button/SaveButton/index'; //保存按钮
import SelectButton from './packages/button/SelectButton/index' //查询按钮
import ExportButton from './packages/button/ExportButton/index' //导出按钮
import AddButton from './packages/button/AddButton/index' //添加按钮
import DeletButton from './packages/button/DeleteButton/index' //删除按钮
import PassButton from './packages/button/PassButton/index' //通过按钮
import RefuseButton from './packages/button/RefuseButton/index' //拒绝按钮
import LoginButton from './packages/button/LoginButton/index' //登录按钮
import ResetButton from './packages/button/ResetButton/index' //登录按钮
import LoginoutButton from './packages/button/LogoutButton/index' //登录按钮

import mtTbale from './packages/table/index' //表格
import mtPage from './packages/page/index' //分页

import mtContainer from './packages/container/toolbar/index' //工具栏区域容器
import mtListContent from './packages/container/listContent' //列表内容区域容器
import mtSearchForm from './packages/container/searchForm/index' //搜索条件区域容器
import mtEditContent from './packages/container/editContent/index' //编辑页面区域容器
import mtViewContent from './packages/container/viewContent/index' //查看页面区域容器


const components = [
  BackButton,
  SaveButton,
  SelectButton,
  ExportButton,
  AddButton,
  DeletButton,
  PassButton,
  RefuseButton,
  LoginButton,
  ResetButton,
  LoginoutButton,
  mtTbale,
  mtPage,
  mtContainer,
  mtListContent,
  mtSearchForm,
  mtEditContent,
  mtViewContent,
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BackButton,
  SaveButton,
  SelectButton,
  ExportButton,
  AddButton,
  DeletButton,
  PassButton,
  RefuseButton,
  LoginButton,
  ResetButton,
  LoginoutButton,
  mtTbale,
  mtPage,
  mtContainer,
  mtListContent,
  mtSearchForm,
  mtEditContent,
  mtViewContent
}