import { SITE } from "$config/seo";
import { AppContext } from "$config/server";
import { IconsPage } from "$pages/components/icons.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";

export const iconsController = new Hono<AppContext>().get((ctx) => {
	const title = "Icons Component Documentation";
	const description = "Icons come from iconify. By default, we choose the Remix Icon package.";

	return ctx.html(
		<IconsPage
			{...{
				description,
				seo: {
					title,
					description,
					robots: ["index", "follow"],
					openGraph: {
						title,
						description,
						type: "website",
						image: {
							width: 150,
							height: 262
						},
						imageUrl: ctx.var.url.origin.concat(defaultFavicon),
						url: ctx.var.url.href,
						site_name: ctx.var.url.href
					},
					twitter: {
						name: {
							creator: SITE.twitter.author,
							site: SITE.twitter.author,
							title,
							description,
							image: ctx.var.url.origin.concat(defaultFavicon)
						},
						property: {
							url: ctx.var.url.href,
							domain: ctx.var.url.hostname
						}
					}
				},
				...ctx.var
			}}
		/>
	);
});
