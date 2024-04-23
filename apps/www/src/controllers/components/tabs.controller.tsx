import { TabsPage } from "$pages/components/tabs.page";
import { Hono } from "hono";

export const tabsController = new Hono().get((ctx) => {
	return ctx.html(
		<TabsPage
			seo={{ title: "Tabs Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
