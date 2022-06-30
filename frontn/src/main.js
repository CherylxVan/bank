import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'echarts'
import './plugins/element.js'
import ECharts from 'vue-echarts'
// 全局注册组件（也可以使用局部注册）
Vue.component('v-chart', ECharts);



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
