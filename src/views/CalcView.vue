<script setup lang="ts">
	import { ref, computed, watch } from "vue";
	import { saveAs, encodeBase64  } from "@progress/kendo-file-saver";
	
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

	public hasVertex(v: string): boolean{
        return this.vertices[0] == v || this.vertices[1] == v
    }
}
	const vertices = ref(new Map<string, number>())
	const edges = ref<Edge[]>([])
	const data = ref('')
	const vertexname = ref('')
	const vertexvalue = ref(0)

	const selected1 = ref('')
	const selected2 = ref('')
	const edgeval = ref(0)

	const options1 = computed(() => {return Array.from(vertices.value.keys())})
	const options2 = computed(() => {
		return Array.from(vertices.value.keys()).filter(val => {
				return (val != selected1.value) && 
					(edges.value.find(edge => edge.hasVertices(val, selected1.value)) == undefined)
			})
	})



	async function call() {
		console.log("CALL", JSON.stringify({ vertices: Object.fromEntries(vertices.value), edges: edges.value }))
		data.value = await (await fetch('http://127.0.0.1:5000', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'}, 
		body: JSON.stringify({ vertices: Object.fromEntries(vertices.value), edges: edges.value })
		})).text()
		console.log(data.value)
	}


	function addVertex(){
        vertices.value.set(vertexname.value, vertexvalue.value)
        vertexname.value = ""
        vertexvalue.value = 0
		console.log(vertices.value)
		// console.log(options1.value)
	}

	function removeVertex(vertex: string){
		console.log(vertex)
		vertices.value.delete(vertex)
		edges.value = edges.value.filter((x) => !x.hasVertex(vertex))
	}

	function addEdge(){
		edges.value.push(new Edge(selected1.value, selected2.value, edgeval.value))
		selected1.value = ""
		selected2.value = ""
		edgeval.value = 0
	}

	function saveFile(){
		const dataURI = "data:text/plain;base64," + encodeBase64(data.value);
		saveAs(dataURI, "graph.svg")
	}

	function saveInput(){
		const blob = new Blob([JSON.stringify({ vertices: Object.fromEntries(vertices.value), edges: edges.value })], { type: 'application/json' });
		saveAs(blob, 'graphData.json');
	}
	function uploadFile(event: any){
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (evt: any) => {
			const res = JSON.parse(evt.target.result)
			vertices.value = new Map<string, number>()
			for (const key in res["vertices"]){
				vertices.value.set(key, res["vertices"][key])
			}
			edges.value = []
			for (const value of res["edges"]){
				edges.value.push(new Edge(value["vertices"][0], value["vertices"][1], value["value"]))
			}
		};
		reader.readAsText(file);
	};

	watch(selected1, () => console.log(options2.value))

</script>

<template>
	<div class="flex flex-col gap-8 mx-16">
		<div class="flex gap-10 flex-wrap justify-center pt-5">
			<input type="file" @change="uploadFile">
			<button @click="saveInput" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Exportovať dáta typu JSON</button>
		</div>
		<div class="flex gap-10 w-full flex-wrap justify-center">
			<div class="flex flex-col gap-4">
				<input v-model="vertexname" type="text">
			
				<input v-model="vertexvalue" type="number">
				<button @click="addVertex" :disabled="!(vertices.get(vertexname) === undefined && vertexname.length != 0 && vertexvalue >= 0 && vertexvalue <= 1)" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pridať vrchol</button>
				<div v-if="vertices.get(vertexname) != undefined && vertexname.length != 0">
					<p class="mt-2 font-bold text-red-900 dark:text-red-500">Daný vrchol už existuje</p>
				</div>
				<div v-if="vertexvalue < 0 || vertexvalue > 1">
					<p class="mt-2 font-bold text-red-900 dark:text-red-500">Váha vrcholu je mimo intervalu [0, 1]</p>
				</div>
			</div>
			<div class="flex flex-wrap flex-col">
					<div v-for="[v, val] in vertices" :key="v" class="border flex justify-center p-1">
						{{ v }}, {{ val }} 
						<span class="pl-8" @click="removeVertex(v)">X</span>
					</div>
			</div>
		</div>

		<div class="flex gap-10 w-full flex-wrap justify-center">
			<div class="flex flex-col gap-4">
				<select v-model="selected1">
					<option v-for="option in options1" v-bind:key="option">
						{{ option }}
					</option>
				</select>

				<select v-model="selected2">
					<option v-for="option in options2" v-bind:key="option">
						{{ option }}
					</option>
				</select>
				<input v-model="edgeval" type="number">
				<button @click="addEdge" :disabled="!(edgeval >= 0 && edgeval <= 1 && edgeval <= Math.min(vertices.get(selected1) ?? 0, vertices.get(selected2) ?? 0))" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pridať hranu</button>
				<div v-if="edgeval < 0 || edgeval > 1">
					<p class="mt-2 font-bold text-red-900 dark:text-red-500">Váha hrany je mimo intervalu [0, 1]</p>
				</div>
				<div v-if="edgeval > Math.min(vertices.get(selected1) ?? 0, vertices.get(selected2) ?? 0)">
					<p class="mt-2 font-bold text-red-900 dark:text-red-500">Váha hrany je väčšia ako minimum z vrcholov <span class="italic">{{ selected1 }}</span> a <span class="italic">{{ selected2 }}</span></p>
				</div>
			</div>
			<div class="flex flex-wrap flex-col">
				<div v-for="edge in edges" :key="edge.vertices[0] + edge.vertices[1]" class="border flex justify-center p-1">
					{{ edge.vertices[0] }} &LeftRightArrow; {{ edge.vertices[1] }}, {{ edge.value }}
					<span class="pl-8" @click="edges = edges.filter(x => x != edge)">X</span>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<button @click="call" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Poslať</button>
		</div>

		<div class="border my-8" v-html="data"></div>
		<button @click="saveFile">Save</button>
	</div>
</template>

