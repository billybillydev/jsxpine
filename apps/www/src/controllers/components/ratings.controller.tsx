import { AppContext } from "$config/server";
import { RatingsPage } from "$pages/components/ratings.page";
import { Hono } from "hono";

export const ratingsController = new Hono<AppContext>().get(
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
