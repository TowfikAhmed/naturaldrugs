<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        simpleRadialBar,
        multipleRadialBar,
        customAngleCircleChart,
        gradientRadial,
        strokedangularGauge,
        semiCircleGauge
    } from "@/data/apexChart.js";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Radial Bar" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Simple Radial Bar</div>
                    <apexchart
                        type="radialBar"
                        height="350"
                        :options="simpleRadialBar.chartOptions"
                        :series="simpleRadialBar.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Multiple Radial Bar</div>
                    <apexchart
                        type="radialBar"
                        height="350"
                        :options="multipleRadialBar.chartOptions"
                        :series="multipleRadialBar.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Custom Angle Circle Chart</div>
                    <apexchart
                        type="radialBar"
                        height="350"
                        :options="customAngleCircleChart.chartOptions"
                        :series="customAngleCircleChart.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Gradient Radial Bar</div>
                    <apexchart
                        type="radialBar"
                        height="350"
                        :options="gradientRadial.chartOptions"
                        :series="gradientRadial.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Gradient Radial Bar</div>
                    <apexchart
                    type="radialBar"
                    height="370"
                    :options="strokedangularGauge.chartOptions"
                    :series="strokedangularGauge.series"
                    />
                </BaseCard>
            </div>
            <div class="col-span-12 lg:col-span-4 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Stroked Angular Gauge</div>
                    <apexchart
                        type="radialBar"
                        height="350"
                        :options="semiCircleGauge.chartOptions"
                        :series="semiCircleGauge.series"
                    />
                </BaseCard>
            </div>
        </div>
    </div>
</template>
