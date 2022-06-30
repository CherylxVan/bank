import Vue from 'vue'
import VueRouter from 'vue-router'
import bank_login from '../views/bank_login.vue'
import bank_mainPage from '../views/bank_mainPage.vue'
import sex_analyse from '../views/sex_analyse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: bank_login
  },
  {
    path:'/mainPage',
    name:'mainPage',
    component: bank_mainPage
  },
  {
    path:'/sex_analyse',
    name:'sex_analyse',
    component: sex_analyse
  }
]

const router = new VueRouter({
  routes
})

export default router
