import { DropdownPage } from "$pages/components/dropdown.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const dropdownController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		return ctx.html(
			<DropdownPage
				{...{
					seo: {
						title: "Dropdown Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
