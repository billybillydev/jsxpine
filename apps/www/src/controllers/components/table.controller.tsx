import { AppContext } from "$config/server";
import { TablePage } from "$pages/components/table.page";
import { Hono } from "hono";

export const tableController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<TablePage
				{...{
					seo: {
						title: "Table Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
