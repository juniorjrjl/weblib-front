import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'primevue/resources/themes/nova-light/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Vuelidate from 'vuelidate'
import Card from 'primevue/card'
import InputMask from 'primevue/inputmask'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

Vue.config.productionTip = false


Vue.use(Vuelidate)
Vue.component('Card', Card)
Vue.component('InputMask', InputMask)
Vue.component('Button', Button)
Vue.component('Sidebar', Sidebar)
Vue.component('InputText', InputText)
Vue.component('Message', Message)

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')