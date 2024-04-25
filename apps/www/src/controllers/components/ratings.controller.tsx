import { RatingsPage } from "$pages/components/ratings.page";
import { Hono } from "hono";

export const ratingsController = new Hono().get((ctx) => {
	return ctx.html(
		<RatingsPage
			seo={{ title: "Ratings Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
