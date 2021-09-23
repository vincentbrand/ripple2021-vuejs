export const allSidebarRouter = [
    /*
    {
        path: '/',
        name: 'dashboard',
        component: () => import('@/views/home.vue'),
        icon: 'fa-home'
    },
    */
    {
        name: 'mini_program'
    },
    {
        path: '/emulator/splash',
        name: 'editor',
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
        name: 'data'
    },
    {   
        path: '/bookings/overview',
        name: 'bookings',
        component: () => import('@/views/Bookings'),
        icon: 'fa-calendar-alt'
    },
    {   
        path: '/members',
        name: 'members',
        component: () => import('@/views/Members'),
        icon: 'fa-users'
    },
    {
        path: '/reports',
        name: 'reports',
        component: () => import('@/views/Reports'),
        icon: 'fa-file-alt'
    },
    {
        name: 'configuration'
    },
    {
        path: '/settings',
        name: 'settings',
        icon: 'fa-toolbox',
        component: () => import('@/views/common'),
    },

    // children routes

    {
        path: '/settings/system',
        name: 'System',
        icon: 'fa-database',
        component: () => import('@/views/Settings/system')
    },
    {
        path: '/settings/package',
        name: 'Package',
        icon: 'fa-cube',
        component: () => import('@/views/Settings/package')
    },
    {
        path: '/settings/invoices',
        name: 'Invoices',
        icon: 'fa-file-invoice-dollar',
        component: () => import('@/views/Settings/invoices')
    },
    {
        path: '/settings/team',
        name: 'Team Management',
        icon: 'fa-users',
        component: () => import('@/views/Settings/teamManagement')
    },
    {
        path: '/settings/sms',
        name: 'SMS service',
        icon: 'fa-users',
        component: () => import('@/views/Settings/service')
    },

    /*
    {   
        path: '/settings',
        name: 'settings',
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
    */
    {
        name: 'support'
    },
    {   
        path: '/help',
        name: 'help',
        component: () => import('@/views/common'),
        icon: 'fa-question-circle',
        children: [
            {   
                path: 'service/pages',
                name: 'service',
                icon: 'fa-book',
                component: () => import('@/views/Help/service'),
            },
            {
                path: 'document',
                name: 'documentation',
                icon: 'fa-headset',
                component: () => import('@/views/Help/documentation')
            }
        ]
    },
    {
        path: '/upgrades',
        name: 'upgrades',
        component: () => import('@/views/common'),
        icon: 'fa-yen-sign',
        children: [
            {
                path: 'index',
                name: 'modules',
                icon: 'fa-cubes',
                component: () => import('@/views/Upgrades/modules')
            },
            {
                path: 'packages',
                name: 'packages',
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

