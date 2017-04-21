// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-Router'
import App from './App'
import DashboardPage from './pages/DashboardPage'
import Loginpage from './pages/Loginpage'
import store from './store'
import ChatPage from './pages/ChatPage'

  /* import router from './router'
 Vue.config.productionTip = false */

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.component('app', App)

const routes = [
 {path: '/', component: Loginpage, name: 'home'},
 {path: '/dashboard', component: DashboardPage, name: 'dashboard', meta: { requiresAuth: true }},
 {path: '/chat', component: ChatPage, name: 'chat', meta: { requiresAuth: true }}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('authUser'))
    if (authUser && authUser.access_token) {
      next()
    } else {
      next({name: 'home'})
    }
  }
  next()
})

new Vue({
  router, store
}).$mount('#app')
