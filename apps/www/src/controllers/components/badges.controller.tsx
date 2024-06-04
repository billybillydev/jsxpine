import { BadgesPage } from "$pages/components/badges.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const badgesController = new Hono<{ Variables: AppVariables }>().get(
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
