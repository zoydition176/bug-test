import Vue from 'vue'
import Router from 'vue-router'
// 默认输出没有名字 import的时候顺便命名
import index from '../components/index/index'
import login from '../components/login/login'
import test from '../components/testpage/test.vue'
import products from '../components/testpage/productDetail.vue'
import error from '../components/404.vue'
Vue.use(Router)
// 输出router配置
export default new Router({
  routes: [
    // 重定向到login
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'index',
      component: index
      // children: [
      //   {
      //     path:'test',
      //     component:test
      //   }
      // ]
    },
    {
      path: '*',
      name: 'error',
      component: error
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/products/:productID',
      name: 'products',
      component: products
    }
  ],
  mode: 'history' // 去除开头的#号
})