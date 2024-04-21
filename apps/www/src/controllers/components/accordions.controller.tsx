import { AccordionsPage } from "$pages/components/accordions.page"
import { Hono } from "hono"

export const accordionsController = new Hono().get((ctx) => {
    return ctx.html(
			<AccordionsPage
				seo={{ title: "Accordions Components Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})