<script setup lang="ts">
</script>

<template>
		<div class="flex flex-wrap flex-col gap-8 items-center">
			<p class="font-sans text-2xl font-bold text-center">Slabo susediace vrcholy</p>
            <div>
                <ul class="list-disc">
                    <li>Poznáme už farby a aj váhy farieb silne susediacich vrcholov. Slabo susediacim vrcholom budeme farby priraďovať na základe toho, s ktorým vrcholom je množstvo sily najmenšie. Množstvo sily budeme počítať takto:</li>
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
                    <li>V našom prípade je slabo susediaci vrchol <strong>f</strong> a má hrany s vrcholmi <strong>a</strong> a <strong>c</strong>. Jednotlivé množstvá síl sú:</li>
                    <ul class="list-disc mx-10" style="list-style-type: circle">
                        <li>I(a, f) = 0,4.</li>
                        <li>I(c, f) = 0,333.</li>
                    </ul>
                    <li>Vrchol <strong>f</strong> teda dostane rovnaké farby ako má vrchol <strong>c</strong>.</li>
                </ul>
            </div>
		</div>
</template>

<style scoped>
    li{
        margin: 20px 0;
    }
</style>