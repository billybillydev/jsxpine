import { SITE } from "$config/seo";
import { AppContext } from "$config/server";
import { ZoomPage } from "$pages/components/zoom.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";

export const zoomController = new Hono<AppContext>().get(
	(ctx) => {
		const title = "Zoom Component Documentation";
		
		return ctx.html(
			<ZoomPage
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
					...ctx.var
				}}
			/>
		);
	}
);
