import { SwitchPage } from "$pages/components/switch.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const switchController = new Hono<{ Variables: AppVariables }>().get(
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
