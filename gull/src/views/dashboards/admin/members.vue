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
            </div>
            <div
                class="divide-y divide-gray-300 dark:divide-black divide-dashed my-5"
                v-if="members && members.results"
            >
                <div class="py-4" v-for="member in members.results" :key="member.id">
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
                                        {{member.name}} 
                                        <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">{{member.type}} </span>
                                    </a
                                    >
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400"
                                >
                                    {{member.address}}
                                </p>
                            </div>
                            <div class="min-w-[25%]">
                                <p class="text-sm">
                                    <a
                                        class="hover:text-primary"
                                        href=""
                                        >
                                        {{member.email}} 
                                    </a
                                    >
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                >
                                    {{member.mobile}}
                                </p>
                            </div>
                            <div class="min-w-[25%]">
                                <p class="text-sm">
                                    <a
                                        class="hover:text-primary"
                                        href=""
                                        >
                                        Gender:{{member.gender}} 
                                    </a
                                    >
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                >
                                    Password:{{member.passwd}}
                                </p>
                            </div>
                            <div class="min-w-[25%]">
                                <p class="text-sm">
                                    <a
                                        class="hover:text-primary"
                                        href=""
                                        >
                                        Sponsor:{{member.sponsor_member.name}} 
                                    </a
                                    >
                                </p>
                                <p
                                    class="text-xs text-gray-500 dark:text-gray-400 mt-1"
                                >
                                    Current balance:{{member.current_balance}}
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
            members: [],
        };
    },
    mounted() {
        this.getmembers();
    },
    methods: {
        getmembers: function () {
            axios.get(baseUrl + '/api/admin/members?type=MEMBER')
            .then(response => {
                this.members = response.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
    }
}
</script>