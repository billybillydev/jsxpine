import { GalleriesPage } from "$pages/components/galleries.page";
import { Hono } from "hono";

export const galleriesController = new Hono().get((ctx) => {
	return ctx.html(
		<GalleriesPage
			seo={{ title: "Galleries Components Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
