import { TabsPage } from "$pages/components/tabs.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const tabsController = new Hono<{ Variables: AppVariables }>().get(
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
