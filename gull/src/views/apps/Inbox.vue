<script setup>
import { ref } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
let isSidebarOpen = ref(false)
let isSecondSidebarOpen = ref(false)
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Apps" subParentTitle="Inbox" />
        <div class="inbox-main-sidebar-container">
            <div
                class="
                    inbox-main-sidebar
                    
                    
                    dark:bg-dark
                "
                :class="isSidebarOpen ? 'open' : ''"
            >
                <i
                    @click="isSidebarOpen = !isSidebarOpen"
                    class="inbox-sidebar-close i-Close float-right p-1 dark:text-gray-300"
                ></i>

                <BaseBtn block class="bg-primary text-white rounded-full"
                    >Compose</BaseBtn
                >
                <div class="px-2">
                    <p class="my-4 dark:text-gray-300">Browse</p>
                    <ul class="inbox-main-nav">
                        <li class="my-4">
                            <a
                                class="
                                    active
                                    flex
                                    items-center
                                    hover:text-primary
                                    dark:text-gray-400
                                "
                                href=""
                                ><i
                                    class="icon-regular i-Mail-2 text-base mr-2"
                                ></i>
                                Inbox (2)</a
                            >
                        </li>
                        <li class="my-4">
                            <a
                                class="flex items-center hover:text-primary dark:text-gray-400"
                                href=""
                                ><i
                                    class="
                                        icon-regular
                                        i-Mail-Outbox
                                        text-base
                                        mr-2
                                    "
                                ></i>
                                Sent</a
                            >
                        </li>
                        <li class="my-4">
                            <a
                                class="flex items-center hover:text-primary dark:text-gray-400"
                                href=""
                                ><i
                                    class="
                                        icon-regular
                                        i-Mail-Favorite
                                        text-base
                                        mr-2
                                    "
                                ></i>
                                Starred</a
                            >
                        </li>
                        <li class="my-4">
                            <a
                                class="flex items-center hover:text-primary dark:text-gray-400"
                                href=""
                                ><i
                                    class="
                                        icon-regular
                                        i-Folder-Trash
                                        text-base
                                        mr-2
                                    "
                                ></i>
                                Trash</a
                            >
                        </li>
                        <li class="my-4">
                            <a
                                class="flex items-center hover:text-primary dark:text-gray-400"
                                href=""
                                ><i
                                    class="
                                        icon-regular
                                        i-Spam-Mail
                                        text-base
                                        mr-2
                                    "
                                ></i>
                                Spam</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
            <div
                class="
                    inbox-main-content
                    sidebar-content
                    bg-white
                    dark:bg-foreground
                "
            >
                <div
                    :class="isSecondSidebarOpen ? 'open' : ''"
                    class="inbox-secondary-sidebar bg-white dark:bg-foreground"
                >
                    <div class="flex justify-end p-3">
                        <i
                            @click="isSecondSidebarOpen = !isSecondSidebarOpen"
                            class="
                                inbox-secondary-sidebar-close
                                i-Close
                                p-1
                                cursor-pointer
                                 dark:text-gray-300
                            "
                        ></i>
                    </div>
                    
                        <perfect-scrollbar>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/1.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/2.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                                dark:text-gray-400
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/3.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                                dark:text-gray-400
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/4.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                                dark:text-gray-400
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/5.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs dark:text-gray-400">20 Dec 2018</span>
                                </div>
                            </div>
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0 dark:text-gray-400">Confirm your email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs">20 Dec 2018</span>
                                </div>
                            </div>
                        
                            
                            <div
                                class="
                                    mail-item
                                    flex
                                    justify-between
                                    p-4
                                    cursor-pointer
                                    border-b border-r border-gray-200
                                    dark:border-dark
                                    hover:bg-gray-100
                                    dark:hover:bg-dark
                                "
                            >
                                <div class="flex">
                                    <img
                                        class="avatar rounded-full mr-2"
                                        src="/images/faces/12.jpg"
                                        alt=""
                                    />
                                    <div class="details">
                                        <span
                                            class="
                                                name
                                                text-gray-700
                                                dark:text-gray-300
                                                text-xs
                                            "
                                            >John Doe</span
                                        >
                                        <p class="m-0">Confirm your last email</p>
                                    </div>
                                </div>
                                <div class="date">
                                    <span class="text-xs">20 Dec 2018</span>
                                </div>
                            </div>
                        </perfect-scrollbar>
                 
                </div>
                <div class="sidebar-content">
                    <div class="inbox-topbar px-3 flex items-center shadow">
                        <div class="inbox-multi-sidebar-open">
                            <i
                                @click="isSidebarOpen = !isSidebarOpen"
                                class="
                                    icon-regular
                                    i-Arrow-Turn-Left
                                    text-base
                                    inbox-sidebar-click
                                    mr-2
                                     dark:text-gray-300
                                "
                            ></i
                            ><i
                                @click="
                                    isSecondSidebarOpen = !isSecondSidebarOpen
                                "
                                class="
                                    icon-regular
                                    i-Left-3
                                    text-base
                                    inbox-secondary-sidebar-click
                                    mr-2
                                     dark:text-gray-300
                                "
                            ></i>
                        </div>
                        <div class="flex items-center">
                            <a
                                class="
                                    link-icon
                                    mr-3
                                    flex
                                    items-center
                                    hover:text-primary
                                    dark:text-gray-300
                                "
                                href=""
                                ><i class="icon-regular i-Mail-Reply mr-2"></i>
                                Reply</a
                            ><a
                                class="
                                    link-icon
                                    mr-3
                                    flex
                                    items-center
                                    hover:text-primary
                                     dark:text-gray-300
                                "
                                href=""
                                ><i
                                    class="icon-regular i-Mail-Reply-All mr-2"
                                ></i>
                                Forward</a
                            ><a
                                class="
                                    link-icon
                                    mr-3
                                    flex
                                    items-center
                                    hover:text-primary
                                     dark:text-gray-300
                                "
                                href=""
                                ><i
                                    class="icon-regular i-Mail-Reply-All mr-2"
                                ></i>
                                Delete</a
                            >
                        </div>
                    </div>
                    <div
                        class="inbox-details px-3 py-4 h-full"
                        
                    >
                        <perfect-scrollbar>
                            <div class="flex items-center mb-3">
                                <img
                                    class="avatar rounded-full mr-2"
                                    src="/images/faces/1.jpg"
                                    alt=""
                                />
                                <div>
                                    <p class="text-sm  dark:text-gray-300">Jhon Doe</p>
                                    <p class="text-xs text-gray-500  dark:text-gray-400">
                                        20 Dec, 2018
                                    </p>
                                </div>
                            </div>
                            <p class="mb-4 text-xl  dark:text-gray-300">Confirm your email</p>
                            <p class="text-sm mb-3  dark:text-gray-400">
                                Natus consequuntur perspiciatis esse beatae illo
                                quos eaque.
                            </p>
                            <p class="text-sm mb-3 dark:text-gray-400">
                                Earum, quisquam, fugit? Numquam dolor magni nisi?
                                Suscipit odit, ipsam iusto enim culpa, temporibus
                                vero possimus error voluptates sequi. Iusto ipsam,
                                nihil? Eveniet modi maxime animi excepturi a
                                dignissimos doloribus, inventore sed ratione,
                                ducimus atque earum maiores tenetur officia commodi
                                dicta tempora consequatur non nesciunt ipsam,
                                consequuntur quia fuga aspernatur impedit et? Natus,
                                earum.
                            </p>
                            <div class="p-4 border-l border-gray-300 mb-5 dark:text-gray-400">
                                <p class="text-lg">
                                    Earum, quisquam, fugit? Numquam dolor magni
                                    nisi? Suscipit odit, ipsam iusto enim culpa,
                                    temporibus vero possimus error voluptates sequi.
                                </p>
                            </div>
                            <p class="text-sm mb-8 dark:text-gray-400">
                                Earum, quisquam, fugit? Numquam dolor magni nisi?
                                Suscipit odit, ipsam iusto enim culpa, temporibus
                                vero possimus error voluptates sequi. Iusto ipsam,
                                nihil? Eveniet modi maxime animi excepturi a
                                dignissimos doloribus, inventore sed ratione,
                                ducimus atque earum maiores tenetur officia commodi
                                dicta tempora consequatur non nesciunt ipsam,
                                consequuntur quia fuga aspernatur impedit et? Natus,
                                earum.
                            </p>
                            <p class="text-sm dark:text-gray-400">Thanks</p>
                            <p class="text-sm dark:text-gray-400">Jhone</p>
                        </perfect-scrollbar>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.ps {
    height: calc(100% - 25px);
}
</style>