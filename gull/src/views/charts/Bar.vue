<script setup>
    import Breadcrumbs from '@/components/Breadcrumbs.vue'
    import {
        basicBarChart,
        groupedBar,
        stackedbar,
        negativeBar,
        customDataLabelBar,
        patternedBar
    } from "@/data/apexChart";
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Charts" subParentTitle="Bar" />
         <div class="grid grid-cols-12 gap-5">
             <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Basic Bar Chart</div>
                    <apexchart
                        type="bar"
                        height="350"
                        :options="basicBarChart.chartOptions"
                        :series="basicBarChart.series"
                    />
                </BaseCard>
             </div>
             <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Grouped Bar</div>
                    <apexchart
                    type="bar"
                    height="350"
                    :options="groupedBar.chartOptions"
                    :series="groupedBar.series"
                    />
                </BaseCard>
             </div>
              <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Stacked Bars(Fiction Books Sales)</div>
                    <apexchart
                    type="bar"
                    height="350"
                    :options="stackedbar.chartOptions"
                    :series="stackedbar.series"
                    />
                </BaseCard>
             </div>
              <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Bar with Negative Values(Mauritius population pyramid 2011)</div>
                    <apexchart
                    type="bar"
                    height="350"
                    :options="negativeBar.chartOptions"
                    :series="negativeBar.series"
                    />
                </BaseCard>
             </div>
              <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Bar with Negative Values(Mauritius population pyramid 2011)</div>
                    <apexchart
                    type="bar"
                    height="350"
                    :options="customDataLabelBar.chartOptions"
                    :series="customDataLabelBar.series"
                    />
                </BaseCard>
             </div>
              <div class="col-span-12 lg:col-span-6 sm:col-span-6">
                <BaseCard>
                    <div class="card-title">Bar with Negative Values(Mauritius population pyramid 2011)</div>
                    <apexchart
                    type="bar"
                    height="350"
                    :options="patternedBar.chartOptions"
                    :series="patternedBar.series"
                    />
                </BaseCard>
             </div>





         </div>
         
         
    </div>
</template>

