import { CheckboxPage } from "$pages/components/checkbox.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const checkboxController = new Hono<{ Variables: AppVariables }>().get(
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
