// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'

/* eslint-disable no-new */

Vue.use(Element, {locale})


new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
