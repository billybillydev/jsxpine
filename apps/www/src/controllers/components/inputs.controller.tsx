import { InputsPage } from "$pages/components/inputs.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const inputsController = new Hono<{ Variables: AppVariables }>().get(
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
