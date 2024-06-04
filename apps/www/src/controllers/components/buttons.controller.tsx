import { ButtonsPage } from "$pages/components/buttons.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const buttonsController = new Hono<{ Variables: AppVariables }>().get(
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
