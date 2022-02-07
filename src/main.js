import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

require('intersection-observer')

Vue.config.productionTip = false

window.transition = 'appear'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
