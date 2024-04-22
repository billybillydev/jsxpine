import { AlertsPage } from "$pages/components/alerts.page";
import { Hono } from "hono";

export const alertsController = new Hono().get((ctx) => {
	return ctx.html(
		<AlertsPage
			seo={{ title: "Alerts Components Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
