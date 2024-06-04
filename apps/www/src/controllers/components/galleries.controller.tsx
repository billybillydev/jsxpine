import { GalleriesPage } from "$pages/components/galleries.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const galleriesController = new Hono<{ Variables: AppVariables }>().get(
	(ctx) => {
		return ctx.html(
			<GalleriesPage
				{...{
					seo: {
						title: "Galleries Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
