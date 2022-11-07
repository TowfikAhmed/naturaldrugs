<template>
    <div class="edu-blog blog-style-1">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/blog/blog-details">
                    <img :src="'/images/blog/blog-three/' + blogInfo.imgSrc" :alt="blogInfo.alt">
                </n-link>
                <span class="date">{{ blogInfo.date }}</span>
            </div>
            <div class="content position-top">
                <div class="read-more-btn">
                    <n-link to="/blog/blog-details" class="btn-icon-round">
                        <i class="icon-4"></i>
                    </n-link>
                </div>
                <div class="category-wrap">
                    <n-link to="/blog/blog-masonry" class="blog-category">{{ blogInfo.category }}</n-link>
                </div>
                <h5 class="title"><n-link to="/blog/blog-details">{{ blogInfo.title }}</n-link></h5>
                <p>{{ blogInfo.excerpt.substring(0,52)+"..." }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['blogInfo']
    }
</script>