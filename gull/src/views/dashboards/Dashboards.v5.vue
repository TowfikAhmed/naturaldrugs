<script setup>
import {
    dashboardOne,
    dashboardTwo,
    dashboardThree,
    dashboardFour,
    dashboardFive,
} from '@/data/dashboard.v5.js'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard V5" />
        <div class="grid grid-cols-12 gap-5 mt-10">
            <div class="col-span-12 mb-6">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title">
                                Reach Impressions History
                            </div>
                        </div>
                    </template>
                    <apexchart
                        type="area"
                        height="350"
                        :options="dashboardTwo.chartOptions"
                        :series="dashboardTwo.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center">
                    <div
                        class="rounded-full flex items-center justify-center bg-purple-100 text-primary font-bold h-10 w-10 mb-4 mx-auto"
                    >
                        <i class="i-Business-ManWoman"></i>
                    </div>
                    <p class="text-2xl font-black">30.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Total Followers
                    </p>

                    <BaseBtn
                        class="rounded-full text-primary bg-purple-100 hover:bg-primary hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">12.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center relative">
                    <div
                        class="bg-indigo absolute -right-4 -top-4 p-2 rounded-full"
                    >
                        <i class="i-Map-Marker p-1 text-white"></i>
                    </div>
                    <div
                        class="rounded-full flex items-center justify-center bg-gray-100 text-green-500 font-bold h-10 w-10 mb-4 mx-auto"
                    >
                        <i class="i-Cursor-Click-2"></i>
                    </div>
                    <p class="text-2xl font-black">9.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Impressions
                    </p>
                    <BaseBtn
                        class="rounded-full text-green-500 bg-green-100 hover:bg-green-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Up font-bold mr-2"></i
                        ><span class="font-bold">58.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center relative">
                    <button
                        role="button"
                        class="btn-icon absolute -right-6 -top-6"
                    >
                        <img
                            class="avatar rounded-full"
                            src="/images/faces/2.jpg"
                        />
                    </button>
                    <div
                        class="rounded-full flex items-center justify-center bg-gray-100 text-red-500 font-bold h-10 w-10 mb-4 mx-auto"
                    >
                        <i class="i-Cursor-Click-2"></i>
                    </div>
                    <p class="text-2xl font-black">9.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Impressions
                    </p>
                    <BaseBtn
                        class="rounded-full text-red-500 bg-red-100 hover:bg-red-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">58.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center">
                    <div
                        class="rounded-full flex items-center justify-center bg-gray-100 text-indigo-500 font-bold h-10 w-10 mb-4 mx-auto"
                    >
                        <i class="i-Email"></i>
                    </div>
                    <p class="text-2xl font-black">18.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Rate Review
                    </p>
                    <BaseBtn
                        class="rounded-full text-indigo-500 bg-indigo-100 hover:bg-indigo-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">05.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12">
                <div class="flex justify-between">
                    <div class="flex items-center">
                        <div class="card-title text-lg mr-2 font-bold">
                            Most
                        </div>
                        <a
                            class="text-primary font-bold text-lg hover:text-purple-400"
                            href="#"
                            >Recent Media</a
                        >
                    </div>
                    <select
                        id="cars"
                        name="cars"
                        class="focus:outline-none cursor-pointer dark:bg-dark dark:text-gray-400"
                    >
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <img src="/images/gallery/sq-10.jpg" />
                    <div class="flex justify-between p-5">
                        <div class="flex items-center">
                            <i
                                class="i-Heart1 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold mr-4"
                                >2.3k</span
                            >
                            <i
                                class="i-Speach-Bubble-3 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold"
                                >900</span
                            >
                        </div>
                        <p
                            class="text-gray-400 dark:text-gray-300 font-semibold"
                        >
                            23 days ago
                        </p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <img src="/images/gallery/sq-8.jpg" />
                    <div class="flex justify-between p-5">
                        <div class="flex items-center">
                            <i
                                class="i-Heart1 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold mr-4"
                                >2.3k</span
                            >
                            <i
                                class="i-Speach-Bubble-3 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold"
                                >900</span
                            >
                        </div>
                        <p
                            class="text-gray-400 dark:text-gray-300 font-semibold"
                        >
                            23 days ago
                        </p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <img src="/images/gallery/sq-6.jpg" />
                    <div class="flex justify-between p-5">
                        <div class="flex items-center">
                            <i
                                class="i-Heart1 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold mr-4"
                                >2.3k</span
                            >
                            <i
                                class="i-Speach-Bubble-3 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold"
                                >900</span
                            >
                        </div>
                        <p
                            class="text-gray-400 dark:text-gray-300 font-semibold"
                        >
                            23 days ago
                        </p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <img src="/images/gallery/sq-4.jpg" />
                    <div class="flex justify-between p-5">
                        <div class="flex items-center">
                            <i
                                class="i-Heart1 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold mr-4"
                                >2.3k</span
                            >
                            <i
                                class="i-Speach-Bubble-3 text-gray-500 dark:text-gray-400 font-semibold mr-2"
                            ></i>
                            <span
                                class="text-gray-500 dark:text-gray-400 font-semibold"
                                >900</span
                            >
                        </div>
                        <p
                            class="text-gray-400 dark:text-gray-300 font-semibold"
                        >
                            23 days ago
                        </p>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title">Follower Growth</div>
                        </div>
                    </template>
                    <div class="grid grid-cols-12 gap-5 items-center">
                        <div class="col-span-12 xl:col-span-5 lg:col-span-12">
                            <div class="flex justify-center flex-wrap">
                                <div class="mr-5 sm:mb-0 mb-5">
                                    <div class="text-4xl font-bold">4,829</div>
                                    <p class="text-gray-500">
                                        Gained Followers (last 360 days)
                                    </p>
                                </div>
                                <div>
                                    <div class="flex items-baseline mb-5">
                                        <span
                                            class="px-2 py-1 rounded text-white bg-purple-100 mr-3"
                                        >
                                            <i
                                                class="i-Turn-Up text-primary font-bold"
                                            ></i
                                        ></span>
                                        <p>
                                            You have a
                                            <span
                                                class="text-primary font-bold"
                                            >
                                                20% Growth
                                            </span>
                                            compare to last year
                                        </p>
                                    </div>
                                    <div class="flex items-baseline mb-3">
                                        <span
                                            class="px-2 py-1 text-white bg-yellow-100 mr-3"
                                        >
                                            <i
                                                class="i-Turn-Down-2 text-yellow-500 font-bold"
                                            ></i
                                        ></span>
                                        <p>
                                            You have a reached
                                            <span
                                                class="text-yellow-500 font-bold"
                                            >
                                                10% </span
                                            >of your follower goal
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 xl:col-span-7 lg:col-span-12">
                            <apexchart
                                type="line"
                                height="350"
                                :options="dashboardOne.chartOptions"
                                :series="dashboardOne.series"
                            ></apexchart>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center">
                    <div
                        class="flex justify-center items-center rounded bg-purple-100 text-primary font-bold h-10 w-14 mb-4 mx-auto"
                    >
                        <i class="i-Business-ManWoman"></i>
                    </div>
                    <p class="text-2xl font-black">30.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Reach
                    </p>
                    <BaseBtn
                        class="text-primary bg-purple-100 hover:bg-primary hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">12.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center">
                    <div
                        class="flex justify-center items-center rounded badge-circle bg-green-100 text-green-500 font-bold h-10 w-14 mb-4 mx-auto"
                    >
                        <i class="i-Cursor-Click-2"></i>
                    </div>
                    <p class="text-2xl font-black">9.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Engagement
                    </p>
                    <BaseBtn
                        class="text-green-500 bg-green-100 hover:bg-green-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">12.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center">
                    <div
                        class="flex justify-center items-center rounded badge-circle bg-red-100 text-red-500 font-bold h-10 w-14 mb-4 mx-auto"
                    >
                        <i class="i-Cursor-Click-2"></i>
                    </div>
                    <p class="text-2xl font-black">1.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Connect
                    </p>
                    <BaseBtn
                        class="text-red-500 bg-red-100 hover:bg-red-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">12.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
                <BaseCard class="text-center">
                    <div
                        class="flex justify-center items-center rounded badge-circle bg-indigo-100 text-indigo-500 font-bold h-10 w-14 mb-4 mx-auto"
                    >
                        <i class="i-Email"></i>
                    </div>
                    <p class="text-2xl font-black">18.2K</p>
                    <p class="mb-5 text-gray-500 dark:text-gray-400 text-xs">
                        Rate Review
                    </p>
                    <BaseBtn
                        class="text-indigo-500 bg-indigo-100 hover:bg-indigo-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">12.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>

            <div class="col-span-12 xl:col-span-6">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title">Like History</div>
                        </div>
                    </template>
                    <apexchart
                        type="line"
                        height="350"
                        :options="dashboardThree.chartOptions"
                        :series="dashboardThree.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-6">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title">Comment History</div>
                        </div>
                    </template>
                    <apexchart
                        type="line"
                        height="350"
                        :options="dashboardFour.chartOptions"
                        :series="dashboardFour.series"
                    ></apexchart>
                </BaseCard>
            </div>

            <div class="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6">
                <BaseCard class="text-center">
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Likes Received
                    </p>
                    <p class="text-2xl font-bold mb-4">3.2K</p>
                    <BaseBtn
                        class="text-red-500 bg-red-100 hover:bg-red-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i>
                        12.6%
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6">
                <BaseCard class="text-center">
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Avg. Likes Received
                    </p>
                    <p class="text-2xl font-bold mb-4">225.6</p>
                    <BaseBtn
                        class="text-indigo-500 bg-indigo-100 hover:bg-indigo-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i>
                        03.6%
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6">
                <BaseCard class="text-center relative">
                    <template v-slot:cardHeader>
                        <div class="card-header p-0 border-0 relative">
                            <div class="absolute -right-4 -top-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="/images/faces/2.jpg"
                                />
                            </div>
                        </div>
                    </template>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Feedback
                    </p>
                    <p class="text-2xl font-bold mb-4">1.2K</p>
                    <BaseBtn
                        class="text-indigo-500 bg-indigo-100 hover:bg-indigo-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i>
                        <span class="font-bold">05.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6">
                <BaseCard class="text-center">
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Avg Feedback
                    </p>
                    <p class="text-2xl font-bold mb-4">1.2K</p>
                    <BaseBtn
                        class="text-primary bg-purple-100 hover:bg-primary hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">05.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6">
                <BaseCard class="text-center">
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Avg Feedback
                    </p>
                    <p class="text-2xl font-bold mb-4">1.2K</p>
                    <BaseBtn
                        class="text-primary bg-purple-100 hover:bg-primary hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i
                        ><span class="font-bold">05.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-2 lg:col-span-4 md:col-span-6">
                <BaseCard class="text-center relative">
                    <template v-slot:cardHeader>
                        <div class="card-header p-0 border-0 relative">
                            <div class="absolute -right-4 -top-4">
                                <img
                                    class="w-7 h-7 rounded-full"
                                    src="/images/faces/2.jpg"
                                />
                            </div>
                        </div>
                    </template>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                        Feedback
                    </p>
                    <p class="text-2xl font-bold mb-4">1.2K</p>
                    <BaseBtn
                        class="text-indigo-500 bg-indigo-100 hover:bg-indigo-500 hover:text-white hover:shadow-lg"
                    >
                        <i class="i-Arrow-Down font-bold mr-2"></i>
                        <span class="font-bold">05.6%</span>
                    </BaseBtn>
                </BaseCard>
            </div>

            <div class="col-span-12">
                <BaseCard>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="card-title m-0">Posting Habits</div>
                        </div>
                    </template>
                    <apexchart
                        type="heatmap"
                        height="350"
                        :options="dashboardFive.chartOptions"
                        :series="dashboardFive.series"
                    ></apexchart>
                </BaseCard>
            </div>
        </div>
    </div>
</template>
