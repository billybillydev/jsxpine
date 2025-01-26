import { AppContext } from "$config/server";
import { ThemePage } from "$pages/theme.page";
import { SeoUtils } from "$scripts/lib/seo";
import { Hono } from "hono";

export const themeController = new Hono<AppContext>().get((ctx) => {
    const title = "Themes - jsxpine/ui";
		const description =
			"Hand-picked themes that you can copy and paste into your apps.";

	return ctx.html(
		<ThemePage
			{...{
				seo: {
					title,
					description,
					robots: ["index", "follow"],
					...SeoUtils.setOpenGraphAndTwitter(title, description, ctx)
				},
                description,
				...ctx.var
			}}
		/>
	);
});
