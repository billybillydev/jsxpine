import { serveStatic } from "hono/bun";
import { Hono } from "hono";
import { homeController } from "$controllers/home.controller";
import { serverConfig } from "$config/server";
import { componentsController } from "$controllers/components/*";

const app = new Hono();

app
	.use("/public/*", serveStatic({ root: "./" }))
	.route("/", homeController)
	.route("/components", componentsController);

export default {
	port: serverConfig.port,
	fetch: app.fetch
};
