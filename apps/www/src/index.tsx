import { serveStatic } from "hono/bun";
import { Hono } from "hono";
import { homeController } from "$controllers/home.controller";
import { serverConfig } from "$config/server";
import { componentsController } from "$controllers/components/*";
import { htmxMiddleware } from "$middlewares/htmx.middleware";
import { notFoundController } from "$controllers/404.controller";
import { RootLayout } from "$views/layouts.view";

export type AppVariables = {
	isHTMX?: boolean;
	currentPath: string;
	url: URL;
};

const app = new Hono<{ Variables: AppVariables }>();

const staticFileMiddleware = serveStatic({ root: "./" });

app
	.use("/public/*", staticFileMiddleware)
	.use(htmxMiddleware)
	.use("*", async ({ set, req }, next) => {
		set("currentPath", req.path);
		set("url", new URL(req.url));
		await next();
	})
	.route("/", homeController)
	.route("/components", componentsController)
	.route("/404-not-found", notFoundController)
	.notFound(ctx => ctx.redirect("/404-not-found"));

export default {
	port: serverConfig.port,
	fetch: app.fetch
};
