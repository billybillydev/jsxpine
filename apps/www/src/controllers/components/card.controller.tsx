import { CardPage } from "$pages/components/card.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const cardController = new Hono<{ Variables: AppVariables }>().get(
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
