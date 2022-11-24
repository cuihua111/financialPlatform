const LAYOUT = () => import('/@/layouts/default/index.vue')
export const pageRoutes = [
    {
        path: '/home',
        name: 'Home',
        redirect: '/home/index',
        component: LAYOUT,
        breadcrumbName: 'Home',
        children: [
            {
                path: '/home/index',
                name: 'HomeIndex',
                component: () => import('/@/views/home/Home.vue'),
                breadcrumbName: 'index'
            },
            {
                path: '/home/index1',
                name: 'HomeIndex1',
                component: () => import('/@/views/home/Home.vue'),
                breadcrumbName: 'index1'
            }
        ]
    },
    {
        path: '/test',
        name: 'Test',
        redirect: '/test/index',
        component: LAYOUT,
        breadcrumbName: "Test",
        children: [
            {
                path: '/test/index',
                name: 'TestIndex',
                component: () => import('/@/views/test/Test.vue'),
                breadcrumbName: 'TestIndex'
            }
        ]
    }
]