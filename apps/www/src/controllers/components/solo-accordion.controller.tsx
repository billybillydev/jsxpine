import { SITE } from "$config/seo";
import { AppContext } from "$config/server";
import { SoloAccordionPage } from "$pages/components/solo-accordion.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";

export const soloAccordionController = new Hono<AppContext>().get(
	(ctx) => {
		const title = "Solo Accordion Component Documentation";
		const description =
			"Accordions are great way to compact content blocs and display required ones by clicking on it. The Solo type enables accordion feature individually";

		return ctx.html(
			<SoloAccordionPage
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
								url: ctx.var.url.origin.concat(defaultFavicon),
								secure_url: ctx.var.url.origin.concat(defaultFavicon),
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
	}
);
