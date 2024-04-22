import { accordionsController } from "$controllers/components/accordions.controller";
import { alertsController } from "$controllers/components/alerts.controller";
import { badgesController } from "$controllers/components/badges.controller";
import { Hono } from "hono";

export const componentsController = new Hono()
	.get((ctx) => {
		return ctx.redirect("/components/accordions");
	})
	.route("/accordions", accordionsController)
	.route("/alerts", alertsController)
	.route("/badges", badgesController);
