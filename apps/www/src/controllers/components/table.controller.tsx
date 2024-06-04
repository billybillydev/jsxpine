import { TablePage } from "$pages/components/table.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const tableController = new Hono<{ Variables: AppVariables }>().get(
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
