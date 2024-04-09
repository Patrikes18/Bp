<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<RouterView></RouterView>
    <div class="flex gap-8 fixed relative bottom-5 justify-center">
		<RouterLink to="/learn/introduct">1</RouterLink>
		<RouterLink to="/learn/strong">2</RouterLink>
		<RouterLink to="/learn/independent">3</RouterLink>
		<RouterLink to="/learn/linear">4</RouterLink>
		<RouterLink to="/learn/linear2">5</RouterLink>
		<RouterLink to="/learn/weights">6</RouterLink>
		<RouterLink to="/learn/weak">7</RouterLink>
		<RouterLink to="/learn/result">8</RouterLink>
	</div>
</template>