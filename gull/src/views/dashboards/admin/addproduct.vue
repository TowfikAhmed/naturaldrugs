<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Products" subParentTitle="Add Product" />
        <BaseCard>
         <div class="flex gap-1 flex-wrap">
            <div class="flex-1 min-w-[330px]">
                      <div class="space-y-6 bg-white px-4 py-5 sm:p-6">
                          <div class="col-span-3 sm:col-span-2">
                            <label for="company-website" class="block text-sm font-medium text-gray-700">Title</label>
                            <input v-model="newProduct.title" type="text" name="company-website" id="company-website" class="block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm" placeholder="www.example.com">
                          </div>
                          <div class="flex gap-1 flex-wrap">
                              <div class="col-span-3 sm:col-span-2 flex-1">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">Category</label>
                                <select v-model="newProduct.category" name="" id="" class="block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                    <option value="">Select Category</option>
                                    <option :value="cat.name" v-for="cat in categorylist" :key="cat.id">{{ cat.name }}</option>
                                </select>
                              </div>
                              <div class="col-span-3 sm:col-span-2 flex-1">
                                <label for="company-website" class="block text-sm font-medium text-gray-700">Category</label>
                                <select v-model="newProduct.type" name="" id="" class="block w-full flex-1 rounded-md rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                    <option value="Medical">Medical</option>
                                    <option value="Non-Medical">Non-Medical</option>
                                </select>
                              </div>
                          </div>

                        <div>
                            <label for="about" class="block text-sm font-medium text-gray-700">Product Description</label>
                            <textarea v-model="newProduct.description" id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm" placeholder="..."></textarea>
                            <p class="mt-2 text-sm text-gray-500">Brief description for your product.</p>
                        </div>

                          <div class="col-span-3 sm:col-span-2">
                            <div class="flex flex-wrap gap-2">
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">MRP</span>
                                    <input v-model="newProduct.mrp" type="number" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Trade</span>
                                    <input v-model="newProduct.trade_price" type="number" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Points</span>
                                    <input v-model="newProduct.point" type="number" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Stock</span>
                                    <input v-model="newProduct.stock" type="number" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Code</span>
                                    <input v-model="newProduct.code" type="number" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                                <div class="flex-1 mt-1 flex rounded-md shadow-sm max-w-[200px] min-w-[180px]">
                                    <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">Rating</span>
                                    <input v-model="newProduct.Rating" type="number" class="w-full rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-50 sm:text-sm">
                                </div>
                            </div>
                          </div>
                      </div>
                    <label class="block text-sm font-medium text-gray-700 mb-3 mt-5">Features</label>
                    <BaseCard>Here.........</BaseCard>
            </div>
            <div class="flex-1 min-w-[330px]">
                <label class="block text-sm font-medium text-gray-700 mb-3">Product Photos</label>
                <div class="flex flex-wrap gap-2">
                    <div v-for="image in newProduct.imagelist" :key="image" class="w-[220px] relative rounded h-[145px] image animate__animated animate__faster animate__lightSpeedInRight">
                        <img :src="image" class="h-[145px] w-[220px] object-cover rounded" alt="" />
                        <span class="remove bg-white absolute top-[2px] text-rose-500 left-[2px] border border-rose-500 px-3 py-[5px] rounded-full shadow cursor-pointer" @click="removeImage(image)">X</span>
                    </div>
                    <div class="w-[220px] h-[145px] relative">
                      <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                </div>
                <label class="block text-sm font-medium text-gray-700 mb-3 mt-5">Custom Fundings</label>
                <BaseCard>Here.........</BaseCard>
            </div>
        </div>
        </BaseCard>

          <div class="bg-gray-100 py-3 text-center">
            <p class="py-4 text-rose-500" v-if="error">{{error}}</p>
            <button @click="addProduct($event)" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add New Product</button>
          </div>
    </div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import { baseUrl } from '@/config/main.js'
import axios from 'axios'
export default {
    components:{
        breadcrumbs: Breadcrumbs,
    },
    data(){
        return {
            newProduct: {
                title : "",
                description : "",
                category : "",
                type : "Medical",
                trade_price : 3.00,
                mrp : 0.00,
                code : "",
                point : "",
                features : [],
                customfunds : [],
                imagelist: [],
            },
            categorylist: '',
            error: ''
        }
    },
    mounted(){
        this.getProducts();
    },
    methods: {
        getProducts(){
            axios.get('/api/admin/categorylist/').then((response)=>{
                console.log(response);
                this.categorylist = response.data
            })
        },
        addProduct(e){
            this.error = "";
            console.log(this.newProduct)
            if(
                !this.newProduct.title ||
                !this.newProduct.description ||
                !this.newProduct.category ||
                !this.newProduct.type ||
                !this.newProduct.trade_price ||
                !this.newProduct.mrp ||
                !this.newProduct.code ||
                !this.newProduct.point
            ){  
                this.error = "Please fill all the fields!"
                return
            }
            if(this.newProduct.imagelist.length < 2){
                this.error = "Please add at least 2 images"
                return
            }
            e.target.innerHTML="Please wait..."
            axios.post('/api/admin/products/', this.newProduct).then((response)=>{
                console.log(response);
                this.$router.push("/dashboards/admin/products")
            })
        },
        imageAdded(e){
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.newProduct.imagelist.push(reader.result);
            };
        },
        removeImage (image) {
          this.newProduct.imagelist = this.newProduct.imagelist.filter((item) => item !== image);
        },
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