<script setup lang="ts">
</script>

<template>
    <p class="font-sans text-2xl font-bold text-center">Slabo susediace vrcholy</p>
    <div>
        <ul class="list-disc">
            <li>Slabo susediacim vrcholom budeme farby priraďovať na základe toho, s ktorým vrcholom je množstvo sily najmenšie. Množstvo sily budeme počítať takto:</li>
            <math display="block">
                <mtext>I(a, b)</mtext>
                <mtd>
                    <mo>=</mo>
                </mtd>
                <mfrac>
                    <mrow>
                        <mi>&mu;(ab)</mi>
                    </mrow>
                    <mrow>
                        <mi>min(&sigma;(a), &sigma;(b))</mi>
                    </mrow>
                </mfrac>
            </math>
            <li>V našom prípade je slabo susediaci vrchol <b>f</b> a má hrany s vrcholmi <b>a</b> a <b>c</b>. Jednotlivé množstvá síl sú:</li>
            <ul class="list-disc mx-10" style="list-style-type: circle">
                <li>I(a, f) = 0,4.</li>
                <li>I(c, f) = 0,333.</li>
            </ul>
            <li>Vrchol <b>f</b> teda dostane rovnaké farby ako má vrchol <b>c</b>.</li>
        </ul>
    </div>
</template>

<style scoped>
    li{
        margin: 20px 0;
    }
</style>