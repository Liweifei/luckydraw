// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//axios
import axios from "./tools/axiosTool"
Vue.prototype.$http=axios;

import commonType from './tools/commonType';//公共状态
Vue.prototype.$commonType=commonType;

//token
Vue.prototype.$token=null;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
