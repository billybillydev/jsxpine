import { SelectPage } from "$pages/components/select.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const selectController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		return ctx.html(
			<SelectPage
				{...{
					seo: {
						title: "Select Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
