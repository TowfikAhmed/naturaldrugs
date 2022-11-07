<template>
    <div class="hero-banner university-banner-section bg-image bg-image--17">
        <div class="container edublink-animated-shape">
            <div class="row">
                <div class="col-xl-6 col-lg-7">
                    <div class="banner-content">
                        <span class="subtitle">Welcome to EduBlink</span>
                        <h1 class="title">World Best Program Best University</h1>
                        <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.</p>
                        <div class="banner-btn">
                            <n-link to="/course/course-one" class="edu-btn btn-secondary">Find courses <i class="icon-4"></i></n-link>
                        </div>
                    </div>
                </div>
            </div>

            <ul class="shape-group">
                <MouseMove addClassName="shape-1" dataDepth="2" data-aos-delay="200" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-10.png" />
                <MouseMove addClassName="shape-2" dataDepth="-3" data-aos-delay="200" data-aos="fade" data-aos-duration="200" imgSrc="/images/others/shape-11.png" />
                <li class="shape-3">
                    <img src="/images/others/shape-25.png" alt="Shape">
                </li>
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

<style lang="scss">
    .university-banner-section {
        min-height: 715px;
        position: relative;
        z-index: 1;
        mask-image: url('/images/others/mask-01.png');
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: cover;
        -webkit-mask-position: center;
        @media #{$md-layout} {
            min-height: 100%;
            padding: 100px 0 55px;
        }
        @media #{$sm-layout} {
            min-height: 100%;
            padding: 80px 0 35px;
        }
        &:before {
            content: "";
            height: 100%;
            width: 100%;
            background: linear-gradient( 90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: -1;
        }
        .banner-content {
            padding-bottom: 110px;
            .title {
                color: var(--color-white);
                font-weight: var(--p-extra-bold);
            }
            p {
                color: var(--color-white);
                font-size: 18px;
            }
        }
        .shape-group {
            list-style: none;
            margin: 0;
            padding: 0;
            @media #{$md-layout} {
                display: none;
            }
            @media #{$sm-layout} {
                display: none;
            }
            li {
                margin: 0;
                position: absolute;
                z-index: -1;
                &.shape-1 {
                    top: -122px;
                    left: -207px;
                } 
                &.shape-2 {
                    top: -108px;
                    left: 142px;
                }
                &.shape-3 {
                    top: -410px;
                    left: -516px;
                }
            }
        }
    }
</style>