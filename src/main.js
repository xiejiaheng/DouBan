import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


//导入mint-ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.use(Mint);

import '../config/index.js'

//
import VueResource from 'vue-resource'
Vue.use(VueResource)
//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from './router/index.js'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:c => c(App),
  router
})
