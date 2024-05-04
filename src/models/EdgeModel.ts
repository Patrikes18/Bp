/**
 * Trieda predstavujúca hranu fuzzy grafu.
 */
export class Edge{

    /**
     * Tuple ukladajúci vrcholy hrany.
     */
    vertices: [string, string]

    /**
     * Váha hrany.
     */
    value: number

    /**
     * Konštruktor hrany.
     * @param v1 Prvý vrchol hrany.
     * @param v2 Druhý vrchol hrany.
     * @param value Váha hrany.
     */
    constructor(v1: string, v2: string, value: number){
        this.vertices = [v1,v2]
        this.value = value
    }

    /**
     * Metóda kontrolujúca, či parametre tvoria hranu.
     * @param v1 Prvý vrchol.
     * @param v2 Druhý vrchol.
     * @returns Vracia true, ak vrcholy tvoria hranu, inak vracia false.
     */
    public hasVertices(v1: string, v2: string): boolean{
        return (this.vertices[0] == v1 && this.vertices[1] == v2) || (this.vertices[0] == v2 && this.vertices[1] == v1)
    }

    /**
     * Metóda kontrolujúca, či daný vrchol je súčasťou hrany.
     * @param v Vrchol.
     * @returns Vracia true, ak vrchol tvorí hranu, inak vracia false.
     */
	public hasVertex(v: string): boolean{
        return this.vertices[0] == v || this.vertices[1] == v
    }
}