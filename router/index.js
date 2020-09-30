import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Upload from '../views/Upload.vue'
import MinerSetting from '../views/MinerSetting.vue'
import DealMessage from '../views/DealMessage.vue'
import Storages from '../views/Storages.vue'
import Mywallet from '../views/Mywallet.vue'
import Assets from '../components/Assets.vue'
import Activity from '../components/Activity.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'MyLife',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyLife.vue')
  },
   {
    path: '/Upload',
    name: 'Upload',
    component: Upload
  },
   {
    path: '/MinerSetting',
    name: 'MinerSetting',
    component: MinerSetting
  },
   {
    path: '/DealMessage',
    name: 'DealMessage',
    component: DealMessage
  },
   {
    path: '/Storages',
    name: 'Storages',
    component: Storages
  },
  //  {
  //   path: '/Storages',
  //   name: 'Storages',
  //   component: Storages
  // },
   {
    path: '/Mywallet',
    name: 'Mywallet',
    component: Mywallet,
    children:[
      {path:"/",redirect:'/Assets'},
      {
        path: '/Assets',
        name: 'Assets',
        component: Assets
      },
      {
        path: '/Activity',
        name: 'Activity',
        component: Activity
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
