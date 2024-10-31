import fetch, {Response} from "node-fetch";

export default async (answer: any): Promise<Response> => {
    return await fetch("https://poligon.aidevs.pl/verify", {
        method: "POST",
        body: JSON.stringify({
            task: "POLIGON",
            apikey: process.env.AI_DEVS_KEY,
            answer
        })
    });
}