import { AppContext } from "$config/server";
import { InputsPage } from "$pages/components/inputs.page";
import { Hono } from "hono";

export const inputsController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<InputsPage
				{...{
					seo: {
						title: "Inputs Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
