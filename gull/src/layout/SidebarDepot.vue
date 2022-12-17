/* * File: Sidebar.vue * Project: Gull * File Created: Thursday, 18th November
2021 5:15:07 pm * Author: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com) * ----- * Last Modified: Wednesday, 19th October 2022
5:38:29 pm * Modified By: Naime Hossain & ui-lib -> https://ui-lib.com/
(support@ui-lib.com>) * ----- * Copyright 2019 - 2022 ui-lib , ui-lib (
https://ui-lib.com/ ) */

<script setup>
import { useStore } from 'vuex'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
let store = useStore()
const route = useRoute()

let selectedParentMenu = ref('')
let isMenuOver = ref(false)

onMounted(() => {
    toggleSelectedParentMenu()
    document.addEventListener('click', returnSelectedParentMenu)
    window.addEventListener('resize', handleWindowResize)
})

// beforeDestroy
onBeforeUnmount(() => {
    document.removeEventListener('click', returnSelectedParentMenu)
    window.removeEventListener('resize', handleWindowResize)
})
const handleWindowResize = () => {
    const sidenav =
        store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen
    const secondarySideNav =
        store.state.largeSidebar.sidebarToggleProperties.isSecondarySideNavOpen

    if (window.innerWidth <= 1200) {
        // console.log('mobile is working');

        if (sidenav) {
            store.commit('largeSidebar/toggleSidebarProperties')
        }
        if (secondarySideNav) {
            store.commit('largeSidebar/toggleSecondarySidebarProperties')
        }
    } else {
        if (!sidenav) {
            store.commit('largeSidebar/toggleSidebarProperties')
        }
    }
}

const returnSelectedParentMenu = () => {
    if (!isMenuOver.value) {
        toggleSelectedParentMenu()
    }
}
const removeOverlay = () => {
    store.dispatch('largeSidebar/changeSecondarySidebarPropertiesViaMenuItem')

    if (window.innerWidth <= 1200) {
        // this.changeSidebarProperties();
        store.commit('largeSidebar/toggleSidebarProperties')
        console.log('adsasd')
    }
    toggleSelectedParentMenu()
}

let toggleSelectedParentMenu = () => {
    let currentParentUrl = route.path.split('/').filter((x) => x !== '')[0]

    if (currentParentUrl !== undefined || currentParentUrl !== null) {
        selectedParentMenu.value = currentParentUrl.toLowerCase()
    } else {
        selectedParentMenu.value = 'dashboards'
    }
}
let toggleSubMenu = (e) => {
    let hasSubmenu = e.target.dataset.submenu
    let parent = e.target.dataset.item

    if (hasSubmenu) {
        selectedParentMenu.value = parent
        store.dispatch(
            'largeSidebar/changeSecondarySidebarPropertiesViaMenuItem',
            true
        )
    } else {
        selectedParentMenu.value = parent
        store.dispatch(
            'largeSidebar/changeSecondarySidebarPropertiesViaMenuItem',
            false
        )
    }
}

// mobile working
</script>
<template>
    <div
        class="side-content-wrap"
        @mouseenter="isMenuOver = true"
        @mouseleave="isMenuOver = false"
        @touchstart="isMenuOver = true"
    >
        <div class="side-content-wrap">
            <div
                :class="
                    store.state.largeSidebar.sidebarToggleProperties
                        .isSideNavOpen === true
                        ? 'open'
                        : ''
                "
                class="sidebar-left bg-white dark:bg-foreground"
            >
                <perfect-scrollbar>
                    <ul
                        class="navigation-left dark:bg-foreground dark:text-gray-300"
                    >
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            :class="
                                selectedParentMenu == 'dashboards'
                                    ? 'active'
                                    : ''
                            "
                            data-item="dashboards"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold">
                                <i class="i-Bar-Chart text-3xl"></i>
                                <p>Dashboard</p>
                            </a>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            :class="
                                selectedParentMenu == 'apps' ? 'active' : ''
                            "
                            data-item="apps"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold">
                                <i class="i-Computer-Secure text-3xl"></i>
                                <p>Apps</p>
                            </a>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            :class="
                                selectedParentMenu == 'components'
                                    ? 'active'
                                    : ''
                            "
                            data-item="components"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold"
                                ><i class="i-Wallet text-3xl"></i>
                                <p>Components</p>
                            </a>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            :class="
                                selectedParentMenu == 'widgets' ? 'active' : ''
                            "
                            data-item="widgets"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold"
                                ><i class="i-Atom text-3xl"></i>
                                <p>Widgets</p>
                            </a>
                        </li>
                        <!-- <li 
                            @mouseenter="toggleSubMenu" 
                            class="nav-item" 
                            :class="selectedParentMenu == 'components' ? 'active' : ''"
                            data-item="components"
                            :data-submenu=true
                        >
                            <a class="nav-item-hold" 
                                ><i class="i-Wallet text-3xl"></i>
                                <p>Components</p>
                            </a>
                        </li> -->
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            :class="
                                selectedParentMenu == 'profile' ? 'active' : ''
                            "
                            data-item="profile"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold"
                                ><i class="i-Find-User text-3xl"></i>
                                <p>Profile</p>
                            </a>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            data-item="sessions"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold"
                                ><i class="i-Administrator text-3xl"></i>
                                <p>Session</p>
                            </a>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            :class="
                                selectedParentMenu == 'charts' ? 'active' : ''
                            "
                            data-item="charts"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold"
                                ><i class="i-Pie-Chart-2 text-3xl"></i>
                                <p>Charts</p>
                            </a>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item"
                            data-item="demo"
                        >
                            <router-link
                                tag="a"
                                to="/landingpage"
                                class="nav-item-hold"
                                ><i class="i-Pie-Chart-2 text-3xl"></i>
                                <p>Demo</p>
                            </router-link>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item"
                            data-item="doc"
                        >
                            <router-link tag="a" to="" class="nav-item-hold"
                                ><i class="i-Pie-Chart-2 text-3xl"></i>
                                <p>Doc</p>
                            </router-link>
                        </li>
                    </ul>
                </perfect-scrollbar>
            </div>

            <div
                :class="{
                    open: store.state.largeSidebar.sidebarToggleProperties
                        .isSecondarySideNavOpen,
                }"
                class="sidebar-left-secondary shadow bg-white dark:bg-foreground dark:text-gray-300"
            >
                <ul
                    class="mb-4 childNav"
                    data-parent="dashboards"
                    :class="
                        selectedParentMenu == 'dashboards' ? 'block' : 'hidden'
                    "
                >
                    <li>
                        <router-link
                            tag="a"
                            to="/dashboards/dashboard-version-one"
                        >
                            <i class="nav-icon i-Clock mr-2"></i>
                            <span class="item-name"> Version One </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            tag="a"
                            class
                            to="/dashboards/dashboard-version-two"
                        >
                            <i class="nav-icon i-Clock-4 mr-2"></i>
                            <span class="item-name"> Version Two </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            tag="a"
                            class
                            to="/dashboards/dashboard-version-three"
                        >
                            <i class="nav-icon i-Over-Time mr-2"></i>
                            <span class="item-name"> Version Three </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            tag="a"
                            class
                            to="/dashboards/dashboard-version-four"
                        >
                            <i class="nav-icon i-Over-Time mr-2"></i>
                            <span class="item-name"> Version Four </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            tag="a"
                            class
                            to="/dashboards/dashboard-version-five"
                        >
                            <i class="nav-icon i-Clock text-base mr-2"></i>
                            <span class="item-name"> Version Five </span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="apps"
                    :class="selectedParentMenu == 'apps' ? 'block' : 'hidden'"
                >
                    <li>
                        <router-link tag="a" class to="/apps/chat">
                            <i class="nav-icon i-Book text-base mr-2"></i>
                            <span class="item-name"> Chat </span>
                        </router-link>
                    </li>

                    <li class="dropdown-sidemenu">
                        <Disclosure v-slot="{ open }">
                            <DisclosureButton
                                class="submenuLi hover:text-primary items-center flex justify-between w-full px-6 py-2 text-sm text-left focus:outline-none"
                                :class="open ? 'bg-gray-100' : ''"
                            >
                                <div class="flex items-center">
                                    <i
                                        class="nav-icon i-Bar-Chart-2 text-base mr-2"
                                    ></i>
                                    <span>Contact</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    :class="open ? 'transform rotate-90 ' : ''"
                                    class="h-4 w-4 submenuli-icon transition duration-300 ease-in-out"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </DisclosureButton>

                            <DisclosurePanel
                                class="dark:bg-dark px-6 py-2 pb-2 text-sm bg-gray-50 text-xs"
                            >
                                <ul class="">
                                    <li class="py-2 hover:text-primary">
                                        <router-link
                                            to="/apps/contact-table"
                                            class="flex align-center submneu-nested-link"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            Contact Table
                                        </router-link>
                                    </li>
                                    <li class="py-2">
                                        <router-link
                                            to="/apps/contact-list"
                                            class="flex align-center submneu-nested-link"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            Contact List
                                        </router-link>
                                    </li>
                                    <li class="py-2">
                                        <router-link
                                            to="/apps/contact-grid"
                                            class="flex align-center submneu-nested-link"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            Contact Grid
                                        </router-link>
                                    </li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>
                    </li>

                    <li class="dropdown-sidemenu">
                        <Disclosure v-slot="{ open }">
                            <DisclosureButton
                                class="submenuLi hover:text-primary items-center flex justify-between w-full px-6 py-2 text-sm text-left focus:outline-none"
                                :class="open ? 'bg-gray-100' : ''"
                            >
                                <div class="flex items-center">
                                    <i
                                        class="nav-icon i-Bar-Chart-2 text-base mr-2"
                                    ></i>
                                    <span>Ecommerce</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    :class="open ? 'transform rotate-90 ' : ''"
                                    class="h-4 w-4 submenuli-icon transition duration-300 ease-in-out"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </DisclosureButton>

                            <DisclosurePanel
                                class="dark:bg-dark px-6 py-2 pb-2 text-sm bg-gray-50 text-xs"
                            >
                                <ul class="">
                                    <li class="py-2 hover:text-primary">
                                        <router-link
                                            to="/apps/ecommerce"
                                            class="flex align-center submneu-nested-link"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            Product
                                        </router-link>
                                    </li>
                                    <li class="py-2">
                                        <router-link
                                            to="/apps/cart"
                                            class="flex align-center submneu-nested-link"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            Cart
                                        </router-link>
                                    </li>
                                    <li class="py-2">
                                        <router-link
                                            to="/apps/checkout"
                                            class="flex align-center submneu-nested-link"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 mr-2"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            Checkout
                                        </router-link>
                                    </li>
                                </ul>
                            </DisclosurePanel>
                        </Disclosure>
                    </li>
                    <li>
                        <router-link tag="a" class to="/apps/inbox">
                            <i class="nav-icon i-Add-Cart text-base mr-2"></i>
                            <span class="item-name"> Inbox </span>
                        </router-link>
                    </li>
                    <li class="dropdown-sidemenu">
                        <Disclosure v-slot="{ open }">
                            <DisclosureButton
                                class="submenuLi hover:text-primary items-center flex justify-between w-full px-6 py-2 text-sm text-left focus:outline-none"
                                :class="open ? 'bg-gray-100' : ''"
                            >
                                <div class="flex items-center">
                                    <i
                                        class="nav-icon i-Bar-Chart-2 text-base mr-2"
                                    ></i>
                                    <span>Invoice</span>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    :class="open ? 'transform rotate-90 ' : ''"
                                    class="h-4 w-4 submenuli-icon transition duration-300 ease-in-out"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </DisclosureButton>
                            <transition
                                enter-active-class="transition duration-100 ease-out"
                                enter-from-class="transform scale-95 opacity-0"
                                enter-to-class="transform scale-100 opacity-100"
                                leave-active-class="transition duration-75 ease-out"
                                leave-from-class="transform scale-100 opacity-100"
                                leave-to-class="transform scale-95 opacity-0"
                            >
                                <DisclosurePanel
                                    class="dark:bg-dark px-6 py-2 pb-2 text-sm bg-gray-50 text-xs"
                                >
                                    <ul class="">
                                        <li class="py-2 hover:text-primary">
                                            <router-link
                                                to="/apps/create-invoice"
                                                class="flex align-center submneu-nested-link"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5 mr-2"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                Create Invoice
                                            </router-link>
                                        </li>
                                        <li class="py-2 hover:text-primary">
                                            <router-link
                                                to="/apps/print-invoice"
                                                class="flex align-center submneu-nested-link"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5 mr-2"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                Print Invoice
                                            </router-link>
                                        </li>
                                    </ul>
                                </DisclosurePanel>
                            </transition>
                        </Disclosure>
                    </li>

                    <li>
                        <router-link tag="a" class to="/apps/todo-list">
                            <i class="nav-icon i-Book text-base mr-2"></i>
                            <span class="item-name"> Todo List </span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="components"
                    :class="
                        selectedParentMenu == 'components' ? 'block' : 'hidden'
                    "
                >
                    <li>
                        <router-link tag="a" class to="/components/avatars">
                            <i class="nav-icon i-Clock mr-2"></i>
                            <span class="item-name"> Avatars </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/components/button">
                            <i class="nav-icon i-Clock mr-2"></i>
                            <span class="item-name"> Buttons </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/components/badges">
                            <i class="nav-icon i-Clock mr-2"></i>
                            <span class="item-name"> Badges </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/components/accordions">
                            <i
                                class="nav-icon i-Split-Horizontal-2-Window mr-2"
                            ></i>
                            <span class="item-name"> Accordions </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/components/alerts">
                            <i class="nav-icon i-Bell1 mr-2"></i>
                            <span class="item-name"> Alerts </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/components/tabs">
                            <i class="nav-icon i-New-Tab mr-2"></i>
                            <span class="item-name"> Tabs </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/components/typography">
                            <i class="nav-icon i-Width-Window mr-2"></i>
                            <span class="item-name"> Typoghraphy </span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="widgets"
                    :class="
                        selectedParentMenu == 'widgets' ? 'block' : 'hidden'
                    "
                >
                    <li>
                        <router-link tag="a" class to="/widgets/charts">
                            <i class="nav-icon i-Clock-3 text-base mr-2"></i>
                            <span class="item-name"> Charts </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/widgets/general">
                            <i class="nav-icon i-Clock-3 text-base mr-2"></i>
                            <span class="item-name"> General </span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="profile"
                    :class="
                        selectedParentMenu == 'profile' ? 'block' : 'hidden'
                    "
                >
                    <li>
                        <router-link tag="a" to="/profile/profileOne">
                            <i class="nav-icon i-Find-User text-base mr-2"></i>
                            <span class="item-name"> Profile Ver 1.0 </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/profile/profileTwo">
                            <i class="nav-icon i-Find-User text-base mr-2"></i>
                            <span class="item-name"> Profile Ver 2.0 </span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="sessions"
                    :class="
                        selectedParentMenu == 'sessions' ? 'block' : 'hidden'
                    "
                >
                    <li>
                        <router-link tag="a" to="/sessions/signin">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Signin </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/signin-two">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Signin Two </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/signin-three">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Signin Three </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/signin-four">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Signin Four </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/signup">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Sign Up </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/signup-two">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Sign Up Two </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/signup-three">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Sign Up Three </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/signup-four">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Sign Up Four </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/404">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> 404 </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/sessions/forgot">
                            <i
                                class="nav-icon i-Checked-User text-base mr-2"
                            ></i>
                            <span class="item-name"> Forgot </span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="charts"
                    :class="selectedParentMenu == 'charts' ? 'block' : 'hidden'"
                >
                    <li>
                        <router-link tag="a" class to="/charts/bar">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Bar </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/area">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Area </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/line">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Line </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/mix">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Mix </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/column">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Column Chart </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/pieDonut">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Pie Donut </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/radarChart">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Radar Chart </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/radialBar">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Radial Bar </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/scatter">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Scatter Chart </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/charts/sparkline">
                            <i
                                class="nav-icon i-Bar-Chart-2 text-base mr-2"
                            ></i>
                            <span class="item-name"> Sparkline </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div
            @click="removeOverlay()"
            class="sidebar-overlay"
            :class="{
                open: store.state.largeSidebar.sidebarToggleProperties
                    .isSecondarySideNavOpen,
            }"
        ></div>
    </div>
</template>

<style lang="scss" scoped>
.submenuLi {
    @apply dark:bg-foreground;
    &:hover {
        .submenuli-icon {
            @apply text-primary;
        }
    }
    .submenuli-icon {
        color: #9ca3af;
    }
}
.dark .dark\:bg-dark {
    .submneu-nested-link {
        color: #f3f4f6 !important;
        &:hover {
            background-color: transparent !important;
            @apply text-primary;
        }
    }
}
.submneu-nested-link {
    padding: 0 !important;
    color: #000 !important;

    &:hover {
        background-color: transparent !important;
        @apply text-primary;
    }
}
.side-content-wrap {
    .sidebar-left {
        position: fixed;
        top: 80px;
        left: -120px;
        width: 120px;

        box-shadow: 0 4px 20px 1px rgba(0, 0, 0, 0.06),
            0 1px 4px rgba(0, 0, 0, 0.08);
        z-index: 90;
        transition: left 0.24s ease-in-out;
        &.open {
            left: 0;
            transition: left 0.24s ease-in-out;
        }
        .ps {
            height: calc(100vh - 80px);
        }
        .navigation-left {
            list-style: none;
            text-align: center;
            width: 120px;
            height: 100%;
            margin: 0;
            padding: 0;
            .nav-item,
            .nav-item-single {
                position: relative;
                display: block;
                width: 100%;
                overflow: hidden;
                cursor: pointer;
                // border-bottom: 1px solid #dee2e6;

                &:hover {
                    .nav-item-hold {
                        @apply text-primary;
                    }
                    &:after {
                        content: '';
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        bottom: -15px;
                        right: -15px;
                        transform: rotate(45deg);
                        @apply bg-primary;
                    }
                }

                &.active {
                    @apply text-primary;

                    &:after {
                        content: '';
                        position: absolute;
                        width: 30px;
                        height: 30px;
                        bottom: -15px;
                        right: -15px;
                        transform: rotate(45deg);
                        @apply bg-primary;
                    }
                }

                .nav-item-hold {
                    display: block;
                    width: 100%;
                    padding: 26px 0;
                    p {
                        font-size: 13px;
                    }
                    span.material-icons {
                        font-size: 2rem;
                    }
                }
            }
        }
    }
    .sidebar-left-secondary {
        position: fixed;
        top: 80px;
        left: calc(-220px - 20px);
        z-index: 89;
        height: calc(100vh - 80px);
        width: 220px;
        padding: 0.75rem 0;
        transition: left 0.24s ease-in-out;
        box-shadow: 5px 0px 50px gray;
        // background: #fff;

        &.open {
            left: 120px;
        }
        ul.childNav {
            li {
                &.dropdown-sidemenu {
                    display: block;
                    transition: left 0.24s ease-in-out;
                    &.open {
                        a {
                            .dd-arrow {
                                transform: rotate(90deg);
                                transition: left 0.24s ease-in-out;
                            }
                        }
                        ul.submenu {
                            display: block;
                            max-height: 1000px;
                            transition: left 0.24s ease-in-out;
                        }
                    }

                    a {
                        .dd-arrow {
                            margin-left: auto !important;
                            transition: left 0.24s ease-in-out;
                        }
                    }
                }

                a {
                    text-transform: capitalize;
                    display: flex;
                    align-items: center;
                    font-size: 13px;
                    cursor: pointer;
                    padding: 12px 24px;
                    transition: 0.15s all ease-in;
                    &:hover {
                        background-color: #f3f4f6;
                        @apply text-primary dark:bg-dark;
                    }
                    &.router-link-active.router-link-exact-active {
                        @apply text-primary;
                    }
                }
                ul.submenu {
                    @apply bg-gray-50;
                    display: none;
                    max-height: 0px;
                    transition: left 0.24s ease-in-out;

                    &.open {
                        display: block;
                        transition: left 0.24s ease-in-out;
                    }
                    li {
                        a {
                            padding-left: 48px;
                        }
                    }
                }
            }
        }
    }
    .sidebar-overlay {
        display: none;
        position: fixed;
        width: calc(100% - 120px - 220px);
        height: calc(100vh - 80px);
        bottom: 0;
        right: 0;
        background: rgba(0, 0, 0, 0);
        z-index: 101;
        cursor: w-resize;
        &.open {
            display: block;
        }
    }
}
</style>
