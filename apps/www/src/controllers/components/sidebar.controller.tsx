import { AppContext } from "$config/server";
import { SidebarPage } from "$pages/components/sidebar.page";
import { Hono } from "hono";

export const sidebarController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<SidebarPage
				{...{
					seo: {
						title: "Sidebar Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
