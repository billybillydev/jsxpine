import { AppContext } from "$config/server";
import { CoreInstallationAndUsagePage } from "$pages/core/installation-and-usage.page";
import { SeoUtils } from "$scripts/lib/seo";
import { Hono } from "hono";

export const coreInstallationAndUsageController = new Hono<AppContext>().get((ctx) => {
	const title = "Installation and Usage";
	const description =
		"In this topic, you will learn how to install and use JSXPine. There are two main ways to use components from JSXPine, either copy directly from the website, or the recommended way, use the CLI. Everything will be explain in the next lines.";

	return ctx.html(
		<CoreInstallationAndUsagePage
			{...{
				seo: {
					title,
					description,
					robots: ["index", "follow"],
					...SeoUtils.setOpenGraphAndTwitter(title, description, ctx)
				},
				heading: title,
				description,
				...ctx.var
			}}
		/>
	);
});
