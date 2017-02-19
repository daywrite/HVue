import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import About from 'components/About'
import City from 'components/City'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about', name: 'About', component: About
    },
    {
      path: '/city', name: 'City', component: City
    }
  ]
})

