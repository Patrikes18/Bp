<script setup lang="ts">
</script>

<template>
    <p class="font-sans text-2xl font-bold text-center">Lineárne programovanie s využitím simplexovej metódy 1</p>
    <div class="grid grid-cols-2 gap-8 mx-16">
        <div class="flex justify-center">
            <div class="my-8">
                <p class="mx-10">Minimalizujeme:</p>
                <p class="mx-20">Z = x<sub>1</sub> + x<sub>2</sub> + x<sub>3</sub> + x<sub>4</sub> + x<sub>5</sub></p>
                <p class="mx-10">S obmedzeniami:</p>
                <p class="mx-20">x<sub>1</sub> + x<sub>2</sub> &ge; 1.</p>
                <p class="mx-20">x<sub>3</sub> + x<sub>4</sub> &ge; 1.</p>
                <p class="mx-20">x<sub>1</sub> + x<sub>5</sub> &ge; 1.</p>
                <p class="mx-20">x<sub>2</sub> + x<sub>3</sub> &ge; 1.</p>
                <p class="mx-20">x<sub>4</sub> + x<sub>5</sub> &ge; 1.</p>
                <p class="mx-20">x<sub>1</sub>, x<sub>2</sub>, x<sub>3</sub>, x<sub>4</sub>, x<sub>5</sub> &ge; 0.</p>
            </div>
        </div>
        <div>
            <ul class="list-disc">
                <li>Pomocou nezávislých množín si vytvoríme maticu <b>A</b> a vektor [x<sub>1</sub>, ..., x<sub>n</sub>]<sup>T</sup>.</li>
                <li>Maticu <b>A</b> získame tak, že riadky budeme indexovať vrcholmi a stĺpce budeme indexovať nezávislými množinami. Na riadkoch a v stĺpcoch zapíšeme 1 ak vrchol patrí do danej nezávislej množiny inak tam zapíšeme 0.</li>
                <li>Lineárne programovanie bude mať takýto vstup:</li>
                <p class="mx-10">Minimalizujeme:</p>
                <p class="mx-20">Z = x<sub>1</sub> + ... + x<sub>n</sub></p>
                <p class="mx-10">S obmedzeniami:</p>
                <p class="mx-20">A * x &gt; 1</p>
                <p class="mx-20">x<sub>1</sub>, ...,  x<sub>n</sub> &gt; 0</p>
                <li>Pre náš príklad počítame s nerovnicami naľavo.</li>
                <li>Pre výpočet môžeme použiť <a href="https://www.pmcalculators.com/simplex-method-calculator/" target="_blank" class="text-blue-600">online nástroj</a>.</li>
            </ul>
        </div>
    </div>
</template>