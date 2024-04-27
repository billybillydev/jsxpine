import { serveStatic } from "hono/bun";
import { Hono } from "hono";
import { homeController } from "$controllers/home.controller";
import { serverConfig } from "$config/server";
import { componentsController } from "$controllers/components/*";
import { htmxMiddleware } from "$middlewares/htmx.middleware";
import { notFoundController } from "$controllers/404.controller";

export type AppVariables = {
	isHTMX?: boolean;
};

const app = new Hono<{ Variables: AppVariables }>();

const staticFileMiddleware = serveStatic({ root: "./" });

app
	.use("/public/*", staticFileMiddleware)
	.use(htmxMiddleware)
	.route("/", homeController)
	.route("/components", componentsController)
	.route("/404-not-found", notFoundController)
	.notFound(ctx => ctx.redirect("/404-not-found"));

export default {
	port: serverConfig.port,
	fetch: app.fetch
};
