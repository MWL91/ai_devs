import fetch from 'node-fetch';
import verifyTask from "./verifyTask.js";

const getKeys = async (): Promise<string[]> => {
	return (await (await fetch("https://poligon.aidevs.pl/dane.txt", {
		method: "GET"
	})).text()).split("\n").filter((key) => key);
};

const response = await verifyTask("POLIGON", await getKeys());
console.log(await response.json());