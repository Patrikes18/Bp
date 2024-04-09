<script setup lang="ts">
</script>

<template>
    <div class="flex justify-center border-solid border-2 p-8 my-20 mx-32 bg-white">
		<div class="flex flex-wrap flex-col gap-8">
			<p class="font-sans text-2xl font-bold text-center">Slabo susediace vrcholy</p>
            <div>
                <p>Poznáme už farby a váhy farieb silne susediacich vrcholov. Teraz ešte potrebuje priradiť farby k slabo susediacim vrcholom. Farby budeme priraďovať na základe toho, s ktorým vrcholom je množstvo sily najmenšie. Množstvo sily budeme počítať takto:</p>
                <div class="mx-20">
                    I(a, b) =
                    <div class="fraction">
                        <span class="fup">&mu;(ab)</span>
                        <span class="bar">/</span>
                        <span class="fdn">min(&sigma;(a), &sigma;(b))</span>
                    </div>
                </div>
                <p>V našom prípade je slabo susediaci vrchol <strong>f</strong> a má hrany s vrcholmi <strong>a</strong> a <strong>c</strong>. Jenotlivé množstvá síl sú:</p>
                <ul class="list-disc mx-10">
                    <li>I(a, f) = 0,4</li>
                    <li>I(c, f) = 0,333</li>
                </ul>
                <p>Vrchol <strong>f</strong> teda dostane rovnaké farby ako má vrchol <strong>c</strong>.</p>
            </div>
		</div>
	</div>
</template>

<style>
    .fraction {
        display: inline-block;
        vertical-align: middle; 
        margin: 0 0.2em 0.4ex;
        text-align: center;
    & > span{
        display: block;
        padding-top: 0.15em;
    }
    & span{
        &.fdn{
        border-top: thin solid black;
        }
        &.bar{
        display: none;
        }
    }
    }
</style>