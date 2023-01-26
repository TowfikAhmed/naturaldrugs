<template>
    <div class="">
        <breadcrumbs parentTitle="Finance" subParentTitle="Balance Request" />
        <BaseCard>
            <div class="flex flex-wrap gap-2 justify-between items-center">
                <div class="card-title">
                    <div class="flex gap-1">
                        <input type="search" name="" id="" class="rounded border border-gray-300 bg-gray-100 px-2 py-1">
                        <button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Search</button>
                    </div>
                </div>
                <button onclick="document.getElementById('defaultModal').classList.toggle('hidden')" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Request Balance</button>
            </div>
            <div
                class="divide-y divide-gray-300 dark:divide-black divide-dashed my-5"
                v-if="balances && balances.results"
            >
                <div class="font-medium p-4 my-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert" v-if="balances.results.length < 1">
                    You do not have balance request history.
                </div>
                <div class="py-4 animate__animated animate__faster animate__fadeInLeft" v-for="balance in balances.results" :key="balance.id">
                    <div class="flex justify-between items-center">
                        <div class="flex w-full">
                            <div class="mr-4">ID#{{balance.id}}</div>
                            <div class="min-w-[25%] flex items-center gap-1">
                                <p class="text-sm text-gray-500">Member:</p>
                                <p class="text-dark">{{balance.member.name}}</p>
                            </div>
                            <div class="min-w-[25%] flex items-center gap-1">
                                <p class="text-sm text-gray-500">Amount:</p>
                                <p class="text-dark">৳{{balance.amount}}</p>
                            </div>
                            <div class="min-w-[25%] flex items-center gap-1">
                                <p class="text-sm text-gray-500">Date:</p>
                                <p class="text-dark">{{balance.date}}</p>
                            </div>
                            <div class="min-w-[25%] flex items-center gap-1">
                                <p class="text-sm text-gray-500">Note:</p>
                                <p class="text-dark">{{balance.note}}</p>
                            </div>
                        </div>
                        <div class="min-w-[100px]">
                            <button type="button" class="text-dark bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2">
                                {{balance.status}}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </BaseCard>

        <!-- Main modal -->
        <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden shadow bg-dark/[.1] fixed m-auto left-0 right-0 top-0 z-[9999] w-full h-full p-4 overflow-x-hidden overflow-y-auto h-modal md:h-full">
            <div class="relative w-full h-full max-w-2xl md:h-auto m-auto animate__animated animate__fadeInUp animate__faster">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <!-- Modal header -->
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Add Stockiest
                        </h3>
                        <button onclick="document.getElementById('defaultModal').classList.toggle('hidden')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-6 space-y-6">
                        <div class="flex flex-wrap gap-1">
                            <div class="space-y-0.5 min-w-[200px]">
                              <label for="basic" class="font-medium text-gray-500"> Amount: </label>
                              <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                    ৳
                                </span>
                                <input v-model="req.amount" type="number" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="elonmusk">
                              </div>
                            </div>
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                              <label for="basic" class="font-medium text-gray-500"> Note </label>
                              <input
                                id="note"
                                v-model="req.note"
                                type="text"
                                placeholder="Short Note"
                                class="block w-full mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <p class="p-4 px-5 text-rose-500" v-if="error">{{error}}</p>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="reqBalance($event)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Submit</button>
                        <button onclick="document.getElementById('defaultModal').classList.toggle('hidden')" data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
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
export default {
    components: {
        Breadcrumbs,
    },
    data () {
        return {
            balances: [],
            req: {
                amount: 0.00,
                note: '',
            },
        };
    },
    mounted() {
        this.getbalances();
    },
    methods: {
        getbalances: function () {
            axios.get(baseUrl + '/api/member/balances/')
            .then(response => {
                this.balances = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        reqBalance: function (e) {
            e.target.innerHTML = 'Processing...';
            axios.post(baseUrl + '/api/member/balances/', this.req)
            .then(response => {
                this.balances = response.data;
                e.target.innerHTML = 'Success';
                setTimeout(() => {
                    document.getElementById('defaultModal').classList.toggle('hidden');
                    this.req = {
                        amount: 0.00,
                        note: '',
                    };
                }, 500);
            })
            .catch(error => {
                console.log(error);
                e.target.innerHTML = 'Error';
            });
        },
    }
}
</script>