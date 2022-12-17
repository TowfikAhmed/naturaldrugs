<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import { simpleScatter, scatterDatetime } from "@/data/apexChart.js";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Scatter" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Simple Scatter Chart</div>
                    <apexchart
                        type="scatter"
                        height="350"
                        :options="simpleScatter.chartOptions"
                        :series="simpleScatter.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Scatter – Datetime Chart</div>
                    <apexchart
                        type="scatter"
                        height="350"
                        :options="scatterDatetime.chartOptions"
                        :series="scatterDatetime.series"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>
