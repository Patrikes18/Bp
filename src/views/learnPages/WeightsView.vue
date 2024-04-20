<script setup lang="ts">
</script>

<template>
		<div class="flex flex-wrap flex-col gap-8 items-center">
			<p class="font-sans text-2xl font-bold text-center">Kontrola váh farieb</p>
            <div>
                <ul class="list-disc my-8">
                    <li>Každému vrcholu treba na základe jeho výskytu v nezávislých množinách pozrieť, či súčet váh farieb jednotlivých nezávislých množín, ktorých je vrchol súčasťou sa rovná 1. Ak nie, tak treba prepočítať nové váhy, tak aby sa zachoval pomer. Budeme pritom používať tento vzorec:</li>
                    <math display="block">
                        <mtext>nová váha</mtext>
                        <mtd>
                            <mo>=</mo>
                        </mtd>
                        <mfrac>
                            <mrow>
                                <mn>1</mn>
                            </mrow>
                            <mrow>
                                <mi>súčet pôvodných váh vrcholu</mi>
                            </mrow>
                        </mfrac>
                        <mspace width="10px"></mspace>
                        <mtext> * pôvodná váha</mtext>
                    </math>
                    <li>V našom prípade je súčet váh farieb pre každý vrchol rovný 1 a teda nič neprepočítavame.</li>
                </ul>
                
            </div>
		</div>
</template>

<style scoped>
    li{
        margin: 20px 0;
    }
</style>