import Vue from 'vue'
import Router from 'vue-router'

export default new Router({
    routes: [
      {
        path: '',
        name: 'home',
        redirect: 'permission'
      },
      {
        path: '/permission',
        name: 'permission',
        component: () => import('../views/permission')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import('../views/role')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('../views/user')
      },
      {
        path: '/application',
        name: 'application',
        component: () => import('../views/app')
      },
      {
        path: '/dictionary',
        name: 'dictionary',
        component: () => import('../views/dictionary')
      },
      {
        path: '/orgnization',
        name: 'orgnization',
        component: () => import('../views/orgnization')
      },
      {
        path: '/area',
        name: 'area',
        component: () => import('../views/area')
      },
      {
        path: '/test',
        name: 'test',
        component: () => import('../views/test111')
      },
    ]
  })
  