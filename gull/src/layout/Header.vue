<script setup>
import { onMounted, ref, watch, watchEffect } from 'vue'
import { Switch } from '@headlessui/vue'
import HeaderSearch from '../components/HeaderSearch.vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
let store = useStore()
const router = useRouter()

const sideBarToggle = () => {
    let sidenav = store.state.largeSidebar.sidebarToggleProperties.isSideNavOpen
    let secondarySideNav =
        store.state.largeSidebar.sidebarToggleProperties.isSecondarySideNavOpen
    // store.commit('largeSidebar/toggleSecondarySidebarProperties')

    if (sidenav == false) {
        store.commit('largeSidebar/toggleSidebarProperties')
        // store.commit('largeSidebar/toggleSecondarySidebarProperties')
    } else if (sidenav == true && secondarySideNav == true) {
        store.commit('largeSidebar/toggleSecondarySidebarProperties')
    } else {
        store.commit('largeSidebar/toggleSidebarProperties')
    }
}

// switch color to dark and light
let isDarkMode = ref(false)
const html = document.querySelector('html')

let colorModeSwitch = () => {
    if (isDarkMode.value === false) {
        html.classList.add('dark')
        isDarkMode.value = true
        console.log(isDarkMode.value)
    } else {
        html.classList.remove('dark')
        isDarkMode.value = false
        console.log(isDarkMode.value)
    }
}
function logOut(){
    store.commit('setUser', null);
    setCookie('jwt',"",-300);
    router.push('/signin')
}
function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
</script>

<template>
    <div
        class="header-wrapper flex bg-white justify-between px-4 dark:bg-foreground dark:text-gray-300"
    >
        <div class="flex items-center">
            <div class="logo flex justify-center">
                <img
                    class="h-16 w-16 mr-6 ml-3"
                    src="/images/logo.png"
                    alt="logo"
                    srcset=""
                />
            </div>
            <div class="mx-0 sm:mx-3">
                <button
                    role="button"
                    @click="sideBarToggle"
                    class="menu-toggle cursor-pointer text-gray-500 align-middle focus:outline-none"
                    type="button"
                    aria-label="Sidebar Toggle"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>
            <!-- mega-menu  -->

            <Menu as="div" class="relative inline-block text-left">
                <div class="desktopOnly">
                    <p v-if="store.state.user">{{store.state.user.type}} DASHBOARD</p>
                </div>
            </Menu>

            <HeaderSearch class="desktopOnly" />
        </div>
        <div class="flex items-center">
            <button
                id="lightOrDarkMode"
                @click="colorModeSwitch"
                class="w-7 h-7 mr-3 border border-gray-300 dark:border-primary-300 rounded-full flex items-center justify-center text-white"
            >
                <img
                    class="block dark:hidden w-[12px] h-[12px] fill-gray-700 dark:fill-primary-100"
                    src="/images/svg-sprite/Dark-mode.svg"
                />

                <img
                    class="hidden dark:block w-[12px] h-[12px] fill-gray-700 dark:fill-primary-100"
                    src="/images/svg-sprite/Light-mode.svg"
                />
            </button>
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="btn btn-sm hover:bg-gray-100 dark:hover:bg-dark rounded badge-top-container inline-flex justify-center w-full px-4 py-2 text-sm font-medium"
                    >
                        <span
                            class="badge-count text-white bg-primary dark:text-gray-300"
                            >3</span
                        >
                        <i
                            class="i-Bell text-xl header-icon text-gray-800 dark:text-gray-300"
                        ></i>
                    </MenuButton>
                </div>

                <MenuItems
                    class="absolute right-0 w-44 mt-2 overflow-hidden origin-top-right bg-white dark:bg-dark rounded-md custom-box-shadow focus:outline-none"
                >
                    <div class="">
                        <MenuItem
                            v-for="(item, index) in 4"
                            :key="index"
                            v-slot="{ active }"
                        >
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900 dark:text-gray-300',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                                aria-label="notifications"
                                role="button"
                            >
                                <div class="flex flex-1 justify-between">
                                    <div>
                                        <h6 class="text-left">Test Message</h6>
                                        <p
                                            :class="[
                                                active
                                                    ? 'text-gray-300'
                                                    : 'text-gray-500',
                                            ]"
                                        >
                                            Something here...
                                        </p>
                                    </div>
                                    <div>
                                        <p
                                            :class="[
                                                active
                                                    ? 'text-gray-200'
                                                    : 'text-gray-400',
                                            ]"
                                        >
                                            10s
                                        </p>
                                    </div>
                                </div>
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>

            <!-- profile-dropdown  -->
            <Menu as="div" class="relative inline-block text-left">
                <div>
                    <MenuButton
                        class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium"
                    >
                        <img
                            class="avatar rounded-full"
                            src="/images/faces/1.jpg"
                            alt=""
                        />
                    </MenuButton>
                </div>

                <MenuItems
                    class="absolute right-0 w-44 mt-2 overflow-hidden origin-top-right bg-white dark:bg-dark rounded-md custom-box-shadow focus:outline-none"
                >
                    <div class="">
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900 dark:text-gray-300',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                                aria-label="Account Settings"
                                role="button"
                            >
                                Account Settings
                            </button>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                            <button
                                :class="[
                                    active
                                        ? 'bg-primary text-white'
                                        : 'text-gray-900 dark:text-gray-300',
                                    'group flex  items-center w-full px-4 py-2 text-sm',
                                ]"
                                aria-label="Sign out"
                                role="button"
                                @click="logOut"
                            >
                                Sign Out
                            </button>
                        </MenuItem>
                    </div>
                </MenuItems>
            </Menu>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header-wrapper {
    position: fixed;
    top: 0;
    width: 100%;
    height: 80px;
    z-index: 100;
    box-shadow: 0 1px 15px rgb(0 0 0 / 4%), 0 1px 6px rgb(0 0 0 / 4%);
    max-width: 100vw;
}

.mega-menu {
    width: 1200px;
}

ul.links {
    column-count: 2;

    li {
        margin-bottom: 8px;
    }
}
@media screen and (max-width: 768px) {
    .desktopOnly {
        display: none;
    }
    .header-wrapper{
        width: 100vw;
    }
}

</style>
