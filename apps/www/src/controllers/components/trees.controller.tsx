import { TreesPage } from "$pages/components/trees.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const treesController = new Hono<{ Variables: AppVariables }>().get(
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
