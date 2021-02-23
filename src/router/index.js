import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "layout-default" */ '@/components/layouts/LayoutDefault.vue')
}, {
  path: '*',
  component: () => import(/* webpackChunkName: "layout-error" */ '@/components/layouts/LayoutError.vue'),
  children: [{
    path: '',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '@/pages/error/NotFoundPage.vue')
  }]
}]

const router = new Router({
  // mode: 'history',
  base: process.env.BASE_URL || '/',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

router.beforeEach((to, from, next) => {
  document.title = '宇航产品数据中心' + to.meta.title

  return next()
})

router.afterEach((to, from) => {
})

export default router
