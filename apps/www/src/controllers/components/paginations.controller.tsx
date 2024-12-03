import { AppContext } from "$config/server";
import { PaginationsPage } from "$pages/components/paginations.page";
import { Hono } from "hono";

export const paginationsController = new Hono<AppContext>().get((ctx) => {
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
