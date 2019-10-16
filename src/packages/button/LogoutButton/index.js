import LogoutButton from './LogoutButton.vue'; //查询按钮

LogoutButton.install = function(Vue) {
  Vue.component(LogoutButton.name, LogoutButton);
};

export default LogoutButton;