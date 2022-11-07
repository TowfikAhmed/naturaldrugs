<template>
    <div class="hero-banner hero-style-7">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="banner-content">
                        <h1 class="title">A Brighter Future For Kids</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn btn-curved">Find courses <i class="icon-4"></i></n-link>
                        </div>

                        <div class="features-list">
                            <div class="features-box color-extra02-style edublink-svg-animate">
                                <div class="icon">
                                    <inline-svg src="/images/animated-svg-icons/online-class.svg" alt="Online Courses" />
                                </div>
                                <div class="content">
                                    <h5 class="title">3,020 <br>Online Courses</h5>
                                </div>
                            </div>
                            <div class="features-box color-secondary-style edublink-svg-animate">
                                <div class="icon">
                                    <inline-svg src="/images/animated-svg-icons/instructor.svg" alt="Instructors" />
                                </div>
                                <div class="content">
                                    <h5 class="title">Top <br>Instructors</h5>
                                </div>
                            </div>
                            <div class="features-box color-primary-style edublink-svg-animate">
                                <div class="icon">
                                    <inline-svg src="/images/animated-svg-icons/certificate.svg" alt="Certificates" />
                                </div>
                                <div class="content">
                                    <h5 class="title">Online <br> Certificates </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="banner-gallery">
            <div class="thumbnail thumbnail-1" data-aos-delay="500" data-aos="fade-up" data-aos-duration="1000">
                <img src="/images/banner/kid-3.webp" alt="Kid Image">
            </div>
            <div class="thumbnail thumbnail-2" data-aos-delay="500" data-aos="fade-down" data-aos-duration="1000">
                <img src="/images/banner/kid-4.webp" alt="Kid Image">
            </div>
        </div>

        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/banner/icon-3.png" />
            <MouseMove addClassName="shape-2" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/banner/icon-1.png" />
            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/banner/icon-5.png" />
            <MouseMove addClassName="shape-4" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/banner/icon-2.png" />
            <MouseMove addClassName="shape-5" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/banner/icon-4.png" />
            <li class="shape-6" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                <img class="rotateit" src="/images/about/shape-25.png" alt="Shape">
            </li>
            <li class="shape-7" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                <img class="rotateit" src="/images/about/shape-13.png" alt="Shape">
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>