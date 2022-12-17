<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import { 
        dashboardOne,
        dashboardTwo,
        dashboardThree,
        dashboardFour,
        dashboardFive,
        spark3
    } from '@/data/dashboard.v4.js'
    import { 
        widgetBarChartThree,
        widgetBarChartFour,
        widgetBarChartFive,
        widgetBarChartSix,
        basicColumnChart,
    } from '@/data/dashboard.v3.js';
    import { 
        gradientRadial, 
        gradientRadialTwo,
        gradientRadialThree, 
        gradientRadialFour, 
        basiAreaChart,
        basiAreaChartTwo,
        basiAreaChartThree,
    } from '@/data/charts.js'

</script>
<template>
  <div class="container mx-auto">
      <Breadcrumbs parentTitle="Widgets" subParentTitle="Charts" />
      <div class="grid grid-cols-12 gap-5">
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
            
            <BaseCard noPadding class="overflow-hidden">
                <div class="p-4">
                    <span class="text-sm">INCOME</span>
                    <h2 class="text-2xl mb-1 font-semibold tracking-wide">$1000</h2>
                    <span class="text-xs text-gray-500 dark:text-gray-400">46% compared to last year</span>
                </div>
                <apexchart type="area" height="100" :options="dashboardOne.chartOptions" :series="dashboardOne.series"></apexchart>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
            
            <BaseCard noPadding class="overflow-hidden">
                <div class="p-4">
                    <span class="text-sm">APPROVE</span>
                    <h2 class="text-2xl mb-1 font-semibold tracking-wide">$500</h2><span class="text-xs text-gray-500 dark:text-gray-400">46% compared to last year</span>
                </div>
                <apexchart type="area" height="100" :options="dashboardTwo.chartOptions" :series="dashboardTwo.series"></apexchart>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
            <BaseCard noPadding class="overflow-hidden">
                <div class="p-4"><span class="text-sm">TRANSACTION</span>
                    <h2 class="text-2xl mb-1 font-semibold tracking-wide">$44,909</h2><span class="text-xs text-gray-500 dark:text-gray-400">46% compared to last year</span>
                </div>
                <apexchart type="area" height="100" :options="dashboardThree.chartOptions" :series="dashboardThree.series"></apexchart>
            </BaseCard>
            
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 sm:col-span-6">
            <BaseCard noPadding class="overflow-hidden">
                <div class="p-4">
                    <span class="text-sm">SALES</span>
                    <h2 class="text-2xl mb-1 font-semibold tracking-wide">$44,909</h2><span class="text-xs text-gray-500 dark:text-gray-400">46% compared to last year</span>
                </div>
                <apexchart type="area" height="100" :options="dashboardFour.chartOptions" :series="dashboardFour.series"></apexchart>
            </BaseCard>
           
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <apexchart
                    type="bar"
                    height="100"
                    :options="widgetBarChartThree.chartOptions"
                    :series="widgetBarChartThree.series"
                />
                <div class="text-center mt-4">
                    <p class="text-xl">6,760</p>
                    <p class="text-xs text-gray-400">50% Average</p>
                </div>
            </BaseCard>
            
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="text-center flex flex-col items-center">
                    <apexchart
                        type="bar"
                        height="100"
                        :options="widgetBarChartFour.chartOptions"
                        :series="widgetBarChartFour.series"
                    />
                    <div class="text-center mt-4">
                        <p class="text-xl">369 212</p>
                        <p class="text-xs text-gray-400">50% Average</p>
                    </div>
                </div>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <apexchart
                    type="bar"
                    height="100"
                    :options="widgetBarChartFive.chartOptions"
                    :series="widgetBarChartFive.series"
                />
                <div class="text-center mt-4">
                    <p class="text-xl">369 212</p>
                    <p class="text-xs text-gray-400">24% Average</p>
                </div>
            </BaseCard>
            
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <apexchart
                    type="bar"
                    height="100"
                    :options="widgetBarChartSix.chartOptions"
                    :series="widgetBarChartSix.series"
                />
                <div class="text-center mt-4">
                    <p class="text-xl">369 212</p>
                    <p class="text-xs text-gray-400">24% Average</p>
                </div>
            </BaseCard>
            
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex items-center"><i class="i-Hotel text-primary mr-4 text-4xl"></i>
                    <div>
                        <p class="text-sm text-gray-400">Assets</p>
                        <p class="text-xl">40,894</p>
                    </div>
                </div>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex items-center"><i class="i-Bar-Chart text-danger mr-4 text-4xl"></i>
                    <div>
                        <p class="text-sm text-gray-400">Progression</p>
                        <p class="text-xl">80%</p>
                    </div>
                </div>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex items-center"><i class="i-Full-Cart text-primary mr-4 text-4xl"></i>
                    <div>
                        <p class="text-sm text-gray-400">Total Profit</p>
                        <p class="text-xl">৳ 2000</p>
                    </div>
                </div>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex items-center"><i class="i-Bookmark text-success mr-4 text-4xl"></i>
                    <div>
                        <p class="text-sm text-gray-400">Lease</p>
                        <p class="text-xl">5,417</p>
                    </div>
                </div>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard class="text-center">
                <apexchart type="radialBar" height="250" :options="gradientRadial.chartOptions" :series="gradientRadial.series"></apexchart>
                <h4 class="card-title mt-3 font-semibold">People Choice Rate</h4>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard class="text-center">
                <apexchart type="radialBar" height="250" :options="gradientRadialTwo.chartOptions" :series="gradientRadialTwo.series"></apexchart>
                <h4 class="card-title mt-3 font-semibold">Item Pending</h4>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard class="text-center">
                <apexchart type="radialBar" height="250" :options="gradientRadialThree.chartOptions" :series="gradientRadialThree.series"></apexchart>
                <h4 class="card-title mt-3 font-semibold">Total Profit</h4>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard class="text-center">
                <apexchart type="radialBar" height="250" :options="gradientRadialFour.chartOptions" :series="gradientRadialFour.series"></apexchart>
                <h4 class="card-title mt-3 font-semibold">Total Income</h4>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
            <BaseCard noPadding class="text-center">
                <h4 class="card-title mt-3 font-semibold">698</h4>
                <p class="text-xs text-gray-400">Orders Received</p>
                <apexchart type="area" height="100" :options="basiAreaChart.chartOptions" :series="basiAreaChart.series"></apexchart>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
            <BaseCard noPadding class="text-center">
                <h4 class="card-title mt-3 font-semibold">5,767</h4>
                <p class="text-xs text-gray-400">Total Marketing</p>
                <apexchart type="area" height="100" :options="basiAreaChartTwo.chartOptions" :series="basiAreaChartTwo.series"></apexchart>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-4 lg:col-span-4 md:col-span-6">
            <BaseCard noPadding class="text-center">
                <h4 class="card-title mt-3 font-semibold">5,767</h4>
                <p class="text-xs text-gray-400">Total Marketing</p>
                <apexchart type="area" height="100" :options="basiAreaChartThree.chartOptions" :series="basiAreaChartThree.series"></apexchart>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <p class="text-gray-600 dark:text-gray-300">Storage Usage</p>
                <div class="my-4">
                    <p class="text-xl mb-1">50%</p>
                    <div class="shadow w-full bg-gray-100 rounded-full">
                        <div class="bg-primary text-xs leading-none py-1 text-center text-white rounded-full" style="width: 50%"></div>
                    </div>
                </div>
                <small class="text-xs text-gray-400">Most data used in Last 3 Days</small>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <p class="text-gray-600 dark:text-gray-300">Bandwith Usage</p>
                <div class="my-4">
                    <p class="text-xl mb-1">90%</p>
                    <div class="shadow w-full bg-gray-100 rounded-full">
                        <div class="bg-danger text-xs leading-none py-1 text-center text-white rounded-full" style="width: 90%"></div>
                    </div>
                </div>
                <small class="text-xs text-gray-400">Most data used in Last 3 Days</small>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <p class="text-gray-600 dark:text-gray-300">Data Usage</p>
                <div class="my-4">
                    <p class="text-xl mb-1">60%</p>
                    <div class="shadow w-full bg-gray-100 rounded-full">
                        <div class="bg-warning text-xs leading-none py-1 text-center text-white rounded-full" style="width: 60%"></div>
                    </div>
                </div>
                <small class="text-xs text-gray-400">Most data used in Last 3 Days</small>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <p class="text-gray-600 dark:text-gray-300">Data Usage</p>
                <div class="my-4">
                    <p class="text-xl mb-1">50%</p>
                    <div class="shadow w-full bg-gray-100 rounded-full">
                        <div class="bg-success text-xs leading-none py-1 text-center text-white rounded-full" style="width: 50%"></div>
                    </div>
                </div>
                <small class="text-xs text-gray-400">Most data used in Last 3 Days</small>
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p>Helpline</p>
                    <p class="text-2xl font-semibold">62%</p>
                </div>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p class="text-xs text-gray-500 dark:text-gray-400">26% higher than last year</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">30GB</p>
                </div>
                <div class="mb-4">
                    <div class="shadow w-full bg-gray-100 rounded-lg">
                        <div class="bg-success text-xs py-2 text-center text-white rounded-lg" style="width: 60%"></div>
                    </div>
                </div>
             
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p>Service</p>
                    <p class="text-2xl font-semibold">94%</p>
                </div>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p class="text-xs text-gray-500 dark:text-gray-400">26% higher than last year</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">30GB</p>
                </div>
                <div class="mb-4">
                    <div class="shadow w-full bg-gray-100 rounded-lg">
                        <div class="bg-warning text-xs py-2 text-center text-white rounded-lg" style="width: 90%"></div>
                    </div>
                </div>
             
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p>Email</p>
                    <p class="text-2xl font-semibold">120</p>
                </div>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p class="text-xs text-gray-500 dark:text-gray-400">26% higher than last year</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">30GB</p>
                </div>
                <div class="mb-4">
                    <div class="shadow w-full bg-gray-100 rounded-lg">
                        <div class="bg-primary text-xs py-2 text-center text-white rounded-lg" style="width: 45%"></div>
                    </div>
                </div>
             
            </BaseCard>
        </div>
        <div class="col-span-12 xl:col-span-3 lg:col-span-6 md:col-span-6">
            <BaseCard>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p>Territory</p>
                    <p class="text-2xl font-semibold">120</p>
                </div>
                <div class="flex flex-wrap items-center justify-between mb-3">
                    <p class="text-xs text-gray-500 dark:text-gray-400">26% higher than last year</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">30GB</p>
                </div>
                <div class="mb-4">
                    <div class="shadow w-full bg-gray-100 rounded-lg">
                        <div class="bg-danger text-xs py-2 text-center text-white rounded-lg" style="width: 45%"></div>
                    </div>
                </div>
             
            </BaseCard>
        </div>
        <div class="col-span-12">
            <BaseCard>
                <div class="flex justify-around flex-wrap">
                    <div class="text-center"><i class="i-Eye text-primary text-6xl m-0 p-0"></i>
                        <p class="font-semibold text-3xl mb-2">4,377</p>
                        <p class="text-gray-400 font-light">Viewers</p>
                    </div>
                    <div class="text-center"><i class="i-Like text-primary text-6xl m-0 p-0"></i>
                        <p class="font-semibold text-3xl mb-2">456</p>
                        <p class="text-gray-400 font-light">Likes</p>
                    </div>
                    <div class="text-center"><i class="i-File-Horizontal-Text text-danger text-6xl m-0 p-0"></i>
                        <p class="font-semibold text-3xl mb-2">4,377</p>
                        <p class="text-gray-400 font-light">Comments</p>
                    </div>
                    <div class="text-center"><i class="i-Business-Man text-warning text-6xl m-0 p-0"></i>
                        <p class="font-semibold text-3xl mb-2">20K</p>
                        <p class="text-gray-400 font-light">Views</p>
                    </div>
                </div>
             
            </BaseCard>
        </div>
      </div>
  </div>
  
</template>

