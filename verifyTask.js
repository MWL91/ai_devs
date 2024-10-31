import fetch from "node-fetch";
export default async (answer) => {
    return await fetch("https://poligon.aidevs.pl/verify", {
        method: "POST",
        body: JSON.stringify({
            task: "POLIGON",
            apikey: process.env.AI_DEVS_KEY,
            answer
        })
    });
};
