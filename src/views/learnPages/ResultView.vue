<script setup lang="ts">
</script>

<template>
    <p class="font-sans text-2xl font-bold text-center">Výsledné farbenie</p>
    <div class="grid grid-cols-2 gap-8 mx-16 h-full items-center">
        <div class="flex flex-wrap flex-col gap-8 mx-16 items-center">
            <div>
                <img src="/src/assets/graphcolored.png" alt="Graf G">
            </div>
        </div>
        <div>
            <ul class="list-disc">
                <li>Každý vrchol dostane tie farby, ktoré dostali nezávislé množiny, ktorých je súčasťou.</li>
                <li>Slabo susediace vrcholy budú mať rovnaké farby aké sme im priradili v predchádzajúcom kroku.</li>
                <li>Náš graf bude takto vyfarbený:</li>
                <ul class="list-disc mx-10" style="list-style-type: circle">
                    <li><b>a</b> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>žltá</li>
                    <li><b>b</b> - <sup>1</sup>&frasl;<sub>2</sub> modrá a <sup>1</sup>&frasl;<sub>2</sub>zelená</li>
                    <li><b>c</b> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                    <li><b>d</b> - <sup>1</sup>&frasl;<sub>2</sub> modrá a <sup>1</sup>&frasl;<sub>2</sub>žltá</li>
                    <li><b>e</b> - <sup>1</sup>&frasl;<sub>2</sub> zelená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                    <li><b>f</b> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                </ul>
            </ul>
        </div>
    </div>
</template>