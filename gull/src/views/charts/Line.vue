<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        basicLineChart,
        lineChartWIthDataLabel,
        gradientLineChart,
        dashedLineChart,
        brushLineChart
    } from "@/data/apexChart";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Line" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Basic line chart(Product Trends by Month)</div>
                    <apexchart
                        type="line"
                        height="350"
                        :options="basicLineChart.chartOptions"
                        :series="basicLineChart.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Line with data Label(Average High & Low Temperature)</div>
                    <apexchart
                    type="line"
                    height="350"
                    :options="lineChartWIthDataLabel.chartOptions"
                    :series="lineChartWIthDataLabel.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Gradient Line Chart(Social Media)</div>
                    <apexchart
                        type="line"
                        height="350"
                        :options="gradientLineChart.chartOptions"
                        :series="gradientLineChart.series"
                        />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Dashed Line Chart(Page Statistics)</div>
                    <apexchart
                    type="line"
                    height="350"
                    :options="dashedLineChart.chartOptions"
                    :series="dashedLineChart.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-12 sm:col-span-12">
                <BaseCard>
                    <div class="card-title">Brush Line chart</div>
                    <apexchart
                    type="line"
                    height="230"
                    :options="brushLineChart.chartOptionsArea"
                    :series="brushLineChart.series"
                    />
                    <apexchart
                    type="area"
                    height="130"
                    :options="brushLineChart.chartOptionsBrush"
                    :series="brushLineChart.series"
                    />
                </BaseCard>
            </div>




        </div>
    </div>
</template>
