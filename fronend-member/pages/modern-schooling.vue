<template>
    <div id="main-wrapper" class="main-wrapper">
        
        <HeaderOne />

        <Banner />

        <Logo />

        <Categories />

        <Course />

        <FAQ />

        <FunFact />

        <Testimonial />

        <CTA />

        <Blog />

        <FooterTwo />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            Banner: () => import("@/components/home-modern-schooling/Banner"),
            Logo: () => import("@/components/home-modern-schooling/Logo"),
            Categories: () => import("@/components/home-modern-schooling/Categories"),
            Course: () => import("@/components/home-modern-schooling/Course"),
            FAQ: () => import("@/components/home-modern-schooling/FAQ"),
            FunFact: () => import("@/components/home-modern-schooling/FunFact"),
            Testimonial: () => import("@/components/home-modern-schooling/Testimonial"),
            CTA: () => import("@/components/home-modern-schooling/CTA"),
            Blog: () => import("@/components/home-modern-schooling/Blog"),
            FooterTwo: () => import("@/components/footer/FooterTwo")
        },
        head() {
            return {
                title: 'Modern Schooling'
            }
        }
    }
</script>

<style lang="scss">
    .testimonial-area-8 {
        .swiper-pagination {
            margin-top: -38px;
        }
    }
</style>