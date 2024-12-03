import { AppContext } from "$config/server";
import { CarouselPage } from "$pages/components/carousel.page";
import { Hono } from "hono";

export const carouselController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<CarouselPage
				{...{
					seo: {
						title: "Carousel Component Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
