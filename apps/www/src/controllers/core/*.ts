import { AppContext } from "$config/server";
import { coreColorsController } from "$controllers/core/colors.controller";
import { coreInstallationAndUsageController } from "$controllers/core/installation-and-usage.controller";
import { coreIntroductionController } from "$controllers/core/introduction.controller";
import { coreShadowController } from "$controllers/core/shadow.controller";
import { coreTypographyController } from "$controllers/core/typography.controller";
import { Hono } from "hono";

export const coreController = new Hono<AppContext>()
	.get((ctx) => {
		return ctx.redirect("/core/introduction");
	})
	.route("/introduction", coreIntroductionController)
	.route("/installation-and-usage", coreInstallationAndUsageController)
	.route("/colors", coreColorsController)
	.route("/typography", coreTypographyController)
	.route("/shadows", coreShadowController);
