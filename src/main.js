// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// views
import Home from './views/Home'
import ShowSets from './views/ShowSets'
import SetView from './views/SetView'

// element
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'


// router
import VueRouter from 'vue-router'

// store
import store from './store'

// pulgin
import autosize from './plugins/autosize'

Vue.use(Element, {locale})
Vue.use(VueRouter)
Vue.use(autosize)


const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Home },
    { path: '/kiwi', redirect: '/' },
    { path: '/Menu', redirect: '/' },
    { path: '/My_Sets', component: ShowSets },
    { path: '/Set/:name', component: SetView }
  ]
})

router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0)
  next()
})

new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
})

