import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../views/MyAll'
import Rate from '../views/MyRate'
import Sell from '../views/MySell'
import Style from '../views/MyStyle'

Vue.use(VueRouter)

const routes = [
  {
    path: '/all',
    name: 'all',
    component: All
  },{
    path:'/rate',
    name:'rate',
    component:Rate
  },{
    path:'/sell',
    name:'sell',
    component:Sell
  },{
    path:'/style',
    name:'style',
    component:Style
  }
  ,{
    path: '*',
    redirect:"/all"
  },
 
]

const router = new VueRouter({
  routes
})

export default router
