import { AppContext } from "$config/server";
import { ModalsPage } from "$pages/components/modals.page";
import { Hono } from "hono";

export const modalsController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<ModalsPage
				{...{
					seo: {
						title: "Modals Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
