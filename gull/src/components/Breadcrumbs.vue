<script setup>
const props = defineProps({
    parentTitle: String,
    subParentTitle: String,
})
</script>

<template>
    <div
        class="
            breadcrumb
            flex
            items-end
            border-b border-gray-300
            dark:border-foreground
            pb-4
            mb-6
        "
    >
        <!-- <p class="text-xl mr-1 font-semibold mr-2 dark:text-white">
            {{ props.subParentTitle }}
        </p> -->
        <ul>
            <li class="border-r border-gray-400 inline pr-2 dark:text-gray-400">
                <a class="hover:text-gray-800" href="">
                    {{ props.subParentTitle }}</a
                >
            </li>
            <li class="inline pl-2 text-gray-600 dark:text-gray-400">
                {{ props.parentTitle }}
            </li>
        </ul>
    </div>
</template>

