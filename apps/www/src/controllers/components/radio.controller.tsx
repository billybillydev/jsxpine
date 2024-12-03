import { AppContext } from "$config/server";
import { RadioPage } from "$pages/components/radio.page";
import { Hono } from "hono";

export const radioController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<RadioPage
				{...{
					seo: {
						title: "Radio Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
