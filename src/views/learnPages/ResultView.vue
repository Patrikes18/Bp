<script setup lang="ts">
</script>

<template>
    <div class="flex flex-wrap flex-col gap-8 h-full">
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
                        <li><strong>a</strong> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>žltá</li>
                        <li><strong>b</strong> - <sup>1</sup>&frasl;<sub>2</sub> modrá a <sup>1</sup>&frasl;<sub>2</sub>zelená</li>
                        <li><strong>c</strong> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                        <li><strong>d</strong> - <sup>1</sup>&frasl;<sub>2</sub> modrá a <sup>1</sup>&frasl;<sub>2</sub>žltá</li>
                        <li><strong>e</strong> - <sup>1</sup>&frasl;<sub>2</sub> zelená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                        <li><strong>f</strong> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                    </ul>
                </ul>
            </div>
        </div>
    </div>
</template>