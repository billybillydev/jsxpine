import { AppContext } from "$config/server";
import { CardPage } from "$pages/components/card.page";
import { Hono } from "hono";

export const cardController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<CardPage
				{...{
					seo: {
						title: "Card Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
