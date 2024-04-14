<script setup lang="ts">
	import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
	import { ref } from 'vue'

	import Layout from '@/components/LearnLayout.vue';

	const routes = {
		1: "/learn/introduct", 
		2: "/learn/strong",
		3: "/learn/independent",
		4: "/learn/linear",
		5: "/learn/linear2",
		6: "/learn/weights",
		7: "/learn/weak",
		8: "/learn/result"
	}

	const route = useRoute()
	const router = useRouter()
	const active = ref(route.path)
	router.beforeEach((to) =>{
		active.value = to.path
	})
	


</script>

<template>
	<Layout>
		<template v-slot:content>
			<RouterView></RouterView>
		</template>
		<template v-slot:navbar>
			<div class="flex gap-4 justify-center w-full">
				<!-- <RouterLink to="/learn/introduct">1</RouterLink>
				<RouterLink to="/learn/strong">2</RouterLink>
				<RouterLink to="/learn/independent">3</RouterLink>
				<RouterLink to="/learn/linear">4</RouterLink>
				<RouterLink to="/learn/linear2">5</RouterLink>
				<RouterLink to="/learn/weights">6</RouterLink>
				<RouterLink to="/learn/weak">7</RouterLink>
				<RouterLink to="/learn/result">8</RouterLink> -->
		
				<RouterLink v-for="(value, key) in routes" v-bind:key="key" :to="value" :class="active == value ? 'text-red-700 ':''" 
				class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 px-2 py-1 rounded-xl text-xl">
					{{ key }}
				</RouterLink>
			</div>
		</template>
	</Layout>
</template>