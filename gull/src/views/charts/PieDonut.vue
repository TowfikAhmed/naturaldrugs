<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        simplePie,
        simpleDonut,
        monochromePie,
        gradientDonut,
        donutwithPattern
    } from "@/data/apexChart.js";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Donut" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Simple Pie</div>
                    <apexchart
                        type="pie"
                        width="100%"
                        :options="simplePie.chartOptions"
                        :series="simplePie.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Simple Donut</div>
                    <apexchart
                        type="donut"
                        width="100%"
                        :options="simpleDonut.chartOptions"
                        :series="simpleDonut.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Monochrome Pie(Number of leads)</div>
                    <apexchart
                    type="pie"
                    width="100%"
                    :options="monochromePie.chartOptions"
                    :series="monochromePie.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Gradient Donut</div>
                     <apexchart
                    type="donut"
                    width="100%"
                    :options="gradientDonut.chartOptions"
                    :series="gradientDonut.series"
                    />
                </BaseCard>
            </div>
            
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Donut with Pattern(Favourite Movie Type)</div>
                    <apexchart
                    type="donut"
                    width="100%"
                    :options="donutwithPattern.chartOptions"
                    :series="donutwithPattern.series"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>
