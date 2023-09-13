// src/router.js
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from './components/HomePage.vue'
import ProductDetails from './components/ProductDetails.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomePage },
  { path: '/product/:id', component: ProductDetails, props: true },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
