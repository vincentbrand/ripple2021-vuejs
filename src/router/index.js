import Vue from 'vue'
import VueRouter from 'vue-router'
import {sidebarRouter} from './base'
const rots = sidebarRouter()
Vue.use(VueRouter)
const rs = [
  {
    path: '/login',
    component: resolve => require(['@/views/Auth/login'], resolve),
    name: 'Login'
  },
  {
    path: '/forgot',
    component: resolve => require(['@/views/Auth/forgot'], resolve),
    name: 'forgot'
  },
  // emulator
  {
    path: '/emulator',
    component: resolve => require(['@/views/Editor/index'], resolve),
    name: 'emulator',
    children: [
      {
        path: 'setting',
        component: () => import('@/views/Editor/config-content/setting'),
        name: 'setting'
      },
      {
        path: 'navigation',
        component: () => import('@/views/Editor/config-content/navigation'),
        name: 'navigation'
      },
      {
        path: 'splash',
        component: () => import('@/views/Editor/config-content/splash'),
        name: 'splash'
      },
      {
        path: 'news',
        component: () => import('@/views/Editor/config-content/news'),
        name: 'news'
      },
      {
        path: 'booking',
        component: () => import('@/views/Editor/config-content/booking'),
        name: 'booking'
      },
      {
        path: 'contact',
        component: () => import('@/views/Editor/config-content/contact'),
        name: 'contact'
      },

    ]
  },
  // help
  {   
      path: '/help/service',
      name: 'Service',
      icon: 'fa-book',
      component: () => import('@/views/Help/service'),
      children: [
          {
              path: 'pages',
              name: 'ServicePage',
              component: () => import('@/views/Help/help-content/pages')
          },
          {
              path: 'boot',
              name: 'ServiceBoot',
              component: () => import('@/views/Help/help-content/boot')
          },
          {
              path: 'styling',
              name: 'ServiceStyling',
              component: () => import('@/views/Help/help-content/styling')
          },
          {
              path: 'settings',
              name: 'ServiceSettings',
              component: () => import('@/views/Help/help-content/settings')
          },
          {
              path: 'payments',
              name: 'ServicePayments',
              component: () => import('@/views/Help/help-content/payments')
          },
          {
              path: 'notifications',
              name: 'ServiceNotifications',
              component: () => import('@/views/Help/help-content/notifications')
          },
          {
              path: 'reports',
              name: 'ServiceReports',
              component: () => import('@/views/Help/help-content/reports')
          },
      ]
  }
]

const routes = [...rs,...rots]


const router = new VueRouter({
  mode: 'history',
  routes
})
export default router