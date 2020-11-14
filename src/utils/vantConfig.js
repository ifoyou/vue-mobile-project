import Vue from 'vue';
import { Dialog, Toast } from 'vant';

Vue.use(Toast);
// 注册全局组件
const diaLogOptions = {
  width: '329'
};
Dialog.setDefaultOptions(diaLogOptions);

Vue.prototype.$toast = Toast;
Vue.prototype.$alert = Dialog.alert;
