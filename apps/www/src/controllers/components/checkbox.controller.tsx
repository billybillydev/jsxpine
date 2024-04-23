import { CheckboxPage } from "$pages/components/checkbox.page";
import { Hono } from "hono";

export const checkboxController = new Hono().get((ctx) => {
	return ctx.html(
		<CheckboxPage
			seo={{ title: "Checkbox Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
