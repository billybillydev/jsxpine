import { RatingsPage } from "$pages/components/ratings.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const ratingsController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		return ctx.html(
			<RatingsPage
				{...{
					seo: {
						title: "Ratings Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
