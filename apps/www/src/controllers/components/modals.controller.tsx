import { ModalsPage } from "$pages/components/modals.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const modalsController = new Hono<{ Variables: AppVariables }>().get(
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
