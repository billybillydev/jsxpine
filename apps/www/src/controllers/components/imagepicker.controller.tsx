import { ImagePickerPage } from "$pages/components/imagepicker.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const imagePickerController = new Hono<{
	Variables: AppVariables;
}>().get((ctx) => {
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
