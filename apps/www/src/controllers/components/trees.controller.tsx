import { AppContext } from "$config/server";
import { TreesPage } from "$pages/components/trees.page";
import { Hono } from "hono";

export const treesController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<TreesPage
				{...{
					seo: {
						title: "Trees Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
