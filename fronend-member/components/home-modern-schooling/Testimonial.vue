<template>
    <div class="testimonial-area-8 section-gap-equal">
        <div class="container edublink-animated-shape">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <SectionTitle preTitle='Testimonials' title='What Our Customers <br> Have To Say' alignment='section-center' />
                </div>
            </div>

            <swiper class="testimonial-activation swiper" :options="swiperOptions">
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="author-info">
                                <div class="thumb">
                                    <img src="/static/home/images/testimonial/testimonial-08.png" alt="Testimonial">
                                </div>
                            </div>
                            <p>The use of natural drugs has been on the rise in recent years. This is likely due to the increase in public awareness of the dangers of prescription drugs, as well as the availability of natural alternatives.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                            <div class="info">
                                <h5 class="title">Ray Sanchez</h5>
                                <span class="subtitle">Student</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="author-info">
                                <div class="thumb">
                                    <img src="/static/home/images/testimonial/testimonial-08.png" alt="Testimonial">
                                </div>
                            </div>
                            <p>There are many benefits to using natural drugs. They are often more effective than prescription drugs, with fewer side effects. They are also less expensive and more readily available.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                            <div class="info">
                                <h5 class="title">Thomas Lopez</h5>
                                <span class="subtitle">Designer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="author-info">
                                <div class="thumb">
                                    <img src="/static/home/images/testimonial/testimonial-08.png" alt="Testimonial">
                                </div>
                            </div>
                            <p>However, there are also some risks associated with natural drugs. They are not regulated by the FDA, so there is no guarantee of their safety or effectiveness. In addition, some natural drugs can interact with prescription medications.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                            <div class="info">
                                <h5 class="title">Amber Page</h5>
                                <span class="subtitle">Developer</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="testimonial-slide">
                        <div class="content">
                            <div class="author-info">
                                <div class="thumb">
                                    <img src="/static/home/images/testimonial/testimonial-08.png" alt="Testimonial">
                                </div>
                            </div>
                            <p>Lorem ipsum dolor amet consec tur elit adicing sed do usmod zx tempor enim minim veniam quis nostrud exer citation.</p>
                            <div class="rating-icon">
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                                <i class="icon-23"></i>
                            </div>
                            <div class="info">
                                <h5 class="title">James Flowers</h5>
                                <span class="subtitle">Manager</span>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper>
            <div class="swiper-pagination text-center"></div>
        </div>

        <ul class="shape-group">
            <li class="shape-3" data-aos-delay="200" data-aos="fade" data-aos-duration="1000">
                <img class="d-block-shape-light" data-depth="2" src="/static/home/images/others/map-shape-3.png" alt="Shape">
                <img class="d-none-shape-dark" data-depth="2" src="/static/home/images/others/dark-map-2-shape-3.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        },
        data () {
            return {
                swiperOptions: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    grabCursor: true,
                    speed: 1000,
                    autoplay: {
                        delay: 3000
                    },
                    breakpoints: {
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        }
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true
                    }
                }
            }
        }
    }
</script>