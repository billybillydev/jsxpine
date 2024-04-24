import { SwitchPage } from "$pages/components/switch.page";
import { Hono } from "hono";

export const switchController = new Hono().get((ctx) => {
    return ctx.html(
			<SwitchPage
				seo={{ title: "Switch Components Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})