import { accordionsController } from "$controllers/components/accordions.controller";
import { alertsController } from "$controllers/components/alerts.controller";
import { badgesController } from "$controllers/components/badges.controller";
import { buttonsController } from "$controllers/components/buttons.controller";
import { cardController } from "$controllers/components/card.controller";
import { inputsController } from "$controllers/components/inputs.controller";
import { Hono } from "hono";

export const componentsController = new Hono()
	.get((ctx) => {
		return ctx.redirect("/components/accordions");
	})
	.route("/accordions", accordionsController)
	.route("/alerts", alertsController)
	.route("/badges", badgesController)
	.route("/buttons", buttonsController)
	.route("/card", cardController)
	.route("/inputs", inputsController);
