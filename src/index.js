import BackButton from './packages/button/BackButton/index'; //返回按钮
import SaveButton from './packages/button/SaveButton/index'; //保存按钮

const components = [
  BackButton,
  SaveButton
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
}