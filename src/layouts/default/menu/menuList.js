
export const menuList = [
    {
        key: '1',
        path: '/login',
        label: 'to login',
        icon: 'like-outlined'
    },
    {
        key: '2',
        path: '/home',
        label: 'to home',
        icon: 'video-camera-outlined'
    },
    {
        key: '3',
        path: '/test',
        label: 'to test',
        icon: 'upload-outlined'
    },
    {
        key: 'sub1',
        label: 'Navigation',
        icon: 'MailOutlined',
        path:'/asddas',
        children: [
            {
                key: 'sub1',
                path: '/test',
                label: 'to test'
            }
        ]
    }
]