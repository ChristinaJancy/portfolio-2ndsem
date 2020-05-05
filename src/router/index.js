import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Climatevideo from '../components/Climatevideo.vue'
import Works from '../views/Works.vue'
import Work from '../components/Work.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
  {
    path: '/climatevideo',
    name: 'Climatevideo',
    component: Climatevideo,
  },
  {
    path: '/work/:title',
    name: 'Work',
    component: Work,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
