<script setup lang="ts">
</script>

<template>
		<div class="flex flex-wrap flex-col gap-8">
			<p class="font-sans text-2xl font-bold text-center">Slabo susediace vrcholy</p>
            <div>
                <p>Poznáme už farby a aj váhy farieb silne susediacich vrcholov. Teraz ešte potrebuje priradiť farby k slabo susediacim vrcholom. Farby budeme priraďovať na základe toho, s ktorým vrcholom je množstvo sily najmenšie. Množstvo sily budeme počítať takto:</p>
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
                <p>V našom prípade je slabo susediaci vrchol <strong>f</strong> a má hrany s vrcholmi <strong>a</strong> a <strong>c</strong>. Jednotlivé množstvá síl sú:</p>
                <ul class="list-disc mx-10">
                    <li>I(a, f) = 0,4</li>
                    <li>I(c, f) = 0,333</li>
                </ul>
                <p>Vrchol <strong>f</strong> teda dostane rovnaké farby ako má vrchol <strong>c</strong>.</p>
            </div>
		</div>
</template>