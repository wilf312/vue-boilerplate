import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from 'views/home'
import About from 'views/about'
import Detail from 'views/detail'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/home', redirect: { name: 'Home' } },
  { path: '/about', component: About, name: 'About' },
  { path: '/detail/:id', component: Detail, name: 'Detail' },
  { path: '*', redirect: { name: 'Home' } }
]


const router = new VueRouter({
  routes,
  mode: 'history',
  saveScrollPosition: true,
  base: '/'
})

export default router
