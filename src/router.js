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
      meta: {title: '开关'}
    },
		{
		  path: '/dialog',
		  name: 'dialog',
		  component: () => import('./views/example/dialog/index.vue'),
		  meta: {title: '内容弹窗'}
		},
		{
		  path: '/toast',
		  name: 'toast',
		  component: () => import('./views/example/toast/index.vue'),
		  meta: {title: '弱提示'}
		},
		{
		  path: '/loadmore',
		  name: 'loadmore',
		  component: () => import('./views/example/loadmore/index.vue'),
		  meta: {title: '上下拉加载'}
		}
  ]
})
