<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Invoice" subParentTitle="Print Invoice" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12">
                <BaseCard>
                    <div class="text-right mb-10">
                        <BaseBtn
                            class="
                                border border-danger
                                text-danger
                                hover:bg-danger hover:text-white
                                mr-2
                            "
                        >
                            Back To Invoice
                        </BaseBtn>
                        <BaseBtn
                            class="
                                border border-danger
                                text-danger
                                hover:bg-danger hover:text-white
                                mr-2
                            "
                        >
                            Edit Invoice
                        </BaseBtn>
                        <BaseBtn class="bg-primary text-white mr-2">
                            Print Invoice
                        </BaseBtn>
                    </div>
                    <div
                        class="
                            col-span-12
                            xl:col-span-4
                            lg:col-span-4
                            md:col-span-12
                        "
                    >
                        <div class="font-bold text-lg mb-2">Order Info</div>
                        <p class="mb-1">Order Number:</p>
                        <p class="font-bold">+88018799723</p>
                    </div>
                    <div class="col-span-4"></div>
                    <div
                        class="
                            col-span-12
                            text-left
                            md:text-right
                            xl:col-span-4
                            lg:col-span-4
                            md:col-span-12
                        "
                    >
                        <label for="">Order Date:</label>
                        <p class="font-bold">12/10/2020</p>
                    </div>
                    <div class="col-span-12 py-5">
                        <div class="border-b border-gray-200"></div>
                    </div>
                    <div
                        class="
                            col-span-12
                            xl:col-span-4
                            lg:col-span-4
                            md:col-span-12
                        "
                    >
                        <div class="font-bold text-lg mb-2">Bill From</div>
                        <p class="font-semibold mb-4">Arturo M Taylor</p>
                        <p class="font-semibold">
                            4251 Benson Park Drive, YOUNG AMERICA,
                            <br />
                            55394, America
                        </p>
                    </div>
                    <div class="col-span-4"></div>
                    <div
                        class="
                            col-span-12
                            text-left
                            md:text-right
                            xl:col-span-4
                            lg:col-span-4
                            md:col-span-12
                        "
                    >
                        <div
                            class="
                                font-bold
                                text-lg
                                mb-2
                                text-left
                                md:text-right
                            "
                        >
                            Bill To
                        </div>
                        <p class="font-semibold mb-4">Esther C Cantrell</p>
                        <p class="font-semibold">
                            1756 Rockford Mountain Lane, Little AMERICA,
                            <br />
                            82929, America
                        </p>
                    </div>
                    <div class="col-span-12 mt-10">
                        <div
                            class="
                                overflow-x-auto
                                pr-10
                                sm:-mx-6 sm:px-6
                                lg:-mx-8 lg:px-8
                            "
                        >
                            <div class="align-middle inline-block min-w-full">
                                <table class="min-w-full basic-table">
                                    <thead>
                                        <tr>
                                            <th class="text-left">ID</th>
                                            <th class="text-left">Item Name</th>
                                            <th class="text-left">
                                                Unit Price
                                            </th>
                                            <th class="text-left">Unit</th>
                                            <th class="text-left">cost</th>
                                        </tr>
                                    </thead>
                                    <tbody class="">
                                        <tr>
                                            <td>
                                                <div class="flex items-center">
                                                    <div>
                                                        <div
                                                            class="
                                                                text-sm
                                                                leading-5
                                                                text-gray-800
                                                                dark:text-gray-300
                                                            "
                                                        >
                                                            #1
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Speaker Razer</td>
                                            <td>$200</td>
                                            <td>5</td>
                                            <td>$1000</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex items-center">
                                                    <div>
                                                        <div
                                                            class="
                                                                text-sm
                                                                leading-5
                                                                text-gray-800
                                                            "
                                                        >
                                                            #2
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Laptop Razer</td>
                                            <td>$700</td>
                                            <td>2</td>
                                            <td>$1400</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="flex items-center">
                                                    <div>
                                                        <div
                                                            class="
                                                                text-sm
                                                                leading-5
                                                                text-gray-800
                                                            "
                                                        >
                                                            #3
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Tab</td>
                                            <td>$200</td>
                                            <td>3</td>
                                            <td>$600</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-9"></div>
                    <div class="col-span-12 md:col-span-3 lg:col-span-3">
                        <div class="mt-5">
                            <div class="flex justify-between mb-3">
                                <p class="mr-10">Sub Total:</p>
                                <p>$3000</p>
                            </div>
                            <div class="flex justify-between mb-3">
                                <p class="mr-10">Vat(%):</p>
                                <p>0%</p>
                            </div>
                            <div class="flex justify-between">
                                <p class="mr-10 font-bold">Grand Total:</p>
                                <p class="font-bold">$3000</p>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
table {
    border-spacing: 0 1rem;
    border-collapse: separate;
}
</style>
