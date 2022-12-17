<script setup>
import {
    dashboardOne,
    dashboardTwo,
    dashboardThree,
    dashboardFour,
    dashboardFive,
    spark3,
} from '@/data/dashboard.v4.js'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Dashboard" subParentTitle="Dashboard V4" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-4">
                        <span class="text-sm">Income</span>
                        <h2 class="text-2xl mb-1 font-semibold tracking-wide">
                            $1000
                        </h2>
                        <span class="text-xs text-gray-500 dark:text-gray-400"
                            >46% compared to last year</span
                        >
                    </div>
                    <apexchart
                        type="area"
                        height="100"
                        :options="dashboardOne.chartOptions"
                        :series="dashboardOne.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-4">
                        <span class="text-sm">Approved</span>
                        <h2 class="text-2xl mb-1 font-semibold tracking-wide">
                            $500
                        </h2>
                        <span class="text-xs text-gray-500 dark:text-gray-400"
                            >46% compared to last year</span
                        >
                    </div>
                    <apexchart
                        type="area"
                        height="100"
                        :options="dashboardTwo.chartOptions"
                        :series="dashboardTwo.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-4">
                        <span class="text-sm">Transaction</span>
                        <h2 class="text-2xl mb-1 font-semibold tracking-wide">
                            $44,909
                        </h2>
                        <span class="text-xs text-gray-500 dark:text-gray-400"
                            >46% compared to last year</span
                        >
                    </div>
                    <apexchart
                        type="area"
                        height="100"
                        :options="dashboardThree.chartOptions"
                        :series="dashboardThree.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
                <BaseCard noPadding class="overflow-hidden">
                    <div class="p-4">
                        <span class="text-sm">Sales</span>
                        <h2 class="text-2xl mb-1 font-semibold tracking-wide">
                            $44,909
                        </h2>
                        <span class="text-xs text-gray-500 dark:text-gray-400"
                            >46% compared to last year</span
                        >
                    </div>
                    <apexchart
                        type="area"
                        height="100"
                        :options="dashboardFour.chartOptions"
                        :series="dashboardFour.series"
                    ></apexchart>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-8">
                <BaseCard class="overflow-hidden" noPadding>
                    <template v-slot:cardHeader>
                        <div class="card-header">
                            <div class="flex justify-between items-center">
                                <div class="card-title">Finance Summary</div>

                                <BaseBtn
                                    class="border border-primary text-primary hover:bg-primary hover:text-white"
                                >
                                    View</BaseBtn
                                >
                            </div>
                        </div>
                    </template>
                    <div class="flex justify-between p-4">
                        <div>
                            <p
                                class="text-gray-700 dark:text-gray-300 text-sm mb-2"
                            >
                                Final Comission Revenue
                            </p>
                            <p
                                class="text-gray-700 dark:text-gray-400 text-lg font-semibold"
                            >
                                $790,420
                            </p>
                        </div>
                        <div>
                            <p
                                class="text-gray-700 dark:text-gray-300 text-sm mb-2"
                            >
                                Final Comission Revenue
                            </p>
                            <p
                                class="text-gray-700 dark:text-gray-400 text-lg font-semibold"
                            >
                                July 25,2019
                            </p>
                        </div>
                    </div>
                    <apexchart
                        type="area"
                        height="160"
                        :options="spark3.chartOptions"
                        :series="spark3.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 card lg:col-span-4">
                <BaseCard>
                    <div class="card-title">Affiliated Sales</div>
                    <apexchart
                        type="polarArea"
                        height="254"
                        :options="dashboardFive.chartOptions"
                        :series="dashboardFive.series"
                    ></apexchart>
                </BaseCard>
            </div>

            <div
                class="col-span-12 flex items-center ui-lib-br overflow-hidden bg-purple-400 p-4 lg:col-span-8"
            >
                <div
                    class="px-6 flex items-center text-left justify-between text-white"
                >
                    <div class="w-6/12">
                        <h3 class="text-2xl font-bold">Congratulations!</h3>
                        <p class="text-2xl font-bold mt-1">Timothy Clarkson</p>
                        <p class="mt-2 text-base">
                            You earn bonus point as affiliate marketer , Great
                            Job.
                        </p>

                        <BaseBtn
                            class="bg-white hover:bg-black hover:text-white mt-6 text-gray-700"
                            >Check Now
                        </BaseBtn>
                    </div>
                    <img
                        class="w-4/12 hidden md:block"
                        src="/images/illustrations/earn.svg"
                    />
                </div>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <BaseCard class="overflow-hidden text-center">
                    <img
                        class="w-32 h-32 rounded-full mx-auto my-4"
                        src="/images/faces/1.jpg"
                    />
                    <p class="text-2xl">Timothy Clarkson</p>
                    <p class="text-sm text-gray-400">Digital Marketer</p>
                    <div
                        class="flex justify-center item-center py-4 border-b border-gray-200 dark:border-dark"
                    >
                        <button role="button" class="btn-icon btn-facebook m-1">
                            <i class="i-Facebook-2 text-white p-1"></i>
                        </button>
                        <button role="button" class="btn-icon btn-google m-1">
                            <i class="i-Google-Plus text-white p-1"></i>
                        </button>
                        <button role="button" class="btn-icon btn-twitter m-1">
                            <i class="i-Twitter text-white p-1"></i>
                        </button>
                    </div>
                    <div class="flex justify-between py-4">
                        <span
                            ><i
                                class="i-Add-UserStar text-warning-500 mr-2 font-semibold"
                            ></i
                            >5.0</span
                        ><span
                            ><i
                                class="i-Bag text-primary-500 mr-2 font-semibold"
                            ></i
                            >78 Sales</span
                        >
                    </div>
                </BaseCard>
            </div>

            <div class="col-span-12 lg:col-span-8">
                <BaseCard class="overflow-hidden">
                    <div
                        class="-my-2 py-2 overflow-x-auto pr-10 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                    >
                        <div
                            class="align-middle inline-block min-w-full overflow-hidden"
                        >
                            <table
                                class="min-w-full borderless-table dashboard-four-table"
                            >
                                <thead>
                                    <tr class="">
                                        <th
                                            class="text-gray-500 dark:text-gray-300 text-sm text-left"
                                        >
                                            Thumbnail
                                        </th>
                                        <th
                                            class="text-gray-500 dark:text-gray-300 text-sm text-left"
                                        >
                                            Title
                                        </th>
                                        <th
                                            class="text-gray-500 dark:text-gray-300 text-sm text-left"
                                        >
                                            Status
                                        </th>
                                        <th
                                            class="text-gray-500 dark:text-gray-300 text-sm text-left"
                                        >
                                            Created On
                                        </th>
                                        <th
                                            class="text-gray-500 dark:text-gray-300 text-sm text-left"
                                        >
                                            Progress
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="">
                                    <tr>
                                        <td>
                                            <img
                                                class="rounded w-12 h-12"
                                                src="/images/products/speaker-1.jpg"
                                            />
                                        </td>
                                        <td>
                                            <span
                                                class="text-gray-700 dark:text-gray-400"
                                                >Wireless Bluetooth V4.0</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="px-2 py-1 rounded text-white bg-danger mr-3"
                                                >Cancel</span
                                            >
                                        </td>
                                        <td>28 Nov 20</td>
                                        <td>
                                            <div
                                                class="shadow w-full bg-gray-200 mb-2 rounded-full"
                                            >
                                                <div
                                                    class="bg-primary text-xs text-center text-white rounded-full"
                                                    style="width: 75%"
                                                >
                                                    75%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="rounded w-12 h-12"
                                                src="/images/products/speaker-2.jpg"
                                            />
                                        </td>
                                        <td>
                                            <span
                                                class="text-gray-700 dark:text-gray-400"
                                                >Portable Speaker with HD
                                                Sound</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="px-2 py-1 rounded text-white bg-warning mr-3"
                                                >Pending</span
                                            >
                                        </td>
                                        <td>28 Dec 20</td>
                                        <td>
                                            <div
                                                class="shadow w-full bg-gray-200 mb-2 rounded-full"
                                            >
                                                <div
                                                    class="bg-primary text-xs text-center text-white rounded-full"
                                                    style="width: 50%"
                                                >
                                                    50%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="rounded w-12 h-12"
                                                src="/images/products/headphone-2.jpg"
                                            />
                                        </td>
                                        <td>
                                            <span
                                                class="text-gray-700 dark:text-gray-400"
                                                >Lightweight On-Ear</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="px-2 py-1 rounded text-white bg-primary mr-3"
                                                >Success</span
                                            >
                                        </td>
                                        <td>28 Dec 20</td>
                                        <td>
                                            <div
                                                class="shadow w-full bg-gray-200 mb-2 rounded-full"
                                            >
                                                <div
                                                    class="bg-danger text-xs text-center text-white rounded-full"
                                                    style="width: 80%"
                                                >
                                                    80%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="rounded w-12 h-12"
                                                src="/images/products/watch-1.jpg"
                                            />
                                        </td>
                                        <td>
                                            <span
                                                class="text-gray-700 dark:text-gray-400"
                                                >Automatic-self-wind mens</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="px-2 py-1 rounded text-white bg-primary mr-3"
                                                >Success</span
                                            >
                                        </td>
                                        <td>28 Dec 20</td>
                                        <td>
                                            <div
                                                class="shadow w-full bg-gray-200 mb-2 rounded-full"
                                            >
                                                <div
                                                    class="bg-danger text-xs text-center text-white rounded-full"
                                                    style="width: 80%"
                                                >
                                                    80%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="rounded w-12 h-12"
                                                src="/images/products/watch-1.jpg"
                                            />
                                        </td>
                                        <td>
                                            <span
                                                class="text-gray-700 dark:text-gray-400"
                                            >
                                                Automatic-self-wind</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="px-2 py-1 rounded text-white bg-primary mr-3"
                                                >Approved</span
                                            >
                                        </td>
                                        <td>28 Dec 20</td>
                                        <td>
                                            <div
                                                class="shadow w-full bg-gray-200 mb-2 rounded-full"
                                            >
                                                <div
                                                    class="bg-info-500 text-xs text-center text-white rounded-full"
                                                    style="width: 100%"
                                                >
                                                    100%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="rounded w-12 h-12"
                                                src="/images/products/headphone-3.jpg"
                                            />
                                        </td>
                                        <td>
                                            <span
                                                class="text-gray-700 dark:text-gray-400"
                                            >
                                                On-Ear Headphones - Black</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="px-2 py-1 rounded text-white bg-info mr-3"
                                                >Pending</span
                                            >
                                        </td>
                                        <td>28 Dec 20</td>
                                        <td>
                                            <div
                                                class="shadow w-full bg-gray-200 mb-2 rounded-full"
                                            >
                                                <div
                                                    class="bg-primary text-xs text-center text-white rounded-full"
                                                    style="width: 45%"
                                                >
                                                    45%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                class="rounded w-12 h-12"
                                                src="/images/products/headphone-2.jpg"
                                            />
                                        </td>
                                        <td>
                                            <span
                                                class="text-gray-700 dark:text-gray-400"
                                            >
                                                Lightweight On-Ear Headphones -
                                                Black</span
                                            >
                                        </td>
                                        <td>
                                            <span
                                                class="px-2 py-1 rounded text-white bg-info mr-3"
                                                >Pending</span
                                            >
                                        </td>
                                        <td>28 Dec 20</td>
                                        <td>
                                            <div
                                                class="shadow w-full bg-gray-200 mb-2 rounded-full"
                                            >
                                                <div
                                                    class="bg-warning text-xs text-center text-white rounded-full"
                                                    style="width: 75%"
                                                >
                                                    75%
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4">
                <BaseCard noPadding class="overflow-hidden">
                    <img src="/images/photo-wide-3.jpg" />

                    <div class="p-5">
                        <div class="card-title mb-3">Latest Updates</div>
                        <p class="text-xs text-gray-700 dark:text-gray-400">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </p>
                        <div class="divide-y divide-gray-200 dark:divide-black">
                            <div class="py-3">
                                <p
                                    class="text-xs text-gray-700 dark:text-gray-400"
                                >
                                    Cras justo odio
                                </p>
                            </div>
                            <div class="py-3">
                                <p
                                    class="text-xs text-gray-700 dark:text-gray-400"
                                >
                                    Dapibus ac facilisis in
                                </p>
                            </div>
                            <div class="py-3">
                                <p
                                    class="text-xs text-gray-700 dark:text-gray-400"
                                >
                                    Vestibulum at eros
                                </p>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dashboard-four-table {
    border-spacing: 0 3rem;
    border-collapse: separate;
}
</style>
