import { TreesPage } from "$pages/components/trees.page";
import { Hono } from "hono";

export const treesController = new Hono().get((ctx) => {
	return ctx.html(
		<TreesPage
			seo={{ title: "Trees Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
