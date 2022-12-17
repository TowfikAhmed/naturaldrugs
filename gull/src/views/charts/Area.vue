<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        apexDemo,
        basicArea,
        splineArea,
        dateTimeXaxis,
        negativeArea,
        stackedArea,
        nullAreaChart
    } from "@/data/apexChart"

</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Area" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Basic Area chart(Fundamental Analysis of Stocks)</div>
                    <apexchart
                        type="area"
                        height="350"
                        :options="basicArea.chartOptions"
                        :series="basicArea.chartOptions.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Spline Area</div>
                    <apexchart
                        type="area"
                        height="350"
                        :options="splineArea.chartOptions"
                        :series="splineArea.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Spline Area</div>
                    <apexchart
                    type="area"
                    height="350"
                    :options="dateTimeXaxis.chartOptions"
                    :series="dateTimeXaxis.series"
                    />
                </BaseCard>
            </div>
           
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Area with Negative Values</div>
                    <apexchart
                    type="area"
                    height="350"
                    width="100%"
                    :options="negativeArea.chartOptions"
                    :series="negativeArea.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Stacked Area</div>
                    <apexchart
                    type="area"
                    height="350"
                    :options="stackedArea.chartOptions"
                    :series="stackedArea.chartOptions.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Missing / Null values Area Chart(Network Monitoring)</div>
                    <apexchart
                    type="area"
                    height="350"
                    :options="nullAreaChart.chartOptions"
                    :series="nullAreaChart.series"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>
