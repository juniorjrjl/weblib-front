import Vue from 'vue'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
import { Fragment } from 'vue-fragment';

Vue.component('Sidebar', Sidebar)
Vue.component('Button', Button)

export default {
    name: 'Header',
    data() {
      return {
        visibility: false
      }
    },
    components: { Fragment }
}