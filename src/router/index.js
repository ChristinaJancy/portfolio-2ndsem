import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'
import Work from '../components/Work.vue'
import ClimateVideo from '../components/ClimateVideo.vue'

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
    path: '/work/:title',
    name: 'Work',
    component: Work,
  },
  {
    path: '/climatevideo/',
    name: 'ClimateVideo',
    component: ClimateVideo,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
