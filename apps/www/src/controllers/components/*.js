import { accordionsController } from "$controllers/components/accordions.controller";
import { Hono } from "hono";

export const componentsController = new Hono()
	.get((ctx) => {
		return ctx.redirect("/components/accordions");
	})
	.route("/accordions", accordionsController);
