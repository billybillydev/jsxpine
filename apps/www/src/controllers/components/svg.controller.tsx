import { SITE } from "$config/seo";
import { AppContext } from "$config/server";
import { SVGPage } from "$pages/components/svg.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";

export const svgController = new Hono<AppContext>().get(
	(ctx) => {
		const title = "SVG Component Documentation";
		
		return ctx.html(
			<SVGPage
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
	}
);
