import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/index.vue'

Vue.use(Router)
export default new Router({
//mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'home',
      component: Home,
      meta: {title: '首页'}
    },
		{
		  path: '/tab',
		  name: 'tab',
		  component: () => import('./views/example/tab/index.vue'),
		  meta: {title: '导航栏'}
		},
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('./views/example/swiper/index.vue'),
      meta: {title: '滑动组件'}
    }
  ]
})
