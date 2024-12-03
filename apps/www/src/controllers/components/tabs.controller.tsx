import { AppContext } from "$config/server";
import { TabsPage } from "$pages/components/tabs.page";
import { Hono } from "hono";

export const tabsController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<TabsPage
				{...{
					seo: {
						title: "Tabs Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
