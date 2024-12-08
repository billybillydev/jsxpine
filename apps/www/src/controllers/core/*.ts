import { AppContext } from "$config/server";
import { coreInstallationAndUsageController } from "$controllers/core/installation-and-usage.controller";
import { coreIntroductionController } from "$controllers/core/introduction.controller";
import { Hono } from "hono";

export const coreController = new Hono<AppContext>()
	.get((ctx) => {
		return ctx.redirect("/core/introduction");
	})
	.route("/introduction", coreIntroductionController)
	.route("/installation-and-usage", coreInstallationAndUsageController);
