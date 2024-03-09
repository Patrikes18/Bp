<script setup lang="ts">
	import { ref, computed, watch } from "vue";
	
	class Edge{
    vertices: [string, string]
    value: number

    constructor(v1: string, v2: string, value: number){
        this.vertices = [v1,v2]
        this.value = value
    }

    public hasVertices(v1: string, v2: string): boolean{
        return (this.vertices[0] == v1 && this.vertices[1] == v2) || (this.vertices[0] == v2 && this.vertices[1] == v1)
    }
}
	const vertices = ref<{ [id: string] : number }>({})
	const edges = ref<Edge[]>([])
	const data = ref('')
	const vertexname = ref('')
	const vertexvalue = ref(0)

	const selected1 = ref('')
	const selected2 = ref('')
	const edgeval = ref(0)

	const options1 = computed(() => {return Object.keys(vertices.value)})
	const options2 = computed(() => {
		return Object.keys(vertices.value).filter(val => {
				return (val != selected1.value) && 
					(edges.value.find(edge => edge.hasVertices(val, selected1.value)) == undefined)
			})
	})



	async function call() {
		console.log("CALL", JSON.stringify({ vertices: vertices.value, edges: edges.value }))
		data.value = await (await fetch('http://127.0.0.1:5000', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify({ vertices: vertices.value, edges: edges.value })
		})).text()
		console.log(data.value)
	}


	function addVertex(){
        vertices.value[vertexname.value] = vertexvalue.value
        vertexname.value = ""
        vertexvalue.value = 0
		console.log(vertices.value)
		// console.log(options1.value)
	}

	
	function addEdge(){
		edges.value.push(new Edge(selected1.value, selected2.value, edgeval.value))
		selected1.value = ""
		selected2.value = ""
		edgeval.value = 0
		console.log(edges.value)
	}

	watch(selected1, () => console.log(options2.value))

</script>

<template>
	<div class="flex flex-col gap-8 mx-16">
		<div class="flex flex-col gap-4">
			<input v-model="vertexname" type="text">
		
			<input v-model="vertexvalue" type="number">
			<button @click="addVertex" :disabled="!(vertices[vertexname] === undefined && vertexname.length != 0 && vertexvalue >= 0 && vertexvalue <= 1)" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pridať vrchol</button>
            <div v-if="vertices[vertexname] != undefined && vertexname.length != 0">
                <p class="mt-2 font-bold text-red-900 dark:text-red-500">Daný vrchol už existuje</p>
            </div>
            <div v-if="vertexvalue < 0 || vertexvalue > 1">
                <p class="mt-2 font-bold text-red-900 dark:text-red-500">Váha vrcholu je mimo intervalu [0, 1]</p>
            </div>
		</div>
		
		<div class="flex flex-col gap-4">
			<select v-model="selected1">
				<option v-for="option in options1" v-bind:key="option">
					{{ option}}
				</option>
			</select>

			<select v-model="selected2">
				<option v-for="option in options2" v-bind:key="option">
					{{ option}}
				</option>
			</select>
			<input v-model="edgeval" type="number">
			<button @click="addEdge" :disabled="!(edgeval >= 0 && edgeval <= 1 && edgeval <= Math.min(vertices[selected1], vertices[selected2]))" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pridať hranu</button>
            <div v-if="edgeval < 0 || edgeval > 1">
                <p class="mt-2 font-bold text-red-900 dark:text-red-500">Váha hrany je mimo intervalu [0, 1]</p>
            </div>
            <div v-if="edgeval > Math.min(vertices[selected1], vertices[selected2])">
                <p class="mt-2 font-bold text-red-900 dark:text-red-500">Váha hrany je väčšia ako minimum z vrcholov <span class="italic">{{ selected1 }}</span> a <span class="italic">{{ selected2 }}</span></p>
            </div>
		</div>

		<div class="flex flex-col gap-4">
			<button @click="call">Poslať</button>
		</div>

		<div class="border my-8" v-html="data"></div>
	</div>
</template>

