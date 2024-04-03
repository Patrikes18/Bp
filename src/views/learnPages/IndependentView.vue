<script setup lang="ts">
</script>

<template>
    <div class="flex justify-center border-solid border-2 p-10 m-32 bg-white">
		<div class="flex flex-wrap flex-col gap-8">
			<p class="font-sans text-2xl font-bold text-center">Nezávislé množiny</p>
			<div class="grid grid-cols-2 gap-8 mx-16">
                <div class="flex flex-wrap flex-col gap-8 mx-16">
                    <div>
                        <img src="/src/assets/graphstrong.png" alt="Graf G">
                    </div>
                </div>
				<div>
					<p>Po nájdení silne susediacich vrcholov zo získaného grafu zistíme nezávilsé množiny</p>
					<p><i>Nezávislá množina vrcholov <strong>V</strong> je množina vrcholov, kedy medzi ľubovoľnou dvojicou vrcholov <strong>u, v &isin; V</strong> neexistuje hrana.</i></p>
                    <p>Pre náš graf sú nezávislé množiny:</p>
                    <ul class="list-disc mx-10">
                        <li>S_1 = {a, c}.</li>
                        <li>S_2 = {a, d}.</li>
                        <li>S_3 = {b, d}.</li>
                        <li>S_4 = {b, e}.</li>
                        <li>S_5 = {c, e}.</li>
                    </ul>
                </div>
			</div>
		</div>
	</div>
</template>