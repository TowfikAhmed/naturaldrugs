<template>
    <div class="edu-categorie-area categorie-area-4 edu-section-gap">
        <div class="container">
            <SectionTitle alignment="section-center" title='Top Categories' subTitle="Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore" />

            <div class="row g-5">
                <div 
                    class="col-lg-4 col-md-6" 
                    data-aos-delay="50" 
                    data-aos="fade-up" 
                    data-aos-duration="800"
                    v-for="(category, i) in categories" :key="i"
                >
                    <div class="categorie-grid categorie-style-4" :class="category.colorClass">
                        <div class="icon">
                            <i 
                                :class="[
                                    category.iconClass,
                                    category.extraClass ? category.extraClass : undefined
                                ]"
                            ></i>
                        </div>
                        <div class="content">
                            <n-link to="/course/course-one">
                                <h5 class="title">{{ category.title }}</h5>
                            </n-link>
                            <span class="course-count">{{ category.courses }}</span>
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
        },
        data () {
            return {
                categories: [
                    {
                        title: 'Business Management',
                        courses: '38 Courses',
                        iconClass: 'icon-9',
                        colorClass: 'color-primary-style'
                    },
                    {
                        title: 'Arts & Design',
                        courses: '25 Courses',
                        iconClass: 'icon-10',
                        colorClass: 'color-secondary-style',
                        extraClass: 'art-design'
                    },
                    {
                        title: 'Personal Development',
                        courses: '21 Courses',
                        iconClass: 'icon-11',
                        colorClass: 'color-extra01-style',
                        extraClass: 'personal-development'
                    },
                    {
                        title: 'Health & Fitness',
                        courses: '40 Courses',
                        iconClass: 'icon-12',
                        colorClass: 'color-tertiary-style',
                        extraClass: 'health-fitness'
                    },
                    {
                        title: 'Data Science',
                        courses: '55 Courses',
                        iconClass: 'icon-13',
                        colorClass: 'color-extra02-style',
                        extraClass: 'data-science'
                    },
                    {
                        title: 'Marketing',
                        courses: '42 Courses',
                        iconClass: 'icon-14',
                        colorClass: 'color-extra03-style'
                    },
                    {
                        title: 'Business & Finance',
                        courses: '17 Courses',
                        iconClass: 'icon-15',
                        colorClass: 'color-extra04-style'
                    },
                    {
                        title: 'Computer Science',
                        courses: '34 Courses',
                        iconClass: 'icon-16',
                        colorClass: 'color-extra05-style',
                        extraClass: 'computer-science'
                    },
                    {
                        title: 'Video & Photography',
                        courses: '67 Courses',
                        iconClass: 'icon-17',
                        colorClass: 'color-extra06-style',
                        extraClass: 'video-photography'
                    }
                ]
            }
        }
    }
</script>