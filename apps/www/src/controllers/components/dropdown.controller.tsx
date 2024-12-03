import { AppContext } from "$config/server";
import { DropdownPage } from "$pages/components/dropdown.page";
import { Hono } from "hono";

export const dropdownController = new Hono<AppContext>().get(
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
