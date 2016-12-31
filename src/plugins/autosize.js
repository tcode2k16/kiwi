let autosize = require('autosize')

exports.install = function(Vue) {
  Vue.directive('autosize', {
    bind(el, binding, vnode, oldVnode) {
      Vue.nextTick(function() {
        autosize(el)
      })
    },

    update(el, binding, vnode, oldVnode) {
      Vue.nextTick(function() {
        autosize.update(el)
      })
    },

    unbind(el, binding, vnode, oldVnode) {
      autosize.destroy(el)
    }
  })
}