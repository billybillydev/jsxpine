import { ButtonsPage } from "$pages/components/buttons.page";
import { Hono } from "hono";

export const buttonsController = new Hono().get((ctx) => {
    return ctx.html(
			<ButtonsPage
				seo={{ title: "Buttons Components Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})