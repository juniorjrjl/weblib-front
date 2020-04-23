import Vue from 'vue'

import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Home from './pages/Home/Home.vue'
import NewUser from './pages/NewUser/NewUser.vue'
import { Fragment } from 'vue-fragment'
import Vuelidate from 'vuelidate'
import Card from 'primevue/card'
import InputMask from 'primevue/inputmask'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

Vue.use(Vuelidate)
Vue.component('Card', Card)
Vue.component('InputMask', InputMask)
Vue.component('Button', Button)
Vue.component('Sidebar', Sidebar)
Vue.component('InputText', InputText)
Vue.component('Message', Message)

export default {
  data: () => {
    return{}
  },
  name: 'App',
  components: {
    Header,
    Footer,
    Fragment,
    Home,
    NewUser
  }
}