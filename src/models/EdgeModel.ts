export class Edge{
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