import { AppContext, serverConfig } from "$config/server";
import { notFoundController } from "$controllers/404.controller";
import { componentsController } from "$controllers/components/*";
import { coreController } from "$controllers/core/*";
import { homeController } from "$controllers/home.controller";
import { useCasesController } from "$controllers/usecases/*";
import { htmxMiddleware } from "$middlewares/htmx.middleware";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";


const app = new Hono<AppContext>();

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
	.route("/core", coreController)
	.route("/components", componentsController)
	.route("/usecases", useCasesController)
	.route("/404-not-found", notFoundController)
	.notFound(ctx => ctx.redirect("/404-not-found"));

export default {
	port: serverConfig.port,
	fetch: app.fetch
};
