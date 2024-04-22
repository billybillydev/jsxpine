import { BadgesPage } from "$pages/components/badges.page";
import { Hono } from "hono";

export const badgesController = new Hono().get((ctx) => {
    return ctx.html(
			<BadgesPage
				seo={{ title: "Badges Components Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})