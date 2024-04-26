import { ProgressPage } from "$pages/components/progress.page";
import { Hono } from "hono";

export const progressController = new Hono().get((ctx) => {
    return ctx.html(
			<ProgressPage
				seo={{ title: "Progress Components Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})