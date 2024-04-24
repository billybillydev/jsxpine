import { AvatarPage } from "$pages/components/avatar.page";
import { Hono } from "hono";

export const avatarController = new Hono().get((ctx) => {
    return ctx.html(
			<AvatarPage
				seo={{ title: "Avatar Components Documentation" }}
				currentUrl={new URL(ctx.req.url).pathname}
			/>
		);
})