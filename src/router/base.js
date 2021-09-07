export const allSidebarRouter = [
    {
        path: '/',
        name: 'Dashboard',
        component: () => import('@/views/home.vue'),
        icon: 'fa-home'
    },
    {
        name: 'Mini Program'
    },
    {
        path: '/emulator/splash',
        name: 'Editeor',
        component: () => import('@/views/Editor'),
        icon: 'fa-edit'
    },
    /*
    {   
        path: '/pages',
        name: 'Pages',
        icon: 'fa-file',
        component: () => import('@/views/common'),
        children: [
            {
                path: 'startup',
                name: 'Startup Page',
                component: () => import('@/views/Pages/startup'),
            },
            {
                path: 'custom',
                name: 'Custom Page',
                component: () => import('@/views/Pages/custom'),
            },
            {
                path: 'news',
                name: 'News Management',
                component: () => import('@/views/Pages/news'),
            }
        ]
    },
    {   
        path: '/settings',
        name: 'Settings',
        icon: 'fa-toolbox',
        component: () => import('@/views/common'),
        children: [
            {
                path: 'navigation',
                name: 'Navigation',
                component: () => import('@/views/Settings/navigation'),
                icon: 'fa-bars'
            },
            {
                path: 'boot',
                name: 'Boot Sequence',
                component: () => import('@/views/Settings/boot'),
                icon: 'fa-sitemap'
            },
            {
                path: 'styling',
                name: 'Styling',
                component: () => import('@/views/Settings/styling'),
                icon: 'fa-palette'
            }
        ]
    },
    */
    {
        name: 'analytics'
    },
    {   
        path: '/bookings',
        name: 'Bookings',
        component: () => import('@/views/Bookings'),
        icon: 'fa-calendar-alt'
    },
    {   
        path: '/members',
        name: 'Members',
        component: () => import('@/views/Members'),
        icon: 'fa-users'
    },
    {   
        path: '/reports',
        name: 'Reports',
        component: () => import('@/views/Reports'),
        icon: 'fa-file-alt'
    },
    {
        name: 'Setting'
    },
    {   
        path: '/settings',
        name: 'Settings',
        icon: 'fa-toolbox',
        component: () => import('@/views/common'),
        children: [
            {   
                path: 'system',
                name: 'System',
                icon: 'fa-database',
                component: () => import('@/views/Settings/system')
            },
            {   
                path: 'package',
                name: 'Package',
                icon: 'fa-cube',
                component: () => import('@/views/Settings/package')
            },
            {   
                path: 'invoices',
                name: 'Invoices',
                icon: 'fa-file-invoice-dollar',
                component: () => import('@/views/Settings/invoices')
            },
            {   
                path: 'management',
                name: 'Team Management',
                icon: 'fa-users',
                component: () => import('@/views/Settings/teamManagement')
            },
            {   
                path: 'service',
                name: 'SMS service',
                icon: 'fa-users',
                component: () => import('@/views/Settings/service')
            },
        ]
    },
    {
        name: 'SUPPORT'
    },
    {   
        path: '/help',
        name: 'Help',
        component: () => import('@/views/common'),
        icon: 'fa-question-circle',
        children: [
            {   
                path: 'service/pages',
                name: 'Service',
                icon: 'fa-book',
                component: () => import('@/views/Help/service'),
            },
            {
                path: 'document',
                name: 'Documentation',
                icon: 'fa-headset',
                component: () => import('@/views/Help/documentation')
            }
        ]
    },
    {
        path: '/upgrades',
        name: 'Upgrades',
        component: () => import('@/views/common'),
        icon: 'fa-yen-sign',
        children: [
            {
                path: 'index',
                name: 'Modules',
                icon: 'fa-cubes',
                component: () => import('@/views/Upgrades/modules')
            },
            {
                path: 'packages',
                name: 'Packages',
                icon: 'fa-cube',
                component: () => import('@/views/Upgrades/packages')
            }
        ]
    }
   
]

export const sidebarRouter = function () {
    let arr = []
    allSidebarRouter.forEach((item) => {
        if (item.path) {
            arr.push(item)
        }
    })
    return arr;
}

