import { Edge } from "@/models/EdgeModel"

export async function sendToAPI(verticesMap : Map<string, number>, edgesLst : Edge[]) {
    let data = ""
    let errmessage = "No error"
    console.log("CALL", JSON.stringify({ vertices: Object.fromEntries(verticesMap), edges: edgesLst }))
    try {
        const res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({ vertices: Object.fromEntries(verticesMap), edges: edgesLst })
        })
        if (res.ok) {
            errmessage = "No error"
            data = await res.text()
        }
        else {
            const tmp = await res.json()
            errmessage = tmp["message"]
        }
    } catch (error) {
        errmessage = "Nedalo sa pripojiť na API."
    }
    if (data.length != 0) {
        return ["ok", data]
    } else {
        return ["error", errmessage]
    }
}