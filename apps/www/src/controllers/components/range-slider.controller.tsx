import { AppContext } from "$config/server";
import { RangeSliderPage } from "$pages/components/range-slider.page";
import { Hono } from "hono";

export const rangeSliderController = new Hono<AppContext>().get((ctx) => {
	return ctx.html(
		<RangeSliderPage
			{...{
				seo: {
					title: "Range Slider Component Documentation",
					robots: ["index", "follow"]
				},
				...ctx.var
			}}
		/>
	);
});
