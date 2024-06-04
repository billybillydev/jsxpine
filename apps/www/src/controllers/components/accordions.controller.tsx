import { AccordionsPage } from "$pages/components/accordions.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const accordionsController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		return ctx.html(
			<AccordionsPage
				{...{
					seo: {
						title: "Accordions Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
