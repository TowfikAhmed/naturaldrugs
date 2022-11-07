<template>
    <div class="edu-categorie-area categorie-area-1 edu-section-gap">
        <div class="container">
            <SectionTitle alignment="section-center" preTitle='CATEGORIES' preTitleClass="pre-textsecondary" title='Online <span class="color-primary">Classes</span> For Remote Learning.' subTitle="Consectetur adipiscing elit sed do eiusmod tempor." />

            <div class="row g-5">
                <div class="col-lg-3 col-sm-6" data-aos-delay="100" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-primary-style edublink-svg-animate">
                        <div class="icon">
                            <inline-svg src="/images/animated-svg-icons/online-degree.svg" alt="Online Degree" />
                        </div>
                        <div class="content">
                            <n-link to="/course/course-one"><h5 class="title">Online Degree Programs</h5></n-link>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">7 Courses</div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6" data-aos-delay="200" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-secondary-style edublink-svg-animate">
                        <div class="icon">
                            <inline-svg src="/images/animated-svg-icons/non-degree-programs.svg" alt="Non-Degree Programs" />
                        </div>
                        <div class="content">
                            <n-link to="/course/course-one"><h5 class="title">Non-Degree Programs</h5></n-link>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">4 Courses</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="300" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-extra08-style edublink-svg-animate">
                        <div class="icon">
                            <inline-svg src="/images/animated-svg-icons/off-campus-programs.svg" alt="Off-Campus Programs" />
                        </div>
                        <div class="content">
                            <n-link to="/course/course-one"><h5 class="title">Off-Campus Programs</h5></n-link>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">8 Courses</div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6" data-aos-delay="400" data-aos="fade-up" data-aos-duration="800">
                    <div class="categorie-grid categorie-style-1 color-extra05-style edublink-svg-animate">
                        <div class="icon">
                            <inline-svg src="/images/animated-svg-icons/hybrid-distance-programs.svg" alt="Hybrid Distance Programs" />
                        </div>
                        <div class="content">
                            <n-link to="/course/course-one"><h5 class="title">Hybrid Distance Programs</h5></n-link>
                            <p>Lorem ipsum dolor consec tur elit adicing sed umod tempor.</p>
                            <div class="course-remain">8 Courses</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            SectionTitle: () => import('@/components/common/SectionTitle')
        }
    }
</script>