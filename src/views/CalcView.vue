<script setup lang="ts">
	import { ref, computed } from "vue";
	import { saveAs, encodeBase64  } from "@progress/kendo-file-saver";
	import { sendToAPI } from "@/services/ServerService" 
	import { Edge } from "@/models/EdgeModel"
	
	/**
	 * zoznam všetkých vrcholov.
	 */
	const vertices = ref(new Map<string, number>())
	
	/**
	 * Zoznam všetkých hrán.
	 */
	const edges = ref<Edge[]>([])

	/**
	 * Odpoveď od API.
	 */
	const ret = ref(["", ""])

	/**
	 * Vrchol získaný od užívateľa.
	 */
	const vertexname = ref('')

	/**
	 * Váha vrcholu získaný od užívateľa.
	 */
	const vertexvalue = ref(0)

	/**
	 * Prvý vybraný vrchol pre hranu.
	 */
	const selected1 = ref('')

	/**
	 * Druhý vybraný vrchol pre hranu.
	 */
	const selected2 = ref('')

	/**
	 * Váha hrany.
	 */
	const edgeval = ref(0)

	/**
	 * Premenná testujúca správnosť vstupného súboru.
	 */
	const filetest = ref(true)

	/**
	 * Chybová hláška pre súbor.
	 */
	const filemessage = ref('')

	/**
	 * Zoznam možných prvých vrcholov pre hranu.
	 */
	const options1 = computed(() => {return Array.from(vertices.value.keys())})

	/**
	 * Zoznam možných druhých vrcholov pre hranu.
	 */
	const options2 = computed(() => {
		return Array.from(vertices.value.keys()).filter(val => {
				return (val != selected1.value) && 
					(edges.value.find(edge => edge.hasVertices(val, selected1.value)) == undefined)
			})
	})

	/**
	 * Funkcia volajúca API, odpoveď ukladá do premennej ret.
	 */
	async function callAPI() {
		ret.value = await sendToAPI(vertices.value, edges.value)
	}

	/**
	 * Funkcia, ktorá blokuje tlačítko, ktoré pridáva vrcholy, ak je vrchol chybný.
	 */
	function testAddVertex() {
		return !(vertices.value.get(vertexname.value) === undefined && vertexname.value.length != 0 && vertexvalue.value >= 0 && vertexvalue.value <= 1)
	}

	/**
	 * Funkcia, ktorá blokuje tlačítko, ktoré pridáva hrany, ak je hrana chybná.
	 */
	function testAddEdge() {
		return !(edgeval.value >= 0 && edgeval.value <= Math.min(vertices.value.get(selected1.value) ?? 0, vertices.value.get(selected2.value) ?? 0))
	}

	/**
	 * Funkcia, ktorá blokuje odoslanie požiadavku na API, ak je prázdny zoznam vrcholov.
	 */
	function testSend() {
		if (vertices.value.size == 0) {
			return true
		}
		return false
	}

	/**
	 * Funkcia, ktorá pridáva vrchol do zoznamu vrcholov.
	 */
	function addVertex(){
        vertices.value.set(vertexname.value, vertexvalue.value)
        vertexname.value = ""
        vertexvalue.value = 0
	}

	/**
	 * Funkcia, ktorá odstraňuje zadaný vrchol zo zoznamu.
	 * @param vertex Vrchol na odstránenie.
	 */
	function removeVertex(vertex: string){
		vertices.value.delete(vertex)
		edges.value = edges.value.filter((x) => !x.hasVertex(vertex))
	}

	/**
	 * Funkcia, ktorá pridáva hranu do zoznamu hrán.
	 */
	function addEdge(){
		edges.value.push(new Edge(selected1.value, selected2.value, edgeval.value))
		selected1.value = ""
		selected2.value = ""
		edgeval.value = 0
	}

	/**
	 * Funkcia, ktorá ukladá výstupný fuzzy graf vo formáte SVG.
	 */
	function saveFile(){
		const dataURI = "data:text/plain;base64," + encodeBase64(ret.value[1]);
		saveAs(dataURI, "graph.svg")
	}

	/**
	 * Funkcia, ktorá ukladá vstupný fuzzy graf vo formáte JSON.
	 */
	function saveInput(){
		const blob = new Blob([JSON.stringify({ vertices: Object.fromEntries(vertices.value), edges: edges.value })], { type: 'application/json' });
		saveAs(blob, 'graphData.json');
	}

	/**
	 * Funkcia, ktorá načítava súbor s fuzzy grafom vo formáte JSON.
	 * @param event Udalosť, ktorá má v sebe uložený vstupný súbor.
	 */
	function uploadFile(event: any){
		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onload = (evt: any) => {
			try {
				filetest.value = true
				const res = JSON.parse(evt.target.result)
				vertices.value = new Map<string, number>()
				edges.value = []
				// Zapĺňanie zoznamu vrcholov.
				for (const key in res["vertices"]){
					if (!vertices.value.has(key) && res["vertices"][key] >= 0 && res["vertices"][key] <= 1) {
						vertices.value.set(key, res["vertices"][key])
					}
					else {
						vertices.value = new Map<string, number>()
						filemessage.value = "vertex"
						throw new Error("vertex")
					}
				}
				// Zapĺňanie zoznamu hrán.
				for (const value of res["edges"]){
					if (vertices.value.has(value["vertices"][0]) && vertices.value.has(value["vertices"][1]) && value["vertices"][0] != value["vertices"][1] && 
						value["value"] >= 0 && value["value"] <= Math.min((vertices.value.get(value["vertices"][0]) ?? 0) && (vertices.value.get(value["vertices"][1]) ?? 0))) {
						edges.value.push(new Edge(value["vertices"][0], value["vertices"][1], value["value"]))
					} else {
						vertices.value = new Map<string, number>()
						edges.value = []
						filemessage.value = "edge"
						throw new Error("edge")
					}
					
				}
			} catch (e:any) {
				filetest.value = false
			}
		};
		reader.readAsText(file);
	};

</script>

<template>
	<div class="flex flex-col gap-8 mx-16 p-8">
		<div class="flex gap-10 flex-wrap justify-center pt-5">
			<div>
				<!-- Spravovanie vstupného súboru. -->
				<input type="file" @change="uploadFile" accept=".json">

				<!-- Chybové hlášky. -->
				<div v-if="!filetest && filemessage == 'vertex'">
					<p class="mt-2 font-bold dark:text-red-500">Chybné dáta vrcholov</p>
				</div>
				<div v-else-if="!filetest && filemessage == 'edge'">
					<p class="mt-2 font-bold dark:text-red-500">Chybné dáta hrán</p>
				</div>
				<div v-else-if="!filetest">
					<p class="mt-2 font-bold dark:text-red-500">Chybný formát súboru</p>
				</div>
			</div>

			<!-- Uloženie vstupného fuzzy grafu. -->
			<button @click="saveInput()" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Exportovať dáta typu JSON</button>
		</div>

		<div class="flex gap-10 flex-wrap justify-center p-8 mx-16">
			<!-- Spravovanie vrcholov. -->
			<div class="flex flex-col gap-4">
				<!-- Vstupný formulár pre vrcholy. -->
				<div class="flex flex-row gap-8 justify-between">
					<label>Zadajte názov vrcholu:</label>
					<input v-model="vertexname" type="text">
				</div>
				<div class="flex flex-row gap-8 justify-between">
					<label>Zadajte váhu vrcholu:</label>
					<input v-model="vertexvalue" type="number">
				</div>
				<button @click="addVertex" :disabled="testAddVertex()" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pridať vrchol</button>

				<!-- Chybové hlášky. -->
				<div v-if="vertices.get(vertexname) != undefined && vertexname.length != 0">
					<p class="mt-2 font-bold dark:text-red-500">Daný vrchol už existuje</p>
				</div>
				<div v-if="vertexvalue < 0 || vertexvalue > 1">
					<p class="mt-2 font-bold dark:text-red-500">Váha vrcholu je mimo intervalu [0, 1]</p>
				</div>
			</div>

			<div class="flex flex-wrap flex-col">
				<!-- Tabuľka ukazujúca zoznam vrcholov. -->
				<div v-for="[v, val] in vertices" :key="v" class="border flex justify-center p-1">
					{{ v }}, {{ val }} 
					<span class="pl-8" @click="removeVertex(v)">X</span>
				</div>
			</div>
		</div>


		<div class="flex gap-10 flex-wrap justify-center p-8 mx-16">
			<!-- Spravovanie hrán. -->
			<div class="flex flex-col gap-4">
				<!-- Vstupný formulár pre hrany. -->
				<div class="flex flex-row gap-8 justify-between">
					<label>Vyberte prvý vrchol hrany:</label>
					<select v-model="selected1" class="min-w-36">
						<option v-for="option in options1" v-bind:key="option">
							{{ option }}
						</option>
					</select>
				</div>
				<div class="flex flex-row gap-8 justify-between">
					<label>Vyberte druhý vrchol hrany:</label>
					<select v-model="selected2" class="min-w-36">
						<option v-for="option in options2" v-bind:key="option">
							{{ option }}
						</option>
					</select>
				</div>
				<div class="flex flex-row gap-8 justify-between">
					<label>Zadajte váhu hrany:</label>
					<input v-model="edgeval" type="number">
				</div>
				<button @click="addEdge" :disabled="testAddEdge()" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pridať hranu</button>

				<!-- Chybové hlášky. -->
				<div v-if="edgeval < 0 || edgeval > 1">
					<p class="mt-2 font-bold dark:text-red-500">Váha hrany je mimo intervalu [0, 1]</p>
				</div>
				<div v-if="edgeval > Math.min(vertices.get(selected1) ?? 0, vertices.get(selected2) ?? 0)">
					<p class="mt-2 font-bold dark:text-red-500">Váha hrany je väčšia ako minimum z vrcholov <span class="italic">{{ selected1 }}</span> a <span class="italic">{{ selected2 }}</span></p>
				</div>
			</div>

			<div class="flex flex-wrap flex-col">
				<!-- Tabuľka ukazujúca zoznam hrán. -->
				<div v-for="edge in edges" :key="edge.vertices[0] + edge.vertices[1]" class="border flex justify-center p-1">
					{{ edge.vertices[0] }} &LeftRightArrow; {{ edge.vertices[1] }}, {{ edge.value }}
					<span class="pl-8" @click="edges = edges.filter(x => x != edge)">X</span>
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-4">
			<!-- Poslať formulár na API. -->
			<button @click="callAPI" :disabled="testSend()" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Poslať</button>
		</div>

		<!-- Zobrazovanie odpovedí od API. -->
		<div v-if="ret[0] == 'ok'">
			<!-- Vypočítaný a vyfarbený fuzzy graf. -->
			<div class="border my-8" v-html="ret[1]" />

			<div class="flex justify-center">
				<!-- Uloženie vyfarbeného fuzzy grafu. -->
				<button @click="saveFile" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Uložiť graf</button>
			</div>
		</div>
		<div v-else>
			<!-- Chybové hlášky. -->
			<div class="text-red-500 font-bold">
				{{ ret[1] }}
			</div>
		</div>
	</div>
</template>

