import { PaginationsPage } from "$pages/components/paginations.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const paginationsController = new Hono<{
	Variables: AppVariables;
}>().get((ctx) => {
	return ctx.html(
		<PaginationsPage
			{...{
				seo: {
					title: "Paginations Components Documentation",
					robots: ["index", "follow"]
				},
				...ctx.var
			}}
		/>
	);
});
