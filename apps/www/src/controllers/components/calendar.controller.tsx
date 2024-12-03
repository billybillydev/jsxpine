import { SITE } from "$config/seo";
import { AppContext } from "$config/server";
import { CalendarPage } from "$pages/components/calendar.page";
import { defaultFavicon } from "$views/layouts.view";
import { Hono } from "hono";

export const calendarController = new Hono<AppContext>().get(
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
