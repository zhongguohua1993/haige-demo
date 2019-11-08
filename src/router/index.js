import Vue from 'vue'
import Router from 'vue-router'

const home = () => import(/* webpackChunkName: "home" */ 'src/view/home/home')
const pageNotFound = () => import(/* webpackChunkName: "home" */ 'src/view/page-not-found')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/404',
      name: '404',
      meta: {
        title: '页面不见了'
      },
      component: pageNotFound
    }
  ]
})

export default router

router.beforeEach((to, from, next) => {
  //如果未匹配到路由
  if (to.matched.length === 0) {
    //跳转到404页面
    next({name: '404'})
  } else {
    if (to.meta.title) {//如果设置标题，拦截后设置标题
      document.title = to.meta.title
    } else {
      document.title = '摸鱼研究所'
    }
    next()                                                                            //如果匹配到正确跳转
  }
})
