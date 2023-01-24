/*
 * File: index.js
 * Project: Gull
 * File Created: Thursday, 18th November 2021 5:15:07 pm
 * Author: Naime Hossain & ui-lib -> https://ui-lib.com/ (support@ui-lib.com)
 * -----
 * Last Modified: Sunday, 23rd October 2022 1:14:16 pm
 * Modified By: Naime Hossain & ui-lib -> https://ui-lib.com/ (support@ui-lib.com>)
 * -----
 * Copyright 2019 - 2022 ui-lib  , ui-lib  ( https://ui-lib.com/ )
 */

import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '../views/sessions/404.vue'
import store from '../store'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../layout/index.vue'),
        redirect: '/intro',
        meta: {
            title: 'Home',
        },

        children: [
            {
                path: '/dashboards',
                name: 'Dashboards',
                component: () => import('../views/dashboards/index.vue'),
                meta: {
                    title: 'Dashboard',
                },
                children: [
                    {                    // Admin
                        path: 'admin/products',
                        name: 'admin-products',
                        component: () => import('../views/dashboards/admin/products.vue'),
                    },
                    {
                        path: 'admin/addproduct',
                        name: 'admin-addproduct',
                        component: () => import('../views/dashboards/admin/addproduct.vue'),
                    },
                    {
                        path: 'admin/stockiests',
                        name: 'admin-stockiests',
                        component: () => import('../views/dashboards/admin/stockiests.vue'),
                    },
                    {
                        path: 'admin/members',
                        name: 'admin-members',
                        component: () => import('../views/dashboards/admin/members.vue'),
                    },
                    {
                        path: 'admin/balance',
                        name: 'admin-balance',
                        component: () => import('../views/dashboards/admin/balance.vue'),
                    },
                    {                    // stockiest
                        path: 'stockiest/products',
                        name: 'stockiest-products',
                        component: () => import('../views/dashboards/stockiest/products.vue'),
                    },
                    {
                        path: 'stockiest/myorders',
                        name: 'stockiest-myorders',
                        component: () => import('../views/dashboards/stockiest/myorders.vue'),
                    },
                    {
                        path: 'stockiest/myproducts',
                        name: 'stockiest-myproducts',
                        component: () => import('../views/dashboards/stockiest/myproducts.vue'),
                    },
                    {
                        path: 'stockiest/balance',
                        name: 'stockiest-balance',
                        component: () => import('../views/dashboards/stockiest/balance.vue'),
                    },
                    {
                        path: 'stockiest/withdraw',
                        name: 'stockiest-withdraw',
                        component: () => import('../views/dashboards/stockiest/withdraw.vue'),
                    },
                    {                    // MEMBER
                        path: 'member',
                        name: 'member-dash',
                        component: () => import('../views/dashboards/member/index.vue'),
                    },
                    {
                        path: 'member/tree',
                        name: 'tree',
                        component: () => import('../views/dashboards/member/tree.vue'),
                    },
                ],
            },
        ],
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import('../views/sessions/usersignin.vue'),
        meta: {
            title: 'Sessions',
        },
    },
    {
        path: '/intro',
        name: 'Intro',
        component: () => import('../views/LandingPage.vue'),
        meta: {
            title: 'Intro',
        },
    },

    { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        return { left: 0, top: 0 }
    },

    routes,
})
router.beforeEach((to, from, next) => {
    document.title = to.name
    next()
})
router.afterEach(() => {
    // Remove initial loading
    const GullPreLoading = document.getElementById('loading_wrap')
    if (GullPreLoading) {
        GullPreLoading.style.display = 'none'
    }
    const secondarySideNav =
        store.state.largeSidebar.sidebarToggleProperties.isSecondarySideNavOpen
    if (window.innerWidth <= 1200) {
        store.dispatch('largeSidebar/changeSidebarProperties')
        if (secondarySideNav) {
            store.dispatch('largeSidebar/changeSecondarySidebarProperties')
        }
    } else {
        if (secondarySideNav) {
            store.dispatch('largeSidebar/changeSecondarySidebarProperties')
        }
    }
})

export default router
