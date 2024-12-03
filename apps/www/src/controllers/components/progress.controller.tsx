import { AppContext } from "$config/server";
import { ProgressPage } from "$pages/components/progress.page";
import { Hono } from "hono";

export const progressController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<ProgressPage
				{...{
					seo: {
						title: "Progress Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
