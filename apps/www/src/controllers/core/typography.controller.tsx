import { AppContext } from "$config/server";
import { CoreTypographyPage } from "$pages/core/typography.page";
import { seoUtils } from "$scripts/lib/seo";
import { Hono } from "hono";

export const coreTypographyController = new Hono<AppContext>().get((ctx) => {
    const title = "Typography";
		const description =
			"Here are typography sizes and styles coming from `tailwind.config.js` file. Values are in `rem` units and are provided by tailwindcss-mosiui-mini plugin.";

		return ctx.html(
			<CoreTypographyPage
				{...{
					seo: {
						title,
						description,
						robots: ["index", "follow"],
						...seoUtils.setOpenGraphAndTwitter(title, description, ctx)
					},
					heading: title,
					description,
					...ctx.var
				}}
			/>
		);
});