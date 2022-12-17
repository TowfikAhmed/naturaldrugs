<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

let categories = ref({
    Recent: [
        {
            id: 1,
            title: 'Does drinking coffee make you smarter?',
            date: '5h ago',
            commentCount: 5,
            shareCount: 2,
        },
        {
            id: 2,
            title: "So you've bought coffee... now what?",
            date: '2h ago',
            commentCount: 3,
            shareCount: 2,
        },
    ],
    Popular: [
        {
            id: 1,
            title: 'Is tech making coffee better or worse?',
            date: 'Jan 7',
            commentCount: 29,
            shareCount: 16,
        },
        {
            id: 2,
            title: 'The most innovative things happening in coffee',
            date: 'Mar 19',
            commentCount: 24,
            shareCount: 12,
        },
    ],
    Trending: [
        {
            id: 1,
            title: 'Ask Me Anything: 10 answers to your questions about coffee',
            date: '2d ago',
            commentCount: 9,
            shareCount: 5,
        },
        {
            id: 2,
            title: "The worst advice we've ever heard about coffee",
            date: '4d ago',
            commentCount: 1,
            shareCount: 2,
        },
    ],
})
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Components" subParentTitle="Tabs" />
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <BaseCard>
                <div class="card-title mb-4">Tab</div>
                <TabGroup>
                    <TabList
                        class="flex p-1 space-x-1 bg-purple-100 dark:bg-dark rounded-xl"
                    >
                        <Tab
                            v-for="category in Object.keys(categories)"
                            as="template"
                            :key="category"
                            v-slot="{ selected }"
                        >
                            <button
                                role="button"
                                :class="[
                                    'w-full py-2.5 text-sm text-gray-700 leading-5 font-medium rounded-lg',
                                    'focus:outline-none',
                                    selected
                                        ? 'bg-primary text-white shadow'
                                        : 'text-gray-700 hover:bg-white/[0.12] hover:text-primary text-primary',
                                ]"
                            >
                                {{ category }}
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2">
                        <TabPanel
                            v-for="(posts, idx) in Object.values(categories)"
                            :key="idx"
                            :class="[
                                ' rounded-xl p-3 dark:bg-dark',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60',
                            ]"
                        >
                            <ul class="">
                                <li
                                    v-for="post in posts"
                                    :key="post.id"
                                    class="relative p-3 rounded-md hover:bg-coolGray-100"
                                >
                                    <h3 class="text-sm font-medium leading-5">
                                        {{ post.title }}
                                    </h3>

                                    <ul
                                        class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                                    >
                                        <li>{{ post.date }}</li>
                                        <li>&middot;</li>
                                        <li>
                                            {{ post.commentCount }} comments
                                        </li>
                                        <li>&middot;</li>
                                        <li>{{ post.shareCount }} shares</li>
                                    </ul>

                                    <a
                                        href="#"
                                        :class="[
                                            'absolute inset-0 rounded-md',
                                            'focus:z-10 focus:outline-none focus:ring-2 ring-primary',
                                        ]"
                                    />
                                </li>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </BaseCard>
            <BaseCard>
                <div class="card-title mb-4">Pills Tab</div>
                <TabGroup>
                    <TabList class="flex p-1 space-x-1 dark:bg-dark rounded-xl">
                        <Tab
                            v-for="category in Object.keys(categories)"
                            as="template"
                            :key="category"
                            v-slot="{ selected }"
                        >
                            <button
                                role="button"
                                :class="[
                                    'px-3 py-1 text-sm leading-5  rounded-lg',
                                    'focus:outline-none',
                                    selected
                                        ? 'bg-primary text-white shadow'
                                        : 'text-gray-700 hover:bg-white/[0.12] hover:text-primary text-primary',
                                ]"
                            >
                                {{ category }}
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2">
                        <TabPanel
                            v-for="(posts, idx) in Object.values(categories)"
                            :key="idx"
                            :class="[
                                'dark:bg-dark rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60',
                            ]"
                        >
                            <ul>
                                <li
                                    v-for="post in posts"
                                    :key="post.id"
                                    class="relative p-3 rounded-md hover:bg-coolGray-100"
                                >
                                    <h3 class="text-sm font-medium leading-5">
                                        {{ post.title }}
                                    </h3>

                                    <ul
                                        class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                                    >
                                        <li>{{ post.date }}</li>
                                        <li>&middot;</li>
                                        <li>
                                            {{ post.commentCount }} comments
                                        </li>
                                        <li>&middot;</li>
                                        <li>{{ post.shareCount }} shares</li>
                                    </ul>

                                    <a
                                        href="#"
                                        :class="[
                                            'absolute inset-0 rounded-md',
                                            'focus:z-10 focus:outline-none focus:ring-2 ring-primary',
                                        ]"
                                    />
                                </li>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </BaseCard>
            <BaseCard>
                <div class="card-title mb-4">Basic Tabs</div>
                <TabGroup>
                    <TabList class="flex dark:bg-dark border-b border-primary">
                        <Tab
                            v-for="category in Object.keys(categories)"
                            as="template"
                            :key="category"
                            v-slot="{ selected }"
                        >
                            <button
                                role="button"
                                :class="[
                                    'px-3 py-1 text-sm leading-5 ',
                                    'focus:outline-none',
                                    selected
                                        ? 'text-primary dark:bg-foreground bg-purple-50 border-t border-l border-r border-primary'
                                        : 'text-gray-700 hover:bg-white/[0.12] hover:text-primary text-primary',
                                ]"
                            >
                                {{ category }}
                            </button>
                        </Tab>
                    </TabList>

                    <TabPanels class="mt-2">
                        <TabPanel
                            v-for="(posts, idx) in Object.values(categories)"
                            :key="idx"
                            :class="[
                                'dark:bg-dark rounded-xl p-3',
                                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-primary ring-white ring-opacity-60',
                            ]"
                        >
                            <ul>
                                <li
                                    v-for="post in posts"
                                    :key="post.id"
                                    class="relative p-3 rounded-md hover:bg-coolGray-100"
                                >
                                    <h3 class="text-sm font-medium leading-5">
                                        {{ post.title }}
                                    </h3>

                                    <ul
                                        class="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500"
                                    >
                                        <li>{{ post.date }}</li>
                                        <li>&middot;</li>
                                        <li>
                                            {{ post.commentCount }} comments
                                        </li>
                                        <li>&middot;</li>
                                        <li>{{ post.shareCount }} shares</li>
                                    </ul>

                                    <a
                                        href="#"
                                        :class="[
                                            'absolute inset-0 rounded-md',
                                            'focus:z-10 focus:outline-none focus:ring-2 ring-primary',
                                        ]"
                                    />
                                </li>
                            </ul>
                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </BaseCard>
        </div>
    </div>
</template>
