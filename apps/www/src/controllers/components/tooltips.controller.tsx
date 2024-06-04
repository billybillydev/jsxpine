import { TooltipsPage } from "$pages/components/tooltips.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const tooltipsController = new Hono<{ Variables: AppVariables }>().get(
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
