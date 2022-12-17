<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        basicRadar,
        radarMultiSeries,
        radarwithPolygonFill
    } from "@/data/apexChart.js";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Radar" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Basic Radar Chart</div>
                    <apexchart
                        type="radar"
                        height="365"
                        :options="basicRadar.chartOptions"
                        :series="basicRadar.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Basic Radar Chart</div>
                    <BaseBtn class="bg-primary text-white updateRadar mt-2">Update</BaseBtn>
                    <apexchart
                    type="radar"
                    height="329"
                    :options="radarMultiSeries.chartOptions"
                    :series="radarMultiSeries.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Basic Radar Chart</div>
                    
                    <apexchart
                    type="radar"
                    height="365"
                    :options="radarwithPolygonFill.chartOptions"
                    :series="radarwithPolygonFill.series"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>
