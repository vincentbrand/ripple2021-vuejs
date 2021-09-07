import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// cookie
import cookie from 'js-cookie'
Vue.prototype.$cookie = cookie

// set request
import ApiServices from './services/api.services';
import TokenServices from './services/token.services';
ApiServices.init('http://ripple.local/api/v1')
if (TokenServices.getToken) {
  ApiServices.setHeader()
}


// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// i18n + element-ui 语言包
import Vue18n from 'vue-i18n'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(Vue18n);
const i18n = new Vue18n({
  locale: 'zh',
  messages: {
    'zh': {...zhLocale,...require('./i18n/zh')},
    'en': {...enLocale,...require('./i18n/en')}
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount('#app')
