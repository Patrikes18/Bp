<script setup lang="ts">
</script>

<template>
    <p class="font-sans text-2xl font-bold text-center">Nezávislé množiny 3</p>
    <div class="grid grid-cols-2 gap-8 mx-16 h-full items-center">
        <div class="flex flex-wrap flex-col gap-8 mx-16 items-center">
            <div>
                <img src="/src/assets/graphstrong.png" alt="Graf G">
            </div>
        </div>
        <div>
            <ul  class="list-disc">
                <li>Pre náš graf sú nezávislé množiny:</li>
                <ul class="mx-10" style="list-style-type: circle">
                    <li>S<sub>1</sub> = {a, c}.</li>
                    <li>S<sub>2</sub> = {a, d}.</li>
                    <li>S<sub>3</sub> = {b, d}.</li>
                    <li>S<sub>4</sub> = {b, e}.</li>
                    <li>S<sub>5</sub> = {c, e}.</li>
                </ul>
            </ul>
        </div>
    </div>
</template>