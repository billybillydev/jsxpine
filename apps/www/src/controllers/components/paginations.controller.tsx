import { PaginationsPage } from "$pages/components/paginations.page";
import { Hono } from "hono";

export const paginationsController = new Hono().get((ctx) => {
	return ctx.html(
		<PaginationsPage
			seo={{ title: "Paginations Components Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
