<script setup lang="ts">

</script>

<template>
    <header>
        <nav class="flex py-5 dark:bg-gray-900 w-screen">
            <div class="flex flex-wrap  flex-col w-full">
                <div class="flex items-center justify-center items-center w-full">
                    <RouterLink to="/"  class="self-center sm:text-l text-3xl font-bold whitespace-nowrap dark:text-cyan-400">Fuzzy frakcionálne farbenie</RouterLink>
                </div>
                <div v-if="$route.path != '/'" class="flex items-center items-center justify-center w-full pl-8 gap-4 pt-4">
                    <RouterLink to="/learn" class="self-center sm:text-l text-xl font-bold whitespace-nowrap hover:text-cyan-600 active:text-cyan-700" :class="$route.path.includes('/learn') ? 'dark:text-cyan-300 underline' : 'dark:text-cyan-400'">Výuka</RouterLink>
                    <RouterLink to="/calc" class="self-center sm:text-l text-xl font-bold whitespace-nowrap hover:text-cyan-600 active:text-cyan-700" :class="$route.path == '/calc' ? 'dark:text-cyan-300 underline' : 'dark:text-cyan-400'">Kalkulačka</RouterLink>
                </div>
            </div>
        </nav>
    </header>
</template>