<template>
    <div class="modern-schooling-cta-wrapper edu-cta-banner-area-6 bg-image">
        <div class="container">
            <div class="edu-cta-banner">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <div class="thumbnail">
                            <img src="/images/cta/cta-girl-bg.webp" alt="girl image">
                        </div>
                        <ul class="shape-group">
                            <MouseMove addClassName="shape-01" dataDepth="2.5" imgSrc="/images/cta/shape-43.png" />
                            <li class="shape-02">
                                <img src="/images/cta/shape-42.png" alt="shape">
                            </li>
                            <MouseMove addClassName="shape-03" dataDepth="-2" imgSrc="/images/cta/shape-40.png" />
                            <MouseMove addClassName="shape-04" dataDepth="2" imgSrc="/images/cta/shape-38.png" />
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <div class="section-title section-left" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
                            <h2 class="title">Get Your Quality <br> Skills Certificate Through <br> EduBlink</h2>
                            <n-link to="/contact-us" class="edu-btn btn-secondary">Get started now <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove addClassName="shape-05" dataDepth="1.5" imgSrc="/images/cta/shape-39.png" />
                    <li class="shape-06">
                        <img src="/images/cta/cta-round.svg" alt="shape">
                    </li>
                </ul>
            </div>
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