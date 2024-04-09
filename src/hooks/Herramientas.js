import PocketBase from "pocketbase";

const pb = new PocketBase("https://portafolio.pockethost.io");

const herramientas = await pb.collection("Herramientas").getFullList({});

export { herramientas }