
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
                                selectedParentMenu == 'products' ? 'active' : ''
                            "
                            data-item="products"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold">
                                <i class="i-Shop-2 text-3xl"></i>
                                <p>Products</p>
                            </a>
                        </li>
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
                                ><i class="i-Business-ManWoman text-3xl"></i>
                                <p>Users</p>
                            </a>
                        </li>
                        <li
                            @mouseenter="toggleSubMenu"
                            class="nav-item border-b border-gray-200 dark:border-dark"
                            :class="
                                selectedParentMenu == 'finance'
                                    ? 'active'
                                    : ''
                            "
                            data-item="finance"
                            :data-submenu="true"
                        >
                            <a class="nav-item-hold"
                                ><i class="i-Wallet text-3xl"></i>
                                <p>Finance</p>
                            </a>
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
                        <router-link tag="a" to="/dashboards/dealer/overview" >
                            <i class="nav-icon i-Bar-Chart mr-2"></i>
                            <span class="item-name"> Dashboard Overview </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/dashboards/dealer/overview" >
                            <i class="nav-icon i-Receipt mr-2"></i>
                            <span class="item-name"> Joining Report </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/dashboards/dealer/overview" >
                            <i class="nav-icon i-Receipt mr-2"></i>
                            <span class="item-name"> Re-Purchase Gap Bonus </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/dashboards/dealer/overview" >
                            <i class="nav-icon i-Receipt mr-2"></i>
                            <span class="item-name"> Joining Sales Report </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/dashboards/dealer/overview" >
                            <i class="nav-icon i-Receipt mr-2"></i>
                            <span class="item-name"> Re-Purchase Sales Report </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/dashboards/dealer/overview" >
                            <i class="nav-icon i-Receipt mr-2"></i>
                            <span class="item-name"> Re-Purchase Report </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/dashboards/dealer/overview" >
                            <i class="nav-icon i-Receipt mr-2"></i>
                            <span class="item-name"> Joining Gap Bonus </span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="products"
                    :class="selectedParentMenu == 'products' ? 'block' : 'hidden'"
                >
                    <li>
                        <router-link tag="a" class to="/dashboards/admin/products">
                            <i class="nav-icon i-Checkout-Basket text-base mr-2"></i>
                            <span class="item-name"> All Products </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" to="/dashboards/admin/addproduct">
                            <i class="nav-icon i-Add text-base mr-2"></i>
                            <span class="item-name"> Add Product </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/dashboards/products">
                            <i class="nav-icon i-Shopping-Basket text-base mr-2"></i>
                            <span class="item-name">  Product Orders</span>
                        </router-link>
                    </li>
                </ul>
                <ul
                    class="mb-4 childNav"
                    data-parent="finance"
                    :class="
                        selectedParentMenu == 'finance' ? 'block' : 'hidden'
                    "
                >
                    <li>
                        <router-link tag="a" class to="/dashboards/admin/balance">
                            <i class="nav-icon i-Money-2 mr-2"></i>
                            <span class="item-name"> Balance Request </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/dashboards/dealer/button">
                            <i class="nav-icon i-File-Download mr-2"></i>
                            <span class="item-name"> Request History </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/dashboards/dealer/badges">
                            <i class="nav-icon i-Mail-Money mr-2"></i>
                            <span class="item-name"> Withdraw Balance </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link tag="a" class to="/dashboards/dealer/accordions">
                            <i
                                class="nav-icon i-File-Upload mr-2"
                            ></i>
                            <span class="item-name"> Withdraw History </span>
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
                        <router-link tag="a" to="/dashboards/admin/stockiests">
                            <i class="nav-icon i-MaleFemale text-base mr-2"></i>
                            <span class="item-name"> All Stockiests </span>
                        </router-link>
                        <router-link tag="a" to="/dashboards/admin/members">
                            <i class="nav-icon i-MaleFemale text-base mr-2"></i>
                            <span class="item-name"> All members </span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>

        <div
            @click="removeOverlay()"
            @mouseover="removeOverlay()"
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
        box-shadow: 5px 0px 100px rgb(136, 136, 136);
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
