

<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        lineColumn,
        multipleYxis,
        lineArea,
        lineColumnArea
    } from "@/data/apexChart.js";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Mix" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Line Column (Traffic Sources)</div>
                    <apexchart
                        type="line"
                        height="350"
                        :options="lineColumn.chartOptions"
                        :series="lineColumn.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Multiple Y-Axis(XYZ - Stock Analysis (2009 - 2016))</div>
                    <apexchart
                        type="line"
                        height="350"
                        :options="multipleYxis.chartOptions"
                        :series="multipleYxis.series"
                    />
                </BaseCard>
            </div>
           
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Line & Area(Team A VS Team B)</div>
                    <apexchart
                        type="line"
                        height="350"
                        :options="lineArea.chartOptions"
                        :series="lineArea.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Line Column Area</div>
                    <apexchart
                    type="line"
                    height="350"
                    :options="lineColumnArea.chartOptions"
                    :series="lineColumnArea.series"
                    />
                </BaseCard>
            </div>
            
        </div>
    </div>
</template>
