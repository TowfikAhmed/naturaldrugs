<template>
    <section>
        <div class="container p-2 mx-auto sm:p-4" v-if="orders && orders.results">
            <h2 class="mb-4 text-2xl font-semibold leading-tight">Order History</h2>
            <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                    <colgroup>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col>
                        <col class="w-24">
                    </colgroup>
                    <tbody>
                        <tr class="border-b border-opacity-20 border-gray-700 animate__animated animate__faster animate__fadeInLeft" v-for="ord in orders.results" :key="ord.id">
                            <td class="p-3">
                                <p>ID#{{ord.id}}</p>
                                <p>Date: {{ord.date}}</p>
                            </td>
                            <td class="p-3">
                                <p>Number Of Products: {{ord.Stockiests_products.length}}</p>
                                <p class="text-gray-400">Total: ৳{{ord.total}}</p>
                            </td>
                            <td class="p-3 text-right">
                                <p>
                                    {{ord.stockiest.name}}
                                </p>
                                <p class="text-gray-400">
                                    @{{ord.stockiest.user.username}}
                                </p>
                            </td>
                            <td class="p-3 text-right cursor-pointer" @click="details = ord">
                                <p class="font-bold" :class="{'text-amber-600': ord.status == 'Pending','text-green-500': ord.status == 'Approved','text-rose-500': ord.status == 'Cancelled'}">{{ord.status}}</p>
                                <p class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-3 inline-block my-1  py-1 text-center">
                                    <span>View Details</span>
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <!-- Main modal -->
        <div v-if="details" id="defaultModal" tabindex="-1" aria-hidden="true" class="shadow bg-dark/[.1] fixed m-auto left-0 right-0 top-0 z-[9999] w-full h-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto m-auto animate__animated animate__fadeInUp animate__faster">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Manage Order
                        </h3>
                        <button  @click="details=''" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                            <div class="px-0">
                              <div class="sm:flex sm:items-center">
                                <div class="sm:flex-auto">
                                  <h1 class="text-xl font-semibold text-gray-900">
                                    {{details.stockiest.name}} 
                                    <span class="text-muted fs-4 text-gray-400">@{{details.stockiest.user.username}}</span>
                                  </h1>
                                  <p class="mt-2 text-sm text-gray-700">{{details.date}} </p>
                                </div>
                                <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                  <p type="button" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto">{{details.status}}</p>
                                </div>
                              </div>
                              <div class="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
                                <table class="min-w-full divide-y divide-gray-300">
                                  <thead>
                                    <tr>
                                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0">Project</th>
                                      <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">QTY</th>
                                      <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Rate</th>
                                      <th scope="col" class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell">Points</th>
                                      <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">Total BP</th>
                                      <th scope="col" class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">Total</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr class="border-b border-gray-200" v-for="pr in details.Stockiests_products" :key="pr.id">
                                      <td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
                                        <div class="font-medium text-gray-900">{{pr.product.title}}</div>
                                      </td>
                                      <td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">{{pr.qty}}</td>
                                      <td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">৳ {{pr.product.trade_price}}</td>
                                      <td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">{{pr.product.point}}</td>
                                      <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                        <span class="inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center">BP</span> 
                                        {{pr.product.point * pr.qty}}
                                      </td>
                                      <td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0 font-bold">৳ {{pr.product.trade_price * pr.qty}}</td>
                                    </tr>

                                    <!-- More projects... -->
                                  </tbody>
                                  <tfoot>
                                    <tr>
                                      <th scope="row" colspan="5" class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0">Total BP</th>
                                      <th scope="row" class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden">Total BP</th>
                                      <td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0">
                                        <span class="inline-block bg-orange-400 border-[3px] border-x-orange-300 border-y-orange-200 text-white text-xs font-bold w-[24px] h-[24px] leading-[18px] rounded-full text-center">BP</span> 
                                        {{details.totalbp}}
                                      </td>
                                    </tr>
                                    <tr>
                                      <th scope="row" colspan="5" class="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0">Total</th>
                                      <th scope="row" class="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden">Total</th>
                                      <td class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0">৳ {{details.total}}</td>
                                    </tr>
                                  </tfoot>
                                </table>
                              </div>
                            </div>
                        <div class="flex-1 space-y-0.5 min-w-[200px]">
                            <select name="" class="block w-full mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="details.status">
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <p class="p-4 px-5 text-rose-500" v-if="error">{{error}}</p>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="updateOrder($event)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Submit</button>
                        <button  @click="details=''" data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            orders: "",
            details: "",
        }
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        getOrders() {
            axios.get('/api/admin/orders/')
                .then((response) => {
                    this.orders = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        updateOrder(e) {
            e.preventDefault();
            axios.put('/api/admin/orders/', this.details)
                .then((response) => {
                    this.getOrders();
                    this.details = "";
                })
                .catch((error) => {
                    console.log(error);
                })
        },
    }
}
</script>