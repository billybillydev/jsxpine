import { InputsPage } from "$pages/components/inputs.page";
import { Hono } from "hono";

export const inputsController = new Hono().get((ctx) => {
	return ctx.html(
		<InputsPage
			seo={{ title: "Inputs Components Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
