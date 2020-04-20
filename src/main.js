import Vue from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/nova-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')