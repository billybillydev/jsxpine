import { AppContext } from "$config/server";
import { ButtonsPage } from "$pages/components/buttons.page";
import { Hono } from "hono";

export const buttonsController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<ButtonsPage
				{...{
					seo: {
						title: "Buttons Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
