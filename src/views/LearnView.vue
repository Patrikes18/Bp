<script setup lang="ts">
	import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
	import { ref } from 'vue'

	import Layout from '@/components/LearnLayout.vue';

	const routes = {
		1: "/learn/introduct", 
		2: "/learn/strong",
		3: "/learn/strong2",
		4: "/learn/strong3",
		5: "/learn/independent",
		6: "/learn/independent2",
		7: "/learn/independent3",
		8: "/learn/linear",
		9: "/learn/linear2",
		10: "/learn/weights",
		11: "/learn/color",
		12: "/learn/weak",
		13: "/learn/result"
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
				<RouterLink v-for="(value, key) in routes" v-bind:key="key" :to="value" :class="active == value ? 'text-red-700 ':''" 
				class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 px-2 py-1 rounded-xl text-xl">
					{{ key }}
				</RouterLink>
			</div>
		</template>
	</Layout>
</template>