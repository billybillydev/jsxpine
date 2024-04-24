import { DropdownPage } from "$pages/components/dropdown.page";
import { Hono } from "hono";

export const dropdownController = new Hono().get((ctx) => {
	return ctx.html(
		<DropdownPage
			seo={{ title: "Dropdown Components Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
