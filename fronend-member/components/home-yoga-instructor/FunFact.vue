<template>
    <div class="counterup-area-6">
        <div class="container">
            <div class="row g-5">
                <div class="col-12 col-lg-3 col-md-6 col-sm-6" v-for="(counter, i) in funFacts" :key="i">
                    <div class="edu-counterup counterup-style-6" :class=" i % 3 === 0 && i !== 0 ? 'border-none' : undefined">
                        <div class="icon">
                            <i :class="counter.iconClass"></i>
                        </div>
                        <h2 class="counter-item count-number">
                            <FunFact :number="counter.number" :decimal="counter.decimal" :suffix="counter.suffix" />
                        </h2>
                        <h6 class="title">{{ counter.title }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: { 
            FunFact: () => import('@/components/FunFact')
        },
        data () {
            return {
                funFacts: [
                    {
                        number: 29.3,
                        decimal: 1,
                        iconClass: 'icon-77',
                        title: 'Healthy Customers',
                        suffix: 'K'
                    },
                    {
                        number: 32.4,
                        decimal: 1,
                        iconClass: 'icon-78',
                        title: 'Natural Drugs',
                        suffix: 'K'
                    },
                    {
                        number: 100,
                        decimal: null,
                        iconClass: 'icon-79',
                        title: 'SATISFACTION RATE',
                        suffix: '%'
                    },
                    {
                        number: 354,
                        decimal: null,
                        iconClass: 'icon-80',
                        title: 'TOP INSTRUCTORS',
                        suffix: '+'
                    }
                ]
            }
        }
    }
</script>