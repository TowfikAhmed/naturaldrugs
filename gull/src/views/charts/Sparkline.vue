<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        spark1,
        spark2,
        spark3,
        spark4,
        spark5,
        spark6,
        spark7,
        spark8,
        spark9,
        spark10
    } from "@/data/apexChart";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Sparkline" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="area"
                    height="160"
                    :options="spark1.chartOptions"
                    :series="spark1.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="area"
                    height="160"
                    :options="spark2.chartOptions"
                    :series="spark2.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="area"
                    height="160"
                    :options="spark3.chartOptions"
                    :series="spark3.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="line"
                    height="160"
                    :options="spark4.chartOptions"
                    :series="spark4.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="line"
                    height="160"
                    :options="spark5.chartOptions"
                    :series="spark5.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="line"
                    height="160"
                    :options="spark6.chartOptions"
                    :series="spark6.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="line"
                    height="160"
                    :options="spark7.chartOptions"
                    :series="spark7.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="bar"
                    height="160"
                    :options="spark7.chartOptions"
                    :series="spark7.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="bar"
                    height="160"
                    :options="spark8.chartOptions"
                    :series="spark8.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="bar"
                    height="160"
                    :options="spark9.chartOptions"
                    :series="spark9.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-3 md:col-span-4 sm:col-span-6">
                <BaseCard noPadding class="pt-4">
                    <apexchart
                    type="bar"
                    height="160"
                    :options="spark10.chartOptions"
                    :series="spark10.series"
                    />
                </BaseCard>
            </div>
            
        </div>
    </div>
</template>


