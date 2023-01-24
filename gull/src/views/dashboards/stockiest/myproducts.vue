<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Ecommerce" subParentTitle="Product" />
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-12">
                <div
                    class="flex justify-center items-center flex-wrap lg:justify-between"
                >
                    <div class="mb-2 flex gap-1">
                        <BaseBtn
                            @click="isOpen = !isOpen"
                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center lg:hidden block"
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
                            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                            class="mr-2 border border-primary text-primary hover:bg-primary hover:text-white"
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
                                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                    <p class="text-primary font-bold mb-2">Your Cart </p>
                    <p class="my-3" v-if="cart.length == 0">Your Cart Is Empty!</p>
                    <div class="cart">
                        <div class="animate__animated animate__fadeInRight border-b pt-4 pb-2 rounded flex items-center gap-2 relative" v-for="pr in cart" :key="pr.id">
                            <div
                                @click="removeFromCart(pr)" 
                                class="absolute top-[10px] right-[-5px] cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-1 py-.5 text-center"
                                >
                                    <i class="nav-icon i-Remove-Cart text-base mr-2"></i>
                            </div>
                            <img :src="baseUrl+pr.productimage_set[0].thumbnail" alt="" class="h-[45px] w-[45px] rounded">
                            <div class="flex-1">
                                <h5 class="font-bold capitalize">{{pr.title}}</h5>
                                <div class="flex justify-between items-center text-gray-600">
                                    <div class="flex gap-1">
                                        <p>৳ {{pr.trade_price}}</p>
                                        <p>x</p>
                                        <input type="number" class="p-0 px-1 border rounded border-gray-200 m-0 w-[50px] h-[23px]" max="99" v-model="pr.qty">
                                    </div>
                                    <p>৳ {{pr.trade_price*pr.qty}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center my-5">
                        <BaseBtn class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center" block>
                            Checkout
                            <span class="bg-warning px-3 rounded py-3 text-white ml-3" >৳ {{cartTotal}}</span>
                        </BaseBtn>
                    </div>
                    
                </BaseCard>
            </div>
            <div class="ul-ecommerce-container">
                <div class="flex flex-wrap gap-5 mb-5">
                    <div
                        v-for="(item, index) in products"
                        :key="index"
                        class="max-w-[300px]"
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
                                <div class="flex justify-between flex-wrap gap-1" v-if="item.incart">
                                    <input type="number" class="rounded border border-gray-300 text-gray-300 hover:text-white mb-2" v-model="item.qty" min="0" max="99">
                                    <BaseBtn class="animate__animated animate__fadeInUp bg-gray-300 text-white mb-2 flex-1">
                                        <i class="nav-icon i-Checkout text-base mr-2"></i> Added
                                    </BaseBtn>
                                </div>
                                <div class="flex justify-between flex-wrap gap-1" v-else>
                                    <input type="number" class="rounded border border-primary text-primary hover:bg-primary hover:text-white my-.5" v-model="item.qty" min="0" max="99">
                                    <BaseBtn @click="addToCart(item)" class="animate__animated animate__fadeInUp animate_faster text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex-1">
                                        <i class="nav-icon i-Add-Cart text-base mr-2"></i> Add To Cart
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
            cart: [],
            cartTotal: 0.00,
            baseUrl: baseUrl,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false
            },
        }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts(){
            axios.get('/api/member/products/').then((response)=>{
                console.log(response);
                this.products = response.data;
                this.products.forEach(element => {
                    element.qty = 1;
                    element.incart = false;
                });
            })
        },
        addToCart(pr){
            pr.incart = true;
            this.cart.push(pr)
        },
        removeFromCart(pr){
            pr.incart = false;
            this.cart = this.cart.filter((item) => item.id !== pr.id);
        },
    },
    computed: {
        cartTotal(){
            let total = 0;
            this.cart.forEach(element => {
                total += element.qty * element.trade_price;
            });
            return total;
        }
    }
}
</script>

<style scoped>
.ul-ecommerce-sidebar{
    width: 360px;
}
.productImage{
    max-height: 220px;
    width: 100%;
    object-fit: cover;
}
</style>