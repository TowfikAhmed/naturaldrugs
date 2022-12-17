<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
</script>
<template>
    <div class="container mx-auto">
        <breadcrumbs parentTitle="Components" subParentTitle="Accordion" />
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
            <BaseCard>
                <div class="card-title mb-5">Default</div>
                <Disclosure>
                    <DisclosureButton
                        class="
                            flex
                            justify-between
                            w-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-left text-purple-900
                            bg-purple-100
                            rounded-lg
                            hover:bg-purple-200
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-purple-500
                            focus-visible:ring-opacity-75
                        "
                    >
                        <span>What is your refund policy?</span>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 text-sm text-gray-500 text-xs"
                        >
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            VHS.
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <Disclosure as="div" class="mt-2">
                    <DisclosureButton
                        class="
                            flex
                            justify-between
                            w-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-left text-purple-900
                            bg-purple-100
                            rounded-lg
                            hover:bg-purple-200
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-purple-500
                            focus-visible:ring-opacity-75
                        "
                    >
                        <span>Do you offer technical support?</span>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 text-sm text-gray-500 text-xs"
                        >
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            VHS.
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </BaseCard>
            <BaseCard>
                <div class="card-title mb-5">With Icon</div>
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                        class="
                            flex
                            justify-between
                            w-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-left text-purple-900
                            bg-purple-100
                            rounded-lg
                            hover:bg-purple-200
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-purple-500
                            focus-visible:ring-opacity-75
                        "
                    >
                        <span>What is your refund policy?</span>

                        <svg
                            :class="open ? 'transform rotate-90 ' : ''"
                            class="
                                w-5
                                h-5
                                text-primary
                                transition
                                duration-300
                                ease-in-out
                            "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 text-sm text-gray-500 text-xs"
                        >
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            VHS.
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
                <Disclosure as="div" class="mt-2" v-slot="{ open }">
                    <DisclosureButton
                        class="
                            flex
                            justify-between
                            w-full
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-left text-purple-900
                            bg-purple-100
                            rounded-lg
                            hover:bg-purple-200
                            focus:outline-none
                            focus-visible:ring
                            focus-visible:ring-purple-500
                            focus-visible:ring-opacity-75
                        "
                    >
                        <span>Do you offer technical support?</span>
                        <svg
                            :class="open ? 'transform rotate-90 ' : ''"
                            class="
                                w-5
                                h-5
                                text-primary
                                transition
                                duration-300
                                ease-in-out
                            "
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            />
                        </svg>
                    </DisclosureButton>
                    <transition
                        enter-active-class="transition duration-100 ease-out"
                        enter-from-class="transform scale-95 opacity-0"
                        enter-to-class="transform scale-100 opacity-100"
                        leave-active-class="transition duration-75 ease-out"
                        leave-from-class="transform scale-100 opacity-100"
                        leave-to-class="transform scale-95 opacity-0"
                    >
                        <DisclosurePanel
                            class="px-4 pt-4 pb-2 text-sm text-gray-500 text-xs"
                        >
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put
                            a bird on it squid single-origin coffee nulla
                            assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred
                            nesciunt sapiente ea proident. Ad vegan excepteur
                            butcher vice lomo. Leggings occaecat craft beer
                            farm-to-table, raw denim aesthetic synth nesciunt
                            you probably haven't heard of them accusamus labore
                            VHS.
                        </DisclosurePanel>
                    </transition>
                </Disclosure>
            </BaseCard>
        </div>
    </div>
</template>


