import { SITE } from "$config/seo";
import { ZoomPage } from "$pages/components/zoom.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";
import { AppVariables } from "src";

export const zoomController = new Hono<{ Variables: AppVariables }>().get(
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
