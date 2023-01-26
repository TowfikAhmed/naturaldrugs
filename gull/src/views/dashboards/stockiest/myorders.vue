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
                        <div class="font-medium p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert" v-if="orders.results.length < 1">
                          You do not have any orders yet.
                        </div>
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
                                <span class="px-3 py-1 font-semibold rounded-md bg-violet-400 text-white">
                                    <span>{{ord.status}}</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
        }
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        getOrders() {
            axios.get('/api/member/orders/')
                .then((response) => {
                    this.orders = response.data;
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }
}
</script>