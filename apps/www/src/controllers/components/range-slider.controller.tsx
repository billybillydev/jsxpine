import { RangeSliderPage } from "$pages/components/range-slider.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const rangeSliderController = new Hono<{
	Variables: AppVariables;
}>().get((ctx) => {
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
