import { RadioPage } from "$pages/components/radio.page";
import { Hono } from "hono";

export const radioController = new Hono().get((ctx) => {
	return ctx.html(
		<RadioPage
			seo={{ title: "Radio Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
