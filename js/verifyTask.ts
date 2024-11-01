import fetch, {Response} from "node-fetch";
import dotenv from 'dotenv'

dotenv.config({ path: '../.env' });

export default async (task: string, answer: any): Promise<Response> => {
    return await fetch("https://poligon.aidevs.pl/verify", {
        method: "POST",
        body: JSON.stringify({
            task,
            apikey: process.env.AI_DEVS_KEY,
            answer
        })
    });
}