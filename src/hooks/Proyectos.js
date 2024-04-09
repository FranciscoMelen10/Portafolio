import PocketBase from "pocketbase";

const pb = new PocketBase("https://portafolio.pockethost.io");

const proyectos = await pb.collection("Proyectos").getFullList({expand: ["herramientasId"]});

export { proyectos }

