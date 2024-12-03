import { AppContext } from "$config/server";
import { SwitchPage } from "$pages/components/switch.page";
import { Hono } from "hono";

export const switchController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<SwitchPage
				{...{
					seo: {
						title: "Switch Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
