import { SITE } from "$config/seo";
import { AlertsPage } from "$pages/components/alerts.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";
import { AppVariables } from "src";

export const alertsController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		const title = "Alerts Components Documentation";
		return ctx.html(
			<AlertsPage
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
