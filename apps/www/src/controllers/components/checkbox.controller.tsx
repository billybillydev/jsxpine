import { AppContext } from "$config/server";
import { CheckboxPage } from "$pages/components/checkbox.page";
import { Hono } from "hono";

export const checkboxController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<CheckboxPage
				{...{
					seo: {
						title: "Checkbox Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
