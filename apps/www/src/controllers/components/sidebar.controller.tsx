import { SidebarPage } from "$pages/components/sidebar.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const sidebarController = new Hono<{ Variables: AppVariables }>().get(
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
