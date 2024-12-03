import { AppContext } from "$config/server";
import { GalleriesPage } from "$pages/components/galleries.page";
import { Hono } from "hono";

export const galleriesController = new Hono<AppContext>().get(
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
