<script setup>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Apps" subParentTitle="Contact Table" />
        <BaseCard noPadding class="overflow-hidden">
            <template v-slot:cardHeader>
                <div
                    class="card-header bg-gradient-to-r from-purple-700 to-purple-500 text-white"
                >
                    <div class="py-4">
                        <div
                            class="flex justify-between flex-wrap items-center"
                        >
                            <div>
                                <p
                                    class="font-semibold text-lg text-white dark:text-white"
                                >
                                    Contacts
                                </p>
                            </div>
                            <div class="relative text-gray-600">
                                <input
                                    class="bg-gray-100 dark:bg-foreground dark:text-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                                    type="search"
                                    name="search"
                                    placeholder="Search"
                                />
                                <button
                                    role="button"
                                    class="absolute right-0 top-0 mt-2 mr-4 focus:outline-none"
                                    type="submit"
                                ></button>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div class="p-5">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-12 xl:col-span-3 lg:col-span-4">
                            <BaseCard>
                                <BaseBtn
                                    block
                                    class="border border-primary text-primary hover:bg-primary hover:text-white"
                                    >ADD CONTACTS</BaseBtn
                                >
                                <div
                                    class="divide-y divide-gray-200 dark:divide-dark divide-solid mt-5"
                                >
                                    <div class="py-3">Jhon William</div>
                                    <div class="py-3">Picky Blind</div>
                                    <div class="py-3">Jhon Harris</div>
                                </div>
                            </BaseCard>
                        </div>
                        <div class="col-span-12 xl:col-span-9 lg:col-span-8">
                            <BaseCard>
                                <div
                                    class="block w-full overflow-x-auto whitespace-nowrap borderless hover"
                                >
                                    <div
                                        class="dataTable-wrapper dataTable-loading no-footer fixed-columns"
                                    >
                                        <div
                                            class="dataTable-container block w-full overflow-x-auto whitespace-nowrap borderless hover"
                                        >
                                            <table
                                                class="table-3 dataTable-table max-w-full w-full"
                                            >
                                                <thead>
                                                    <tr class="">
                                                        <th
                                                            class="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold"
                                                        >
                                                            Fullname
                                                        </th>
                                                        <th
                                                            class="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold"
                                                        >
                                                            Date
                                                        </th>
                                                        <th
                                                            class="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold"
                                                        >
                                                            Phone
                                                        </th>
                                                        <th
                                                            class="text-left border-b dark:border-dark dark:text-gray-300 pb-3 mb-3 text-gray-500 font-semibold"
                                                        >
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr
                                                        class="border-b border-gray-200 dark:border-dark hover:bg-gray-100 cursor-pointer dark:hover:bg-dark"
                                                        v-for="(
                                                            item, index
                                                        ) in 12"
                                                        :key="index"
                                                    >
                                                        <td
                                                            class="text-xs py-3 px-4"
                                                        >
                                                            <p
                                                                class="text-base"
                                                            >
                                                                Raze William
                                                            </p>
                                                        </td>

                                                        <td class="">
                                                            2021-1-29
                                                        </td>

                                                        <td class="py-3">
                                                            +8801234685
                                                        </td>

                                                        <td class="py-3">
                                                            <div class="flex">
                                                                <BaseBtn
                                                                    icon
                                                                    rounded
                                                                    class="mr-3 text-primary hover:bg-gray-200 dark:hover:bg-foreground"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        class="h-5 w-5"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                    >
                                                                        <path
                                                                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                                                                        />
                                                                    </svg>
                                                                </BaseBtn>
                                                                <BaseBtn
                                                                    icon
                                                                    rounded
                                                                    class="mr-3 text-danger hover:bg-gray-200 dark:hover:bg-foreground"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        class="h-5 w-5"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                    >
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                            clip-rule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </BaseBtn>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="dataTable-bottom mt-6">
                                            <nav class="dataTable-pagination">
                                                <div
                                                    class="px-4 py-3 flex items-center justify-between sm:px-6"
                                                >
                                                    <div
                                                        class="flex-1 flex justify-between sm:hidden"
                                                    >
                                                        <a
                                                            href="#"
                                                            class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark"
                                                        >
                                                            Previous
                                                        </a>
                                                        <a
                                                            href="#"
                                                            class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white dark:bg-dark dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark"
                                                        >
                                                            Next
                                                        </a>
                                                    </div>
                                                    <div
                                                        class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-center"
                                                    >
                                                        <div>
                                                            <nav
                                                                class="relative dark:bg-dark z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                                                aria-label="Pagination"
                                                            >
                                                                <a
                                                                    href="#"
                                                                    class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50 dark:border-foreground dark:hover:bg-foreground"
                                                                >
                                                                    <span
                                                                        class="sr-only"
                                                                        >Previous</span
                                                                    >
                                                                    <!-- Heroicon name: solid/chevron-left -->
                                                                    <svg
                                                                        class="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                                            clip-rule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                                <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                                                                <a
                                                                    href="#"
                                                                    aria-current="page"
                                                                    class="dark:border-foreground dark:hover:bg-foreground z-10 bg-primary border-purple-500 text-white relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                    1
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    class="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                    2
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    class="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                    3
                                                                </a>
                                                                <span
                                                                    class="dark:border-foreground dark:hover:bg-foreground relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700"
                                                                >
                                                                    ...
                                                                </span>
                                                                <a
                                                                    href="#"
                                                                    class="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                    8
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    class="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                    9
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    class="dark:border-foreground dark:hover:bg-foreground border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                                                                >
                                                                    10
                                                                </a>
                                                                <a
                                                                    href="#"
                                                                    class="dark:border-foreground dark:hover:bg-foreground relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium text-gray-500 hover:bg-gray-50"
                                                                >
                                                                    <span
                                                                        class="sr-only"
                                                                        >Next</span
                                                                    >
                                                                    <!-- Heroicon name: solid/chevron-right -->
                                                                    <svg
                                                                        class="h-5 w-5"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 20 20"
                                                                        fill="currentColor"
                                                                        aria-hidden="true"
                                                                    >
                                                                        <path
                                                                            fill-rule="evenodd"
                                                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                            clip-rule="evenodd"
                                                                        />
                                                                    </svg>
                                                                </a>
                                                            </nav>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </BaseCard>
                        </div>
                    </div>
                </div>
            </template>
        </BaseCard>
    </div>
</template>
