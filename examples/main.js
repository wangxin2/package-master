import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js'
import ElementUI from 'element-ui'
// import {install} from '../lib'
import {install} from '../src/index'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(install)

// 开发环境配置
if (process.env.NODE_ENV === 'development') {
  // mock 服务
  require('./mock');
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
