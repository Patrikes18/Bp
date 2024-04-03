<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<RouterView></RouterView>
    <div class="flex gap-8 fixed relative bottom-5 justify-center">
		<RouterLink to="/learn/introduct">1</RouterLink>
		<RouterLink to="/learn/strong">2</RouterLink>
		<RouterLink to="/learn/independent">3</RouterLink>
	</div>
</template>