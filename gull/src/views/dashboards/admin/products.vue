<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Ecommerce" subParentTitle="Product" />
        <div class="grid grid-cols-12 gap-5 mb-5">
            <div class="col-span-12">
                <div
                    class="flex justify-center items-center flex-wrap lg:justify-between"
                >
                    <div class="mb-2 flex">
                        <router-link tag="a" to="/dashboards/admin/addproduct">
                            <BaseBtn
                                rounded
                                class="mr-2 my-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            >
                                <i class="text-lg i-Add"></i>
                            </BaseBtn>
                        </router-link>
                        <BaseBtn
                            @click="isOpen = !isOpen"
                            class="mr-2 my-1 lg:hidden block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                            class="mr-2 my-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
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
                            class="mr-2 my-1 border border-primary text-primary hover:bg-primary hover:text-white"
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
                    <div class="mb-2 flex">
                        <form class="flex">
                            <input
                                class="rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
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
        <div class="ul-ecommerce-wrapper relative animate__animated animate__faster animate__backInUp" v-if="!edit">
            <div class="ul-ecommerce-container ml-0">
                <div class="flex flex-wrap gap-5 mb-5">
                    <div
                        v-for="(item, index) in products.results"
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
                                    <p class="font-bold text-base mb-5 text-green-600" :class="{'text-rose-600':item.stock<1}">Stock: {{item.stock}}</p>
                                </div>
                                <div class="flex justify-between flex-wrap gap-1" v-if="item.incart">
                                    <input type="number" class="rounded border border-gray-300 text-gray-300 hover:text-white mb-2" v-model="item.qty" min="0" max="99">
                                    <BaseBtn class="bg-gray-300 text-white mb-2 flex-1">
                                        <i class="nav-icon i-Checkout text-base mr-2"></i> Added
                                    </BaseBtn>
                                </div>
                                <div class="flex justify-between flex-wrap gap-1" v-else>
                                    <BaseBtn class="flex-1 text-white bg-gradient-to-br from-purple-200 to-cyan-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-1 text-center">
                                        <i class="nav-icon i-Add-Cart text-base mr-2"></i> 0
                                    </BaseBtn>
                                    <BaseBtn @click="edit=item" class="flex-1 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-1 text-center">
                                        <i class="nav-icon i-Pen-5 text-base mr-2"></i> Edit
                                    </BaseBtn>
                                </div>
                            </div>
                        </BaseCard>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex gap-1 flex-wrap border animate__animated animate__faster animate__backInUp" v-if="edit">
            <div class="flex-1 min-w-[330px]">
                      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                          <div class="col-span-3 sm:col-span-2">
                            <label for="company-website" class="block text-sm font-medium text-gray-700">Title</label>
                            <input :class="{'border-rose-300':error && !edit.title}" v-model="edit.title" type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm" placeholder="www.example.com">
                          </div>
                          <div class="flex gap-1 flex-wrap">
                              <div class="col-span-3 sm:col-span-2 flex-1">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">Category</label>
                                <select v-model="edit.category" :class="{'border-rose-300':error && !edit.category}" class="block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                    <option value="">Select Category</option>
                                    <option :value="cat.name" v-for="cat in categorylist" :key="cat.id">{{ cat.name }}</option>
                                </select>
                              </div>
                              <div class="col-span-3 sm:col-span-2 flex-1">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">Category</label>
                                <select v-model="edit.type" name="" id="" class="block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                    <option value="Medical">Medical</option>
                                    <option value="Non-Medical">Non-Medical</option>
                                </select>
                              </div>
                          </div>

                        <div>
                            <label for="about" class="block text-sm font-medium text-gray-700">Product Description</label>
                            <textarea :class="{'border-rose-300':error && !edit.description}" v-model="edit.description" id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm" placeholder="..."></textarea>
                            <p class="mt-2 text-sm text-gray-500">Brief description for your product.</p>
                        </div>

                          <div class="col-span-3 sm:col-span-2">
                            <div class="flex flex-wrap gap-2">
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">MRP</span>
                                    <input v-model="edit.mrp" type="number" step=".01" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Trade</span>
                                    <input v-model="edit.trade_price" type="number" step=".01" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Points</span>
                                    <input v-model="edit.point" type="number" step=".01" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Stock</span>
                                    <input v-model="edit.stock" type="number" step=".01" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Code</span>
                                    <input :class="{'border-rose-300':error && !edit.code}" v-model="edit.code" type="text" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Rating</span>
                                    <input v-model="edit.Rating" type="number" step=".01" min="1" max="5" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                            </div>
                          </div>
                      </div>
                    <label class=" mx-1 block text-sm font-medium text-gray-700 mb-3 mt-5">Features</label>
                    <BaseCard class="m-1">Here.........</BaseCard>
            </div>
            <div class="flex-1 min-w-[330px]">
                <!-- <label class="block text-sm font-medium text-gray-700 mb-3">Product Photos</label>
                <div class="flex flex-wrap gap-2">
                    <div v-for="image in editProduct.imagelist" :key="image" class="w-[220px] relative rounded h-[145px] image animate__animated animate__faster animate__lightSpeedInRight">
                        <img :src="image" class="h-[145px] w-[220px] object-cover rounded" alt="" />
                        <span class="remove bg-white absolute top-[2px] text-rose-500 left-[2px] border border-rose-500 px-3 py-[5px] rounded-full shadow cursor-pointer" @click="removeImage(image)">X</span>
                    </div>
                    <div class="w-[220px] h-[145px] relative">
                      <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6" :class="{'border-rose-300':error && editProduct.imagelist.length<2}">
                        <div class="space-y-1 text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div class="text-sm text-gray-600">
                            <p class="pl-1 ext-center w-full">Upload Image</p>
                          </div>
                          <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                      <input @change="imageAdded($event)" type="file" class="absolute h-full top-0 w-full opacity-0 cursor-pointer">
                    </div>
                </div> -->
                <label class="block text-sm font-medium text-gray-700 mb-3 mt-5">Custom Fundings</label>
                <BaseCard class="m-1">Here.........</BaseCard>
                <div class="savebtn flex justify-end my-2 m-1 gap-1" v-if="edit">
                    <button @click="edit=''" class="bg-cyan-600 text-white px-4 py-2 rounded-md">Cancel</button>
                    <button @click="saveProduct" class="btn rounded font-normal leading-4 ripple inline-block py-2 px-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-5 py-1 text-center">Save product</button>
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
            edit: null,
            error: '',
        }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts(){
            axios.get('/api/admin/products/').then((response)=>{
                console.log(response);
                this.products = response.data;
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
        saveProduct(e){
            this.error = "";
            console.log(this.edit)
            if(
                this.edit.title == '' ||
                this.edit.description == '' ||
                this.edit.category == '' ||
                this.edit.type == '' ||
                this.edit.code == ''
            ){  
                this.error = "Please fill all the fields!"
                return
            }
            e.target.innerHTML="Please wait..."
            axios.put('/api/admin/products/', this.edit).then((response)=>{
                this.products = response.data;
                this.edit = null;
            })
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
.ul-ecommerce-container{
    margin-left: 0 !important;
}
</style>