<script setup lang="ts">
</script>

<template>
    <div class="flex justify-center border-solid border-2 p-8 my-20 mx-32 bg-white">
		<div class="flex flex-wrap flex-col gap-8">
			<p class="font-sans text-2xl font-bold text-center">Kontrola váh farieb</p>
            <div>
                <p>Každému vrcholu treba na základe jeho výskytu v nezávislých množinách pozrieť, či súčet váh farieb jednotlivých nezávislých množín, ktorých je vrchol súčasťou sa rovná 1. Ak nie, tak treba prepočítať nové váhy, tak aby sa zachoval pomer. Budeme pritom používať tento vzorec:</p>
                <div class="mx-20">
                    nová váha = 
                    <div class="fraction">
                        <span class="fup">1</span>
                        <span class="bar">/</span>
                        <span class="fdn">súčet pôvodných váh vrcholu</span>
                    </div>
                    * pôvodná váha
                </div>
                <p>V našom prípade je súčet váh pre každý vrchol rovný 1 a teda nič neprepočítavame.</p>
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