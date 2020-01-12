import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/js/materialize.min'
import VueCarousel from '@chenfengyuan/vue-carousel';




Vue.config.productionTip = false
Vue.component(VueCarousel.name, VueCarousel);




new Vue({
  router, 
  render: h => h(App),
}).$mount('#app')
