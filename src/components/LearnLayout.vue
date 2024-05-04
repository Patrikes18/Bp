<template>
    <div class="w-full">
        <div class="h-full my-5">
            <!-- Rozloženie Kartičiek pre výuku. -->
            <div class="custom-h bg-white mx-16 p-16 text-lg">
                <div class="flex flex-wrap flex-col gap-8 h-full items-center">
                    <slot name="content"/>
                </div>
            </div>
        </div>

        <div class="flex fixed bottom-5 justify-center w-full">
            <!-- Navigačný panel pre výukové stránky. -->
            <div class="p-1 border border-black rounded-xl bg-white">
                <slot name="navbar"/>
            </div>

        </div>
    </div>
    
</template>

<script setup lang="ts">

</script>

<style scoped>

.custom-h{
    min-height: calc(0.7 * 100vh);
}

</style>