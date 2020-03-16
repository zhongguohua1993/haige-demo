import Vue from 'vue'
import Router from 'vue-router'

const home = () => import(/* webpackChunkName: "home" */ 'src/view/home/home')
const views = () => import(/* webpackChunkName: "home" */ 'src/view/views')
const login = () => import(/* webpackChunkName: "home" */ 'src/view/login/login')
const user = () => import(/* webpackChunkName: "home" */ 'src/view/user/user')
const userBaseInfo = () => import(/* webpackChunkName: "home" */ 'src/view/user/base-info')
const pageNotFound = () => import(/* webpackChunkName: "home" */ 'src/view/page-not-found')

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'views',
      component: views,
      children: [
        {
          path: 'home',
          name: 'home',
          alias: '/',
          component: home
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: login
    }, {
      path: '/user',
      name: 'user',
      meta: {
        title: '个人信息'
      },
      component: user,
      children: [
        {
          path: 'baseInfo',
          name: 'userBaseInfo',
          component: userBaseInfo
        }
      ]
    },{
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
