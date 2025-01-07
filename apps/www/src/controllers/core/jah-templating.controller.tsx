import { SITE } from "$config/seo";
import { AppContext } from "$config/server";
import { JAHTemplatingPage } from "$pages/core/jah-templating.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";

export const coreJAHTemplatingController = new Hono<AppContext>().get((ctx) => {
	const title = "JAH Templating";

	return ctx.html(
		<JAHTemplatingPage
			{...{
				seo: {
					title,
					robots: ["index", "follow"],
					openGraph: {
						title,
						type: "website",
						imageUrl: defaultFavicon,
						url: ctx.var.url.href,
						site_name: SITE.title
					}
				},
                heading: title,
				...ctx.var
			}}
		/>
	);
});
