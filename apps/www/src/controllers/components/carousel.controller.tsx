import { CarouselPage } from "$pages/components/carousel.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const carouselController = new Hono<{ Variables: AppVariables }>().get(
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
