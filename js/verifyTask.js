import fetch from "node-fetch";
export default async (task, answer) => {
    return await fetch("https://poligon.aidevs.pl/verify", {
        method: "POST",
        body: JSON.stringify({
            task,
            apikey: process.env.AI_DEVS_KEY,
            answer
        })
    });
};
