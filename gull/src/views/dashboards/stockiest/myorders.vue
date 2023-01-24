<template>
    <section>
        <div class="container p-2 mx-auto sm:p-4">
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
                    <thead class="bg-gray-50">
                        <tr class="text-left">
                            <th class="p-3">Invoice #</th>
                            <th class="p-3">Client</th>
                            <th class="p-3">Issued</th>
                            <th class="p-3">Due</th>
                            <th class="p-3 text-right">Amount</th>
                            <th class="p-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border-b border-opacity-20 border-gray-700 ">
                            <td class="p-3">
                                <p>97412378923</p>
                            </td>
                            <td class="p-3">
                                <p>Microsoft Corporation</p>
                            </td>
                            <td class="p-3">
                                <p>14 Jan 2022</p>
                                <p class="text-gray-400">Friday</p>
                            </td>
                            <td class="p-3">
                                <p>01 Feb 2022</p>
                                <p class="text-gray-400">Tuesday</p>
                            </td>
                            <td class="p-3 text-right">
                                <p>৳15,792</p>
                            </td>
                            <td class="p-3 text-right">
                                <span class="px-3 py-1 font-semibold rounded-md bg-violet-400 text-white">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr class="border-b border-opacity-20 border-gray-700 ">
                            <td class="p-3">
                                <p>97412378923</p>
                            </td>
                            <td class="p-3">
                                <p>Tesla Inc.</p>
                            </td>
                            <td class="p-3">
                                <p>14 Jan 2022</p>
                                <p class="text-gray-400">Friday</p>
                            </td>
                            <td class="p-3">
                                <p>01 Feb 2022</p>
                                <p class="text-gray-400">Tuesday</p>
                            </td>
                            <td class="p-3 text-right">
                                <p>৳275</p>
                            </td>
                            <td class="p-3 text-right">
                                <span class="px-3 py-1 font-semibold rounded-md bg-violet-400 text-white">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr class="border-b border-opacity-20 border-gray-700 ">
                            <td class="p-3">
                                <p>97412378923</p>
                            </td>
                            <td class="p-3">
                                <p>Coca Cola co.</p>
                            </td>
                            <td class="p-3">
                                <p>14 Jan 2022</p>
                                <p class="text-gray-400">Friday</p>
                            </td>
                            <td class="p-3">
                                <p>01 Feb 2022</p>
                                <p class="text-gray-400">Tuesday</p>
                            </td>
                            <td class="p-3 text-right">
                                <p>৳8,950,500</p>
                            </td>
                            <td class="p-3 text-right">
                                <span class="px-3 py-1 font-semibold rounded-md bg-violet-400 text-white">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                        <tr class="border-b border-opacity-20 border-gray-700 ">
                            <td class="p-3">
                                <p>97412378923</p>
                            </td>
                            <td class="p-3">
                                <p>Nvidia Corporation</p>
                            </td>
                            <td class="p-3">
                                <p>14 Jan 2022</p>
                                <p class="text-gray-400">Friday</p>
                            </td>
                            <td class="p-3">
                                <p>01 Feb 2022</p>
                                <p class="text-gray-400">Tuesday</p>
                            </td>
                            <td class="p-3 text-right">
                                <p>৳98,218</p>
                            </td>
                            <td class="p-3 text-right">
                                <span class="px-3 py-1 font-semibold rounded-md bg-violet-400 text-white">
                                    <span>Pending</span>
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>