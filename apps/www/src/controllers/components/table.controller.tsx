import { TablePage } from "$pages/components/table.page";
import { Hono } from "hono";

export const tableController = new Hono().get((ctx) => {
	return ctx.html(
		<TablePage
			seo={{ title: "Table Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
