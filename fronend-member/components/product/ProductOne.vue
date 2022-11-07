<template>
    <div class="edu-product" :class="product.colorClass">
        <div class="inner">
            <div class="thumbnail">
                <n-link to="/shop/product-details">
                    <img :src="baseUrl + product.image" :alt="(product.title) + ' Thumbnail'" />
                </n-link>
                <div class="product-hover-info">
                    <ul>
                        <li><n-link to="/shop/product-details" role="button"><i class="icon-2"></i></n-link></li>
                        <li><n-link to="/shop/wishlist"><i class="icon-22"></i></n-link></li>
                        <li><n-link to="/shop/cart"><i class="icon-3"></i></n-link></li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <h6 class="title">
                    <n-link to="/shop/product-details">{{ product.title }}</n-link>
                </h6>
                <div class="product-rating">
                    <div class="rating">
                        <i class="icon-23" v-if="product.rating >= 1"></i>
                        <i class="icon-23" v-if="product.rating >= 2"></i>
                        <i class="icon-23" v-if="product.rating >= 3"></i>
                        <i class="icon-23" v-if="product.rating >= 4"></i>
                        <i class="icon-23" v-if="product.rating >= 5"></i>
                    </div>
                    <span class="rating-count">({{ product.rating }})</span>
                </div>
                <div class="price">${{ product.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import baseUrl from '@/core/config.js'
    export default {
        props: ['extraClass', 'product'],
        data() {
            return {
                baseUrl: baseUrl
            }
        },
        mounted() {
            console.log(this.baseUrl)
        }
    }
</script>

<style scoped>
.inner{
    border: 1px solid #ebebeb;
}
</style>