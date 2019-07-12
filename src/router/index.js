import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {//登录页面
      path: '/',
      name: 'appLogin',
      component: () => import("@/components/appLogin/appLogin")
    },
    {//抽奖页面
      path: '/appMain',
      name: 'appMain',
      component: () => import("@/components/appMain/appMain")
    },
    {//添加抽奖项目页面
      path: '/appAdditem',
      name: 'appAdditem',
      component: () => import("@/components/appAdditem/appAdditem")
    }
  ]
})
// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log(from.name, to.name)
  if (from.name==null && to.name != "appLogin") {
    next("/")
    return;
  }
  next() // 必须使用 next ,执行效果依赖 next 方法的调用参数   意思是就是上面一系列事件是一个钩子，调用这个是进入下一个钩子，相当于往下执行，一个卡口，不调用就卡在这里了
})
export default router;