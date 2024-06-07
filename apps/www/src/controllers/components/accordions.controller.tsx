import { SITE } from "$config/seo";
import { AccordionsPage } from "$pages/components/accordions.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";
import { AppVariables } from "src";

export const accordionsController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		const title = "Accordions Components Documentation";
		return ctx.html(
			<AccordionsPage
				{...{
					seo: {
						title,
						robots: ["index", "follow"],
						openGraph: {
							title,
							type: "website",
							imageUrl: defaultFavicon,
							url: ctx.var.url.href,
							site_name: SITE.title,
						}
					},
					...ctx.var
				}}
			/>
		);
	}
);
