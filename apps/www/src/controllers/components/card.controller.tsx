import { CardPage } from "$pages/components/card.page";
import { Hono } from "hono";

export const cardController = new Hono().get((ctx) => {
	return ctx.html(
		<CardPage
			seo={{ title: "Card Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
