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
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/Index.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/Index.vue'),
    },
    {
        path: '/webpage',
        name: 'webpage',
        component: () => import('@/views/Editor/Webpage.vue'),
    },
    // settings
    {
        path: '/settings',
        component: () => import('@/views/Settings/General'),
        name: 'settings'
    },
    // navbar
    {
        path: '/user/',
        component: () => import('@/views/User/Profile'),
        name: 'user'
    },{
        path: '/user/profile',
        component: () => import('@/views/User/Profile'),
        name: 'user-profile'
    },{
        path: '/user/settings',
        component: () => import('@/views/User/Settings'),
        name: 'user-settings'
    },{
        path: '/user/inbox',
        component: () => import('@/views/User/Inbox'),
        name: 'user-inbox'
    },{
        path: '/user/message/:id',
        component: () => import('@/views/User/Message'),
        name: 'user-message'
    },{
        path: '/user/alerts',
        component: () => import('@/views/User/Alerts'),
        name: 'user-alerts'
    },
    {
        path: '/user/alert/:id?',
        component: () => import('@/views/User/Alertmessage'),
        name: 'alertmessage'
    },
    {
        path: '/user/invoices',
        component: () => import('@/views/User/Invoices'),
        name: 'invoices'
    },
    {
        path: '/user/log',
        component: () => import('@/views/User/Log'),
        name: 'activity'
    },
    {
        path: '/user/logout',
        component: () => import('@/views/User/Logout'),
        name: 'logout'
    },
    /*
    {
    path: '/system',
    component: () => import('@/views/System/Overview'),
    name: 'system',
    children: [
        {
            path: 'clientsss',
            component: () => import('@/views/System/Clients'),
            name: 'clientsss'
        },
        {
            path: 'settings',
            component: () => import('@/views/System/Settings'),
            name: 'settings'
        }
    ]},
     */
    {
        path: '/system/logs',
        component: () => import('@/views/System/Logs'),
        name: 'systemlogs',
    },
    {
        path: '/system/accesslogs/:id?',
        component: () => import('@/views/System/AccessLogs'),
        name: 'accesslogs',
    },


    {
        path: '/system/Billing',
        component: () => import('@/views/System/Billing'),
        name: 'systembilling',
    },
    {
        path: '/system/clients',
                component: () => import('@/views/System/Clients'),
                name: 'clients'
    },
    {
        path: '/system/client/:id?',
        component: () => import('@/views/System/Client'),
        name: 'client'
    },
    {
        path: '/member/:id',
        name: 'detail',
        component: () => import('@/views/Members/detail'),
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
        {
            path: 'static/:id?',
            component: () => import('@/views/Editor/config-content/static'),
            name: 'static'
        },

    ]
  },
    {
        path: '/mp/versions',
        name: 'mpversions',
        component: () => import('@/views/Editor/Mpversions.vue'),
    },
// cart

    {
        path: '/purchase/cart',
        name: 'cart',
        component: () => import('@/views/Purchase/Cart.vue'),
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
  },

    // Testing Routes
    {
        path: '/echarts',
        component: () => import('@/views/Stats/Echarts'),
        name: 'echarts',
    },
    {
        path: '/links',
        component: () => import('@/views/links'),
        name: 'links',
    },
]

const routes = [...rs,...rots]


const router = new VueRouter({
  mode: 'history',
  routes
})
export default router