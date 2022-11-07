<template>
    <div class="hero-banner presentation-hero-style pv-hero-banner bg-image" id="intro">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="banner-content">
                        <span class="shape-line"><i class="icon-19"></i></span>
                        <span class="subtitle">when it comes to medicine</span>
                        <h1 class="title"> <span class="color-secondary">NaturalDrugs</span> - better, healthier, and safer than unnatural and <br>synthetic drugs. </h1>
                        <div class="banner-btn">
                            <a href="https://1.envato.market/rndVD5" target="_blank" class="edu-btn">Learn More <i class="icon-4"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="shape-group">
            <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/static/home/images/others/lear1.png" style="opacity:.5" />
            <MouseMove addClassName="shape-2" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/static/home/images/others/lear2.png" style="opacity:.5" />
            <MouseMove addClassName="shape-3" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/static/home/images/others/lear3.png" style="opacity:.5" />
            <MouseMove addClassName="shape-5" dataDepth="2" data-aos-delay="1000" data-aos="fade" data-aos-duration="1000" imgSrc="/static/home/images/others/lear4.png" style="opacity:.5" />
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