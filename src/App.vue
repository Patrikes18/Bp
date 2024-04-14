<script setup lang="ts">
	import { RouterLink, RouterView } from 'vue-router'
	import DefaultHeader from './components/DefaultHeader.vue';

</script>

<template>
	<DefaultHeader />
	<div class="wrapper">
		<nav class="flex justify-center gap-8">
			<div v-if="$route.path != '/'">
				<RouterLink to="/" >Hlavná stránka</RouterLink>
			</div>
			<div v-if="$route.path != '/calc' && $route.path != '/'">
				<RouterLink to="/calc">Kalkulačka fuzzy frakcionálneho farbenia</RouterLink>
			</div>
			<div v-if="!$route.path.includes('/learn') && $route.path != '/'">
				<RouterLink to="/learn">Výuka fuzzy frakcionálneho farbenia</RouterLink>
			</div>
			
		</nav>
	</div>
	<RouterView />
</template>
