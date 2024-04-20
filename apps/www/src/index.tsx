import { serveStatic } from "hono/bun";
import { Hono } from "hono";
import { homeController } from "$controllers/home.controller";
import { serverConfig } from "$config/server";

const app = new Hono();

app.use("/public/*", serveStatic({ root: "./" })).route("/", homeController);

export default {
	port: serverConfig.port,
	fetch: app.fetch
};