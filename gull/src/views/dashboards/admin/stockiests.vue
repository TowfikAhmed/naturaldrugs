<template>
    <div class="">
        <breadcrumbs parentTitle="Members" subParentTitle="All Members" />
        <BaseCard>
            <div class="flex flex-wrap gap-2 justify-between items-center">
                <div class="card-title">
                    <div class="flex gap-1">
                        <input type="search" name="" id="" class="rounded border border-gray-300 bg-gray-100 px-2 py-1">
                        <button class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Search</button>
                    </div>
                </div>
                <button onclick="document.getElementById('defaultModal').classList.toggle('hidden')" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add New Stockiest</button>
            </div>
            <div
                class="divide-y divide-gray-300 dark:divide-black divide-dashed my-5"
                v-if="stockiests && stockiests.results"
            >
                <div class="py-4 animate__animated animate__faster animate__fadeInLeft" v-for="stockiest in stockiests.results" :key="stockiest.id">
                    <div class="flex justify-between items-center">
                        <div class="flex w-full">
                            <img
                                class="avatar rounded mr-2"
                                src="/images/faces/1.jpg"
                            />
                            <div class="min-w-[25%]">
                                <p class="text-sm">
                                    <a
                                        class="hover:text-primary"
                                        href=""
                                        >
                                        {{stockiest.name}} 
                                        <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{stockiest.type}} </span>
                                    </a
                                    >
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400"
                                >
                                    {{stockiest.address}}
                                </p>
                            </div>
                            <div class="min-w-[25%]">
                                <p class="text-sm">
                                    <a
                                        class="hover:text-primary"
                                        href=""
                                        >
                                        {{stockiest.email}} 
                                    </a
                                    >
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                >
                                    {{stockiest.mobile}}
                                </p>
                            </div>
                            <div class="min-w-[25%]">
                                <p class="text-sm">
                                    <a
                                        class="hover:text-primary"
                                        href=""
                                        >
                                        Username:{{stockiest.username}} 
                                    </a
                                    >
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                >
                                    Password:{{stockiest.passwd}}
                                </p>
                            </div>
                            <div class="min-w-[25%]">
                                <p class="text-sm">
                                    <a
                                        class="hover:text-primary"
                                        href=""
                                        >
                                        Sponsor:{{stockiest.sponsor_member.name}} 
                                    </a
                                    >
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1" >
                                    Current balance:{{stockiest.current_balance}}
                                </p>
                            </div>
                        </div>
                        <div>
                            <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2">
                                Details
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
                        <div class="flex-1 space-y-0.5 min-w-[200px]">
                            <div class="flex justify-between items-center">
                                <label for="basic" class="font-medium text-gray-500"> Username</label>
                                <div v-if="usernameValid == false" class="text-red-500 mr-2 flex items-center gap-1">
                                    <i class="i-Close-Window"></i> Invalid
                                </div>
                                <div v-else-if="usernameValid" class="text-green-500 mr-2 flex items-center gap-1">
                                    <i class="i-Yes"></i> {{usernameValid}}
                                </div>
                            </div>

                          <input
                            id="basic"
                            v-model="newUser.username"
                            @keyup="checkUsername"
                            type="text"
                            placeholder="Enter New Username"
                            class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                        </div>
                        <div class="flex flex-wrap gap-1">
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                              <label for="basic" class="font-medium text-gray-500"> Full Name </label>
                              <input
                                id="basic"
                                v-model="newUser.name"
                                type="text"
                                placeholder="Enter Your Full Name"
                                class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                            </div>
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                                <label for="basic" class="font-medium text-gray-500"> Gender </label>
                                <select
                                 v-model="newUser.gender"
                                 class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1">
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                                <div class="flex justify-between items-center">
                                    <label for="basic" class="font-medium text-gray-500"> Sponsor ID </label>
                                    <div v-if="sponsorValid == false" class="text-red-500 mr-2 flex items-center gap-1">
                                        <i class="i-Close-Window"></i> Invalid
                                    </div>
                                    <div v-else-if="sponsorValid" class="text-green-500 mr-2 flex items-center gap-1">
                                        <i class="i-Yes"></i> {{sponsorValid}}
                                    </div>
                                </div>

                              <input
                                id="basic"
                                v-model="newUser.sponsor_id"
                                @keyup="checkUser"
                                type="text"
                                placeholder="Enter Your Sponsor ID"
                                class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                            </div>
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                                <label for="basic" class="font-medium text-gray-500"> Stockiest Type </label>
                                <select 
                                  v-model="newUser.type"
                                  class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75">
                                    <option value="agent">Agent</option>
                                    <option value="dealer">Dealer</option>
                                    <option value="depot">Depot</option>
                                </select>
                            </div>
                        </div>
                        <div class="w-full space-y-0.5">
                          <label for="basic" class="font-medium text-gray-500"> Address </label>
                          <input
                            id="basic"
                            v-model="newUser.address"
                            type="text"
                            placeholder="Enter Your Address"
                            class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                        </div>
                        <div class="flex flex-wrap gap-1">
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                              <label for="basic" class="font-medium text-gray-500"> Email Address </label>
                              <input
                                id="basic"
                                v-model="newUser.email"
                                type="text"
                                placeholder="Enter Your Email Address"
                                class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                            </div>
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                              <label for="basic" class="font-medium text-gray-500"> Phone </label>
                              <input
                                id="basic"
                                v-model="newUser.mobile"
                                type="text"
                                placeholder="Enter Your Phone"
                                class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-1">
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                              <label for="basic" class="font-medium text-gray-500"> Password </label>
                              <input
                                id="basic"
                                v-model="newUser.passwd"
                                type="password"
                                class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                            </div>
                            <div class="flex-1 space-y-0.5 min-w-[200px]">
                              <label for="basic" class="font-medium text-gray-500"> Confirm Password </label>
                              <input
                                id="basic"
                                v-model="newUser.confirm_passwd"
                                type="password"
                                class="block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75" />
                            </div>
                        </div>
                    </div>
                    <!-- Modal footer -->
                    <p class="p-4 px-5 text-rose-500" v-if="error">{{error}}</p>
                    <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button @click="addNewUser($event)" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Submit</button>
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
            stockiests: [],
            newUser: {
                name: '',
                username: '',
                gender: 'male',
                email: '',
                mobile: '',
                passwd: '',
                confirm_passwd: '',
                type: 'agent',
                sponsor_id: '',
                im: '',
            },
            sponsorValid: undefined,
            usernameValid: undefined,
            error: '',
        };
    },
    mounted() {
        this.getStockiests();
    },
    methods: {
        getStockiests: function () {
            axios.get(baseUrl + '/api/admin/members?type=stockiest')
            .then(response => {
                this.stockiests = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
        addNewUser: function (event) {
            this.error = '';
            if(
                this.newUser.name == '' ||
                this.newUser.email == '' ||
                this.newUser.mobile == '' ||
                this.newUser.passwd == '' ||
                this.newUser.confirm_passwd == '' ||
                this.newUser.type == '' ||
                this.newUser.sponsor_id == ''
            ){
                this.error = 'Please fill all the fields';
                return;
            }
            if (this.newUser.passwd != this.newUser.confirm_passwd) {
                this.error = 'Password and Confirm Password does not match';
                return;
            }
            if (this.sponsorValid == false) {
                this.error = 'Sponsor ID is not valid';
                return;
            }
            console.log(this.newUser);
            axios.post(baseUrl + '/api/admin/members', this.newUser)
            .then(response => {
                console.log(response.data);
                if (response.data == 'success') {
                    this.getStockiests();
                    document.getElementById('defaultModal').classList.toggle('hidden');
                }
            })
        },
        checkUser(){
            console.log('check user', this.newUser.sponsor_id);
            axios.get(baseUrl + '/api/admin/check-user?type=MEMBER&username=' + this.newUser.sponsor_id)
            .then(response => {
                console.log(response.data);
                this.sponsorValid = response.data.name;
            })
            .catch(error => {
                console.log(error);
                this.sponsorValid = false;
            });
        },
        checkUsername(){
            console.log('check username', this.newUser.username);
            axios.get(baseUrl + '/api/admin/check-user?username=' + this.newUser.username)
            .then(response => {
                console.log(response.data);
                this.usernameValid = false;
            })
            .catch(error => {
                console.log(error);
                this.usernameValid = "Valid";
            });
        },
    }
}
</script>