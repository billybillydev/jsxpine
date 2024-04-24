import { TooltipsPage } from "$pages/components/tooltips.page";
import { Hono } from "hono";

export const tooltipsController = new Hono().get((ctx) => {
	return ctx.html(
		<TooltipsPage
			seo={{ title: "Tooltips Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
