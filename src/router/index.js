import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('views/home/home.vue')
  },
  {
    path: '/category',
    name: 'category',
    meta: {
      title: '分类'
    },
    component: () => import('../views/category/category.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: () => import('../views/cart/cart.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '我的'
    },
    component: () => import('../views/profile/profile.vue')
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    meta: {
      title: '详情'
    },
    component: () => import('../views/detail/detail.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})
export default router
