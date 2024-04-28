<script setup lang="ts">
</script>

<template>
	<p class="font-sans text-2xl font-bold text-center">Frakcionálne farbenie fuzzy grafov</p>
	<div class="flex flex-wrap flex-row gap-8 mx-16">
		<div>
			<ul class="list-disc">
				<li>Jedná sa o farbenie fuzzy grafov, kedy každému vrcholu priraďujeme množinu farieb.</li>
				<li><i>Nech <b>G</b> je fuzzy graf a nech <b>p</b> a <b>q</b> sú celé čísla, pre ktoré platí <b>0 &lt; q &le; p</b>. Potom <b>p:q</b> farbenie je zobrazenie množiny <b>q</b> rozdielnych farieb, ktoré vyberáme z množiny <b>p</b> farieb, na vrcholy tak, že množina farieb použitých na jeden vrchol nebude obsahovať ani jednu spoločnú farbu so susediacimi vrcholmi.</i></li>
			</ul>
		</div>
		<div class="w-full">
			<div class="flex flex-wrap justify-evenly">
				<img src="/src/assets/graph.png" alt="Graf G" >
				<span class="flex items-center text-4xl">&rArr;</span>
				<span class="flex items-center text-4xl">...</span>
				<span class="flex items-center text-4xl">&rArr;</span>
				<img src="/src/assets/graphcolored.png" alt="Graf G">
			</div>
		</div>
	</div>
</template>