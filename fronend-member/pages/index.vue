<template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderLanding />

        <Banner />

        <section class="shop-page-area section-gap-equal" v-if="productsData">
            <div class="container">
                <div class="edu-sorting-area">
                    <div class="sorting-left">
                        <h6 class="showing-text">We found <span>{{ productsData.results.length }}</span> product available for you</h6>
                    </div>
                    <div class="sorting-right">
                        <div class="edu-sorting">
                            <div class="icon"><i class="icon-55"></i></div>
                            <select class="edu-select">
                                <option>Filters</option>
                                <option>Low To High</option>
                                <option>High Low To</option>
                                <option>Last Viewed</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="row g-5">
                    <div 
                        class="col-lg-3 col-md-4 col-sm-6" 
                        v-for="product in productsData.results" 
                        :key="product.id"
                    >
                        <ProductOne :product="product" />
                    </div>
                </div>

                <PaginationOne />
            </div>
        </section>
        <Testimonial />
        <FunFact2 />
        <FAQ />
        <FunFact />
        <FooterTwo />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderLanding: () => import("@/components/header/HeaderLanding"),
            Banner: () => import("@/components/home-landing-demo/Banner"),
            ProductOne: () => import('@/components/product/ProductOne'),
            PaginationOne: () => import("@/components/common/PaginationOne"),
            Testimonial: () => import("@/components/home-modern-schooling/Testimonial"),
            FunFact2: () => import("@/components/home-yoga-instructor/FunFact"),
            FAQ: () => import("@/components/home-distant-learning/FAQ"),
            FunFact: () => import("@/components/home-landing-demo/FunFact"),
            FooterTwo: () => import("@/components/footer/FooterTwo"),
        },
        head() {
            return {
                title: 'Landing Demo'
            }
        },
        data () {
            return {
                productsData: null,
            }
        },
        mounted() {
            this.getProducts();
        },
        methods: {
            getProducts() {
                // axios 
                this.$axios.get('home/products')
                    .then(response => {
                        this.productsData = response.data;
                        console.log(response.data);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        }
    }
</script>