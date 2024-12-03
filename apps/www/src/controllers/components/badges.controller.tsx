import { AppContext } from "$config/server";
import { BadgesPage } from "$pages/components/badges.page";
import { Hono } from "hono";

export const badgesController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<BadgesPage
				{...{
					seo: {
						title: "Badges Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
