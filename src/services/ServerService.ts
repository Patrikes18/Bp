import { Edge } from "@/models/EdgeModel"

/**
 * Funkcia, ktorá posiela požiadavky na API.
 * @param verticesMap Zoznam vrcholov na poslanie.
 * @param edgesList Zoznam hrán na poslanie.
 * @returns 
 */
export async function sendToAPI(verticesMap : Map<string, number>, edgesList : Edge[]) {
    let data = ""
    let errmessage = "No error"
    try {
        const res = await fetch(import.meta.env.VITE_API_URL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({ vertices: Object.fromEntries(verticesMap), edges: edgesList })
        })
        if (res.ok) { // Dáta boli poslané a dostali sme vyfarbený fuzzy graf.
            errmessage = "No error"
            data = await res.text()
        }
        else { // API neúspešne odpovedalo na požiadavky.
            const tmp = await res.json()
            errmessage = tmp["message"]
        }
    } catch (error) { // Nastala chyba pri získavaní dát z API.
        errmessage = "Nedalo sa pripojiť na API."
    }
    if (data.length != 0) {
        return ["ok", data]
    } else {
        return ["error", errmessage]
    }
}