import Vue from 'vue'
import App from './App'


import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'




import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import router from './router/index'

// for debugging
Vue.config.debug = true

sync(store, router)



console.log(VueMaterial)

Vue.use(VueMaterial.MdCore) //Required to boot vue material
// Vue.use(VueMaterial.mdButton)
// Vue.use(VueMaterial.mdIcon)
// Vue.use(VueMaterial.mdSidenav)
Vue.use(VueMaterial.MdToolbar)
Vue.use(VueMaterial.MdCard)



const app = new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})