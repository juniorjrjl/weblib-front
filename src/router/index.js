import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home/Home.vue'
import NewUser from '@/pages/NewUser/NewUser.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/NewUser', component: NewUser }
]

export default new VueRouter({
    routes
  })