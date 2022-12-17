<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
    basicColumnChart,
    columnDataLabels,
    stackedColumn,
    negativeColumn,
    distributedColumnChart
    } from "@/data/apexChart";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Column" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Basic Column chart</div>
                    <apexchart
                        type="bar"
                        height="350"
                        :options="basicColumnChart.chartOptions"
                        :series="basicColumnChart.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Column with Data Labels</div>
                    <apexchart
                        type="bar"
                        height="350"
                        :options="columnDataLabels.chartOptions"
                        :series="columnDataLabels.series"
                        />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Stacked Columns</div>
                    <apexchart
              type="bar"
              height="350"
              :options="stackedColumn.chartOptions"
              :series="stackedColumn.series"
            />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Column with Negative Values</div>
                    <apexchart
              type="bar"
              height="350"
              :options="negativeColumn.chartOptions"
              :series="negativeColumn.series"
            />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Distributed Columns</div>
                   <apexchart
                    type="bar"
                    height="350"
                    :options="distributedColumnChart.chartOptions"
                    :series="distributedColumnChart.chartOptions.series"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>
