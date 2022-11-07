<template>
    <div class="hero-banner hero-style-8">
        <div class="container edublink-animated-shape">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title">Find Your Best <br> Courses to <span class="color-secondary">Develop</span> <br>your skills</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-search">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="What do you want learn?">
                                <button class="search-btn" type="button"><i class="icon-2"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="banner-thumbnail">
                        <div class="thumbnail" data-aos-delay="500" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/images/banner/home8-vactor-bg.webp" alt="vector Image">
                        </div>
                        <div class="instructor-info" data-aos-delay="600" data-aos="fade-up" data-aos-duration="1000">
                            <div class="inner">
                                <h5 class="title">Instrunctor</h5>
                                <div class="media">
                                    <div class="thumb">
                                        <img src="/images/banner/author-1.png" alt="Images">
                                    </div>
                                    <div class="content">
                                        <span>200+</span> Instactors
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul class="shape-group">
                            <li class="shape-1" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000">
                                <img src="/images/others/shape-30.png" alt="Shape" />
                            </li>
                            <MouseMove addClassName="shape-2" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-31.png" />
                            <MouseMove addClassName="shape-3 shape-light" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/shape-09.png" />
                            <MouseMove addClassName="shape-3 shape-dark" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/dark-shape-09.png" />
                            <MouseMove addClassName="shape-4 shape-light" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/shape-13.png" />
                            <MouseMove addClassName="shape-4 shape-dark" dataDepth="-2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/faq/dark-shape-13.png" />
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="shape-group">
                <li class="shape-5">
                    <span></span>
                </li>
                <MouseMove addClassName="shape-6" dataDepth="1.2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/images/others/shape-32.png" />
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            MouseMove: () => import('@/components/animation/MouseMove')
        }
    }
</script>
