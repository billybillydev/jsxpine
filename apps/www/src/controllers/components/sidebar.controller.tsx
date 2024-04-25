import { SidebarPage } from "$pages/components/sidebar.page";
import { Hono } from "hono";

export const sidebarController = new Hono().get((ctx) => {
    return ctx.html(
			<SidebarPage
				seo={{ title: "Sidebar Components Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})