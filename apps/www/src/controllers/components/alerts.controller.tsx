import { AlertsPage } from "$pages/components/alerts.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const alertsController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		return ctx.html(
			<AlertsPage
				{...{
					seo: {
						title: "Alerts Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
