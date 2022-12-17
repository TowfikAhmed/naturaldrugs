<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Invoice" subParentTitle="Create Invoice" />
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12">
                <BaseCard>
                    <div class="text-right mb-10">
                        <BaseBtn
                            class="
                                mr-2
                                border border-primary
                                text-primary
                                hover:bg-primary hover:text-white
                            "
                        >
                            Cancel
                        </BaseBtn>
                        <BaseBtn
                            class="
                                mr-2
                                bg-primary
                                text-white
                                border border-primary
                            "
                        >
                            Save
                        </BaseBtn>
                    </div>
                    <div class="grid grid-cols-12 gap-5 items-end">
                        <div
                            class="
                                col-span-12
                                xl:col-span-4
                                lg:col-span-4
                                md:col-span-12
                            "
                        >
                            <div class="font-bold text-lg">Order Info</div>
                            <label for=""
                                >Order Number
                                <input
                                    class="
                                        w-full
                                        focus:outline-none
                                        px-4
                                        py-1
                                        mt-2
                                        border border-400
                                        rounded
                                        dark:bg-dark dark:border-gray-500
                                    "
                                    type="text"
                                    placeholder="Enter Order Number"
                                />
                            </label>
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
                            <div class="font-bold text-lg mb-2">
                                Order Status
                            </div>
                            <div class="mb-4">
                                <label
                                    class="
                                        inline-flex
                                        items-center
                                        cursor-pointer
                                    "
                                >
                                    <input
                                        class="
                                            form-radio
                                            border border-gray-500
                                            text-primary
                                            mb-0.5
                                        "
                                        type="radio"
                                        name="accountType"
                                        value="personal"
                                    /><span class="ml-2">Pending </span>
                                </label>
                            </div>
                            <div class="mb-4">
                                <label
                                    class="
                                        inline-flex
                                        items-center
                                        cursor-pointer
                                    "
                                >
                                    <input
                                        class="
                                            form-radio
                                            border border-gray-500
                                            text-primary
                                            mb-0.5
                                        "
                                        type="radio"
                                        name="accountType"
                                        value="personal"
                                    /><span class="ml-2">Processing </span>
                                </label>
                            </div>
                            <div class="mb-4">
                                <label
                                    class="
                                        inline-flex
                                        items-center
                                        cursor-pointer
                                    "
                                >
                                    <input
                                        class="
                                            form-radio
                                            border border-gray-500
                                            text-primary
                                            mb-0.5
                                        "
                                        type="radio"
                                        name="accountType"
                                        value="personal"
                                    /><span class="ml-2">Delivered </span>
                                </label>
                            </div>
                            <label for=""
                                >Order Date
                                <input
                                    class="
                                        w-full
                                        focus:outline-none
                                        px-4
                                        py-1
                                        mt-2
                                        border border-400
                                        rounded
                                        dark:bg-dark dark:border-gray-500
                                    "
                                    type="date"
                                />
                            </label>
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
                            <input
                                class="
                                    w-full
                                    focus:outline-none
                                    px-4
                                    py-1
                                    mt-2
                                    border border-400
                                    rounded
                                    dark:bg-dark dark:border-gray-500
                                    mb-3
                                "
                                type="text"
                                placeholder="Bill From"
                            />
                            <textarea
                                class="
                                    w-full
                                    focus:outline-none
                                    px-4
                                    py-1
                                    mt-2
                                    border border-400
                                    rounded
                                    dark:bg-dark dark:border-gray-500
                                "
                                cols="10"
                                rows="2"
                                placeholder="Bill From Address"
                            ></textarea>
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
                            <input
                                class="
                                    w-full
                                    focus:outline-none
                                    px-4
                                    py-1
                                    mt-2
                                    border border-400
                                    rounded
                                    dark:bg-dark dark:border-gray-500
                                    mb-3
                                "
                                type="text"
                                placeholder="Bill to"
                            />
                            <textarea
                                class="
                                    w-full
                                    focus:outline-none
                                    px-4
                                    py-1
                                    mt-2
                                    border border-400
                                    rounded
                                    dark:bg-dark dark:border-gray-500
                                "
                                cols="10"
                                rows="2"
                                placeholder="Bill To Address"
                            ></textarea>
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
                                <div
                                    class="align-middle inline-block min-w-full"
                                >
                                    <table class="min-w-full basic-table">
                                        <thead>
                                            <tr>
                                                <th class="text-left">ID</th>
                                                <th class="text-left">
                                                    Item Name
                                                </th>
                                                <th class="text-left">
                                                    Unit Price
                                                </th>
                                                <th class="text-left">Unit</th>
                                                <th class="text-left">cost</th>
                                                <th class="text-left">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="">
                                            <tr>
                                                <td>
                                                    <div
                                                        class="
                                                            flex
                                                            items-center
                                                        "
                                                    >
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
                                                <td>
                                                    <input
                                                        class="
                                                            w-full
                                                            focus:outline-none
                                                            px-4
                                                            py-1
                                                            mt-2
                                                            border border-400
                                                            rounded
                                                            dark:bg-dark
                                                            dark:border-gray-500
                                                        "
                                                        type="text"
                                                        placeholder="Item Name"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        class="
                                                            w-full
                                                            focus:outline-none
                                                            px-4
                                                            py-1
                                                            mt-2
                                                            border border-400
                                                            rounded
                                                            dark:bg-dark
                                                            dark:border-gray-500
                                                        "
                                                        type="text"
                                                        placeholder="Unit Price"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        class="
                                                            w-full
                                                            focus:outline-none
                                                            px-4
                                                            py-1
                                                            mt-2
                                                            border border-400
                                                            rounded
                                                            dark:bg-dark
                                                            dark:border-gray-500
                                                        "
                                                        type="number"
                                                        placeholder="Item Name"
                                                    />
                                                </td>
                                                <td>0</td>
                                                <td>
                                                    <BaseBtn
                                                        class="
                                                            bg-danger
                                                            text-white
                                                        "
                                                    >
                                                        Delete
                                                    </BaseBtn>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 text-right">
                            <BaseBtn class="bg-primary text-white">
                                <p class="text-xl font-bold">+</p>
                            </BaseBtn>
                        </div>
                        <div class="col-span-9"></div>
                        <div class="col-span-12 md:col-span-3">
                            <div class="mt-5">
                                <div class="flex justify-between mb-3">
                                    <p class="mr-10">Sub Total:</p>
                                    <p>0</p>
                                </div>
                                <div class="flex justify-between mb-3">
                                    <p class="mr-10">Vat(%):</p>
                                    <p>20%</p>
                                </div>
                                <div class="flex justify-between">
                                    <p class="mr-10 font-bold">Grand Total:</p>
                                    <p class="font-bold">20%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </BaseCard>
            </div>
        </div>
    </div>
</template>
