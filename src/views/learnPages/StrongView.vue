<script setup lang="ts">
</script>

<template>
	<p class="font-sans text-2xl font-bold text-center">Silne susediace vrcholy 1</p>
	<div class="grid grid-cols-2 gap-8 mx-10 items-center h-full">
		<div class="flex flex-wrap flex-col gap-8 mx-16 items-center">
			<div>
				<img src="/src/assets/graph.png" alt="Graf G">
			</div>
		</div>
		<div>
			<ul  class="list-disc">
				<li><i>Nech <b>G = (V, &sigma;, &mu;)</b> je fuzzy graf. Dva rôzne vrcholy sú silne susediace ak <sup>1</sup>&frasl;<sub>2</sub> min(&sigma;(a), &sigma;(b)) &le; &mu;(ab). V opačnom prípade sa jedná o slabo susediace vrcholy.</i></li>
			</ul>
		</div>
	</div>
</template>