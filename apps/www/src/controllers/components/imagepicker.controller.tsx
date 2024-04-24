import { ImagePickerPage } from "$pages/components/imagepicker.page";
import { Hono } from "hono";

export const imagePickerController = new Hono().get((ctx) => {
	return ctx.html(
		<ImagePickerPage
			seo={{ title: "Image Picker Components Documentation" }}
			currentUrl={new URL(ctx.req.url).pathname}
		/>
	);
});
