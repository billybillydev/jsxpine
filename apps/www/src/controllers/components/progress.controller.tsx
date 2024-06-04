import { ProgressPage } from "$pages/components/progress.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const progressController = new Hono<{ Variables: AppVariables }>().get(
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
