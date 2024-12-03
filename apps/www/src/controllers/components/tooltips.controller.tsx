import { AppContext } from "$config/server";
import { TooltipsPage } from "$pages/components/tooltips.page";
import { Hono } from "hono";

export const tooltipsController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<TooltipsPage
				{...{
					seo: {
						title: "Tooltips Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
