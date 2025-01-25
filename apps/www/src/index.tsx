import { AppContext, serverConfig } from "$config/server";
import { componentsController } from "$controllers/components/*";
import { coreController } from "$controllers/core/*";
import { homeController } from "$controllers/home.controller";
import { useCasesController } from "$controllers/usecases/*";
import { htmxMiddleware } from "$middlewares/htmx.middleware";
import { NotFoundPage } from "$pages/404.page";
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
	.notFound(ctx => {
		if (ctx.var.isHTMX) {
			ctx.header("HX-Reswap", "outerHTML");
			ctx.header("HX-Retarget", "#main-content");
		}
		return ctx.html(
			<NotFoundPage seo={{ title: "Page not found" }} {...ctx.var} />
		);
	});

export default {
	port: serverConfig.port,
	fetch: app.fetch
};
