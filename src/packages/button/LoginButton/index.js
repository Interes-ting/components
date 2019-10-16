import LoginButton from './LoginButton.vue'; //登录按钮

LoginButton.install = function(Vue) {
  Vue.component(LoginButton.name, LoginButton);
};

export default LoginButton;