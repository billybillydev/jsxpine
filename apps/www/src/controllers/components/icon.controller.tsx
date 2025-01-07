import { SITE } from "$config/seo";
import { AppContext } from "$config/server";
import { IconPage } from "$pages/components/icon.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";

export const iconController = new Hono<AppContext>().get(
	(ctx) => {
		const title = "Icon Component Documentation";
		
		return ctx.html(
			<IconPage
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
					heading: "Icon",
					...ctx.var
				}}
			/>
		);
	}
);
