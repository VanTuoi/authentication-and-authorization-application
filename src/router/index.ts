import { createRouter, createWebHistory } from 'vue-router';
import HomeLayout from '@/layouts/HomeLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import Dashboard from '@/views/Dashboard.vue';
import Tables from '@/views/Tables.vue';
import Billing from '@/views/Billing.vue';
import VirtualReality from '@/views/VirtualReality.vue';
import RTL from '@/views/Rtl.vue';
import Profile from '@/views/Profile.vue';
import Signup from '@/views/Signup.vue';
import Signin from '@/views/Signin.vue';
import MiniGame from '@/views/MiniGame.vue';

const routes = [
    {
        path: '/',
        component: HomeLayout,
        children: [
            {
                path: '/dashboard-default',
                name: 'Dashboard',
                component: Dashboard,
            },
            {
                path: '/tables',
                name: 'Tables',
                component: Tables,
            },
            {
                path: '/billing',
                name: 'Billing',
                component: Billing,
            },
            {
                path: '/virtual-reality',
                name: 'Virtual Reality',
                component: VirtualReality,
            },
            {
                path: '/rtl-page',
                name: 'RTL',
                component: RTL,
            },
            {
                path: '/profile',
                name: 'Profile',
                component: Profile,
            },
            {
                path: '/miniGame',
                name: 'MiniGame',
                component: MiniGame,
            },
        ],
    },
    {
        path: '/',
        component: AuthLayout,
        children: [
            {
                path: '/signin',
                name: 'Signin',
                component: Signin,
            },
            {
                path: '/signup',
                name: 'Signup',
                component: Signup,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
});

export default router;
