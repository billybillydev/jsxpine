import { RangeSliderPage } from "$pages/components/range-slider.page";
import { Hono } from "hono";

export const rangeSliderController = new Hono().get((ctx) => {
    return ctx.html(
			<RangeSliderPage
				seo={{ title: "Range Slider Component Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})