<script setup lang="ts">
</script>

<template>
	<div class="flex flex-wrap flex-col gap-8">
		<p class="font-sans text-2xl font-bold text-center">Frakcionálne farbenie fuzzy grafov</p>
		<div class="flex flex-wrap flex-row gap-8 mx-16">
			<div>
				<p>Jedná sa o farbenie fuzzy grafov, kedy každému vrcholu priraďujeme množinu farieb.</p>
				<p>Nech <strong>G</strong> je fuzzy graf a nech <strong>p</strong> a <strong>q</strong> sú celé čísla, pre ktoré platí <strong>0 &lt; q &le; p</strong>. Potom <strong>p:q</strong> farbenie je zobrazenie množiny <strong>q</strong> rozdielnych farieb, ktoré vyberáme z množiny <strong>p</strong> farieb, na vrcholy tak, že množina farieb použitých na jeden vrchol nebude obsahovať ani jednu spoločnú farbu so susediacimi vrcholmi.</p>
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
	</div>
</template>