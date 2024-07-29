const users = [
    {
        path: '/',
        component: () => import('../layouts/users.vue'),
        children: [
            {
                path: '',
                name: 'users',
                component: () => import('../views/users/index.vue')
            }
        ]
    }
]

export default users;