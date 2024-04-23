import { SelectPage } from "$pages/components/select.page";
import { Hono } from "hono";

export const selectController = new Hono().get((ctx) => {
	return ctx.html(
		<SelectPage
			seo={{ title: "Select Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
