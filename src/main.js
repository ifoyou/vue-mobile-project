import Vue from 'vue';
import App from './App.vue';
import router from './router/router.config';
import store from './store/index';
import '@/filter/filter.config';
import 'vant/lib/icon/local.css'; // 使用vant ui框架
import '@/utils/vantConfig'; // 公共过滤器
Vue.config.productionTip = false; // 注册vant相关组件配置
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
