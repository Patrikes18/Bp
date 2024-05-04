<script setup lang="ts">
	import { RouterLink } from 'vue-router'
</script>

<template>
	<div class="flex justify-center gap-40 my-40">
		<RouterLink to="/learn" >
			<!-- Karta, ktorá presmerúva na časť s výukou. -->
			<div class="container">
				<img width="300px" style="border-radius: 50px" src="../assets/open-book.jpg" alt="Výuka fuzzy frakcionálneho farbenia"/>
				<div class="middle">
					<div class="text">Výuka</div>
				</div>
			</div>
		</RouterLink>

		<RouterLink to="/calc">
			<!-- Karta, ktorá presmerúva na časť s kalkulačkou. -->
			<div class="container">
				<img width="300px" style="border-radius: 50px" src="../assets/calc.jpg" alt="Kalkulačka fuzzy frakcionálneho farbenia"/>
				<div class="middle">
					<div class="text">Kalkulačka</div>
				</div>
			</div>
		</RouterLink>
	</div>
</template>


<style scoped>
	.container {
		position: relative;
	}

	.middle {
		transition: .5s ease;
		opacity: 0;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		text-align: center;
	}

	.container:hover .middle {
		opacity: 1;
	}

	.text {
		background-color: gray;
		color: white;
		font-size: 16px;
		padding: 16px 32px;
	}
</style>