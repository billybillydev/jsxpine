import { ModalsPage } from "$pages/components/modals.page";
import { Hono } from "hono";

export const modalsController = new Hono().get((ctx) => {
	return ctx.html(
		<ModalsPage
			seo={{ title: "Modals Components Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
