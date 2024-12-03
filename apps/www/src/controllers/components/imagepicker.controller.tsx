import { AppContext } from "$config/server";
import { ImagePickerPage } from "$pages/components/imagepicker.page";
import { Hono } from "hono";

export const imagePickerController = new Hono<AppContext>().get((ctx) => {
	return ctx.html(
		<ImagePickerPage
			{...{
				seo: {
					title: "Image Picker Components Documentation",
					robots: ["index", "follow"]
				},
				...ctx.var
			}}
		/>
	);
});
