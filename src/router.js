import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'choosePayment',
          component: () => import(/* webpackChunkName: "about" */ './views/choosePayment.vue')
        },
        {
          path: '/credit',
          name: 'credit',
          component: () => import(/* webpackChunkName: "about" */ './views/credit.vue')
        },
        {
          path: '/unionPay',
          name: 'unionPay',
          component: () => import(/* webpackChunkName: "about" */ './views/credit.vue')
        },
        {
          path: '/cvStore',
          name: 'cvStore',
          component: () => import(/* webpackChunkName: "about" */ './views/cvStore.vue')
        },
        {
          path: '/web',
          name: 'web',
          component: () => import(/* webpackChunkName: "about" */ './views/web.vue')
        },
        {
          path: '/ATM',
          name: 'ATM',
          component: () => import(/* webpackChunkName: "about" */ './views/web.vue')
        },
        {
          path: '/finish',
          name: 'finish',
          component: () => import(/* webpackChunkName: "about" */ './views/finish.vue')
        },
        {
          path: '/cvStoreFinish',
          name: 'cvStoreFinish',
          component: () => import(/* webpackChunkName: "about" */ './views/cvStoreFinish.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
