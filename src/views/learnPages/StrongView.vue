<script setup lang="ts">
</script>

<template>
    <div class="flex justify-center border-solid border-2 p-8 my-20 mx-32 bg-white">
		<div class="flex flex-wrap flex-col gap-8">
			<p class="font-sans text-2xl font-bold text-center">Silne susediace vrcholy</p>
			<div class="grid grid-cols-2 gap-8 mx-10">
                <div class="flex flex-wrap flex-col gap-8 mx-16">
                    <div>
                        <img src="/src/assets/graphstrongremove.png" alt="Graf G">
                    </div>
                </div>
				<div>
					<p>Ako prvé si nájdeme silne susediace vrcholy</p>
					<p><i>Nech <strong>G = (V, &sigma;, &mu;)</strong> je fuzzy graf. Dva rôzne vrcholy sú silne susediace ak <sup>1</sup>&frasl;<sub>2</sub>min(&sigma;(a), &sigma;(b)) &le; &mu;(ab). V opačnom prípade sa jedná o slabo susediace vrcholy.</i></p>
                    <p>Pre náš graf je vrchol <strong>f</strong> slabo susediacim vrcholom a preto vrchol <strong>f</strong> aj s jeho hranami budeme na chvíľu ignorovať.</p>
                </div>
			</div>
		</div>
	</div>
</template>