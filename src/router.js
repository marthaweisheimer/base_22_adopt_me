import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/HomePage.vue'
import Adopt from './views/AdoptNowPage.vue'
import Volunteer from './views/VolunteerPage.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: 'localhost:8080',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adopt',
      name: 'adopt',
      component: Adopt
    },
    {
      path: '/volunteer',
      name: 'volunteer',
      component: Volunteer
    }
  ]
})

export default router;