import { AppContext } from "$config/server";
import { NotFoundPage } from "$pages/404.page";
import { Hono } from "hono";

export const notFoundController = new Hono<AppContext>().get(ctx => {
    if (ctx.var.isHTMX) {
        ctx.header("HX-Reswap", "outerHTML");
        ctx.header("HX-Retarget", "#main-content");
    }
    return ctx.html(
			<NotFoundPage seo={{ title: "Page not found" }} {...ctx.var} />
		);
})