import { RadioPage } from "$pages/components/radio.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const radioController = new Hono<{ Variables: AppVariables }>().get(
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
