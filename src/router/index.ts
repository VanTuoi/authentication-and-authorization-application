// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePageLayout from '@/layouts/HomePageLayout.vue';
import HomeLayout from '@/layouts/HomeLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import Dashboard from '@/views/Dashboard.vue';
import Tables from '@/views/Tables.vue';
import Billing from '@/views/Billing.vue';
import VirtualReality from '@/views/VirtualReality.vue';
import RTL from '@/views/Rtl.vue';
import ManagerUser from '@/views/ManagerUser.vue';
import ManagerRole from '@/views/ManagerRole.vue';
import ManagerPermission from '@/views/ManagerPermission.vue';
import Profile from '@/views/Profile.vue';
import Signup from '@/views/Signup.vue';
import Signin from '@/views/Signin.vue';
import HomePage from '@/views/homePage/index.vue';
import Demo from '@/views/homePage/demo.vue';
import MiniGame from '@/views/MiniGame.vue';

import setTitle from './title';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: HomePageLayout,
        children: [
            {
                path: '/',
                name: 'HomePage',
                component: HomePage,
                meta: { title: 'Home Page' },
            },
            {
                path: '/demo',
                name: 'Demo',
                component: Demo,
                meta: { title: 'Demo' },
            },
        ],
    },
    {
        path: '/',
        component: HomeLayout,
        children: [
            {
                path: '/dashboard-default',
                name: 'Dashboard',
                component: Dashboard,
                meta: { title: 'Dashboard' },
            },
            {
                path: '/tables',
                name: 'Tables',
                component: Tables,
                meta: { title: 'Tables' },
            },
            {
                path: '/billing',
                name: 'Billing',
                component: Billing,
                meta: { title: 'Billing' },
            },
            {
                path: '/virtual-reality',
                name: 'Virtual Reality',
                component: VirtualReality,
                meta: { title: 'Virtual Reality' },
            },
            {
                path: '/rtl-page',
                name: 'RTL',
                component: RTL,
                meta: { title: 'RTL' },
            },
            {
                path: '/profile',
                name: 'Profile',
                component: Profile,
                meta: { title: 'Profile' },
            },
            {
                path: '/manager-user',
                name: 'User',
                component: ManagerUser,
                meta: { title: 'Manager User' },
            },
            {
                path: '/manager-role',
                name: 'Role',
                component: ManagerRole,
                meta: { title: 'Manager Role' },
            },
            {
                path: '/manager-permission',
                name: 'Permission',
                component: ManagerPermission,
                meta: { title: 'Manager Permission' },
            },
            {
                path: '/miniGame',
                name: 'MiniGame',
                component: MiniGame,
                meta: { title: 'Mini Game' },
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
                meta: { title: 'Signin' },
            },
            {
                path: '/signup',
                name: 'Signup',
                component: Signup,
                meta: { title: 'Signup' },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
});

// Sử dụng Directive v-title trên toàn router
router.beforeEach((to, from, next) => {
    if (to.meta && typeof to.meta.title === 'string') {
        document.title = to.meta.title;
    } else {
        document.title = 'Vue App';
    }
    next();
});

export default router;
