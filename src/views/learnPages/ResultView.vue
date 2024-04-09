<script setup lang="ts">
</script>

<template>
    <div class="flex justify-center border-solid border-2 p-8 my-20 mx-32 bg-white">
		<div class="flex flex-wrap flex-col gap-8">
			<p class="font-sans text-2xl font-bold text-center">Výsledné vyfarbenie</p>
			<div class="grid grid-cols-2 gap-8 mx-16">
                <div class="flex flex-wrap flex-col gap-8 mx-16">
                    <div>
                        <img src="/src/assets/graphcolored.png" alt="Graf G">
                    </div>
                </div>
				<div>
					<p>Posledným krokom je samotné vyfarbenie. Každý vrchol dostane tie farby, ktoré dostali nezávislé množiny, ktorých je súčasťou. Slabo susediace vrcholy budú mať rovnaké farby aké sme im priradili v predchádzajúcom kroku.</p>
                    <p>Náš graf bude takto vyfarbený:</p>
                    <ul class="list-disc mx-10">
                        <li><strong>a</strong> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>žltá</li>
                        <li><strong>b</strong> - <sup>1</sup>&frasl;<sub>2</sub> modrá a <sup>1</sup>&frasl;<sub>2</sub>zelená</li>
                        <li><strong>c</strong> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                        <li><strong>d</strong> - <sup>1</sup>&frasl;<sub>2</sub> modrá a <sup>1</sup>&frasl;<sub>2</sub>žltá</li>
                        <li><strong>e</strong> - <sup>1</sup>&frasl;<sub>2</sub> zelená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                        <li><strong>f</strong> - <sup>1</sup>&frasl;<sub>2</sub> červená a <sup>1</sup>&frasl;<sub>2</sub>fialová</li>
                    </ul>
                </div>
			</div>
		</div>
	</div>
</template>