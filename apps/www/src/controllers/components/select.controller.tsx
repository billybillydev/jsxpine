import { AppContext } from "$config/server";
import { SelectPage } from "$pages/components/select.page";
import { Hono } from "hono";

export const selectController = new Hono<AppContext>().get(
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
