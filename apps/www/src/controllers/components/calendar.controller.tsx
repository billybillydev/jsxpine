import { SITE } from "$config/seo";
import { CalendarPage } from "$pages/components/calendar.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";
import { AppVariables } from "src";

export const calendarController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		const title = "Calendar Component Documentation";
		
		return ctx.html(
			<CalendarPage
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
