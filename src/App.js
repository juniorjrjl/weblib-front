import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import Home from './pages/Home/Home.vue'
import { Fragment } from 'vue-fragment';

export default {
  data: () => {
    return{}
  },
  name: 'App',
  components: {
    Header,
    Footer,
    Fragment,
    Home
  }
}