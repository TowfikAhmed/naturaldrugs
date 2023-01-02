<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { baseUrl } from '@/config/main.js'
import axios from 'axios'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
export default {
    components:{
        breadcrumbs: Breadcrumbs,
        Swiper,
        SwiperSlide,
    },
    data(){
        return {
            isOpen: false,
            products: "",
            baseUrl: baseUrl
        }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts(){
            axios.get('/api/member/products/').then((response)=>{
                console.log(response);
                this.products = response.data
            })
        }
    }
}
</script>

<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Ecommerce" subParentTitle="Product" />
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-12">
                <div
                    class="flex justify-center items-center flex-wrap lg:justify-between"
                >
                    <div class="mb-2 flex">
                        <BaseBtn
                            @click="isOpen = !isOpen"
                            class="mr-2 bg-rose-500 text-white ul-ecommerce-toggle-button lg:hidden block"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </BaseBtn>
                        <BaseBtn
                            rounded
                            class="mr-2 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                />
                            </svg>
                        </BaseBtn>
                        <BaseBtn
                            rounded
                            class="mr-2 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                />
                            </svg>
                        </BaseBtn>
                    </div>
                    <div class="mb-2">
                        <form class="flex">
                            <input
                                class="rounded-l-lg p-3 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
                                placeholder="Search..."
                            />
                            <button
                                role="button"
                                class="px-4 bg-rose-500 text-white rounded-r-lg border-t border-b border-r focus:outline-none"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="ul-ecommerce-wrapper relative">
            <div class="ul-ecommerce-sidebar" :class="isOpen ? 'open' : ''">
                <BaseCard>
                    <div class="text-center mb-5">
                        <BaseBtn class="bg-rose-500 text-white" block>
                            View Cart
                            <span
                                class="bg-warning px-3 rounded py-1 text-white ml-3"
                                >0</span
                            >
                        </BaseBtn>
                    </div>
                    <P class="text-rose-500 font-bold mb-2">Price </P>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-radio bg-gray-200 border border-gray-200 text-rose-500"
                                type="radio"
                                name="accountType"
                                value="personal"
                            /><span class="ml-2">Low To High</span>
                        </label>
                    </div>
                    <div class="mb-5">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-radio bg-gray-200 border border-gray-200 text-rose-500"
                                type="radio"
                                name="accountType"
                                value="personal"
                            /><span class="ml-2">High To Low</span>
                        </label>
                    </div>
                    <P class="text-rose-500 font-bold mb-2">Category </P>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-radio bg-gray-200 border border-gray-200 text-rose-500"
                                type="radio"
                                name="accountType"
                                value="personal"
                            /><span class="ml-2">Mobile</span>
                        </label>
                    </div>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-radio bg-gray-200 border border-gray-200 text-rose-500"
                                type="radio"
                                name="accountType"
                                value="personal"
                            /><span class="ml-2">Speaker</span>
                        </label>
                    </div>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-radio bg-gray-200 border border-gray-200 text-rose-500"
                                type="radio"
                                name="accountType"
                                value="personal"
                            /><span class="ml-2">Furniture</span>
                        </label>
                    </div>
                    <div class="mb-5">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-radio bg-gray-200 border border-gray-200 text-rose-500"
                                type="radio"
                                name="accountType"
                                value="personal"
                            /><span class="ml-2">Watch</span>
                        </label>
                    </div>
                    <P class="text-rose-500 font-bold mb-2">Brand </P>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200"
                                type="checkbox"
                            /><span class="ml-2">apple(3)</span>
                        </label>
                    </div>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200"
                                type="checkbox"
                            /><span class="ml-2">Huwaei(1)</span>
                        </label>
                    </div>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200"
                                type="checkbox"
                            /><span class="ml-2">sony(3)</span>
                        </label>
                    </div>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200"
                                type="checkbox"
                            /><span class="ml-2">samsung(2)</span>
                        </label>
                    </div>
                    <div class="mb-1">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200"
                                type="checkbox"
                            /><span class="ml-2">xiaomi(2)</span>
                        </label>
                    </div>
                    <div class="mb-5">
                        <label class="inline-flex items-center cursor-pointer">
                            <input
                                class="form-checkbox rounded text-rose-500 border border-gray-200 bg-gray-200"
                                type="checkbox"
                            /><span class="ml-2">asus(2)</span>
                        </label>
                    </div>
                </BaseCard>
            </div>
            <div class="ul-ecommerce-container">
                <div class="grid grid-cols-12 gap-5 mb-5">
                    <div
                        v-for="(item, index) in products"
                        :key="index"
                        class="col-span-6 xl:col-span-3 md:col-span-4"
                    >
                        <BaseCard noPadding class="overflow-hidden relative">
                            <swiper
                                :slides-per-view="1"
                                :space-between="50"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                                :autoplay="{
                                    delay: 2000,
                                }"
                                :loop="true"
                              > 
                                <swiper-slide>
                                    <img :src="baseUrl+ item.productimage_set[0].image" class="productImage" />
                                </swiper-slide>

                                <swiper-slide>
                                    <img :src="baseUrl+ item.productimage_set[1].image" class="productImage" />
                                </swiper-slide>
                            </swiper>
                            <div class="p-5">
                                <div class="mb-1">
                                    <a
                                        class="text-gray-600 dark:text-gray-300"
                                        href="#"
                                        >Price: {{item.trade_price}} | MRP: {{item.mrp}}</a
                                    >
                                </div>
                                <p class="font-semibold mb-4">{{item.title}}</p>
                                <div class="flex justify-between">
                                    <div class="flex mb-2">
                                        <svg
                                            v-for="(i, index) in 5"
                                            :key="index"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-5 w-5 text-yellow-400"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                            />
                                        </svg>
                                    </div>
                                    <p class="font-bold text-base mb-5">MRP: {{item.mrp}}</p>
                                </div>
                                <div class="flex justify-between flex-wrap">
                                    <BaseBtn class="bg-rose-500 text-white mb-2">
                                        Add Cart
                                    </BaseBtn>
                                    <BaseBtn
                                        class="border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white mb-2"
                                    >
                                        View Cart
                                    </BaseBtn>
                                </div>
                            </div>
                        </BaseCard>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.productImage{
    max-height: 220px;
    width: 100%;
    object-fit: cover;
}
</style>