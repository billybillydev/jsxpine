import { CarouselPage } from "$pages/components/carousel.page";
import { Hono } from "hono";

export const carouselController = new Hono().get((ctx) => {
	return ctx.html(
		<CarouselPage
			seo={{ title: "Carousel Component Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
