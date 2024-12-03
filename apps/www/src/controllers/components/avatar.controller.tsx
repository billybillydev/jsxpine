import { AppContext } from "$config/server";
import { AvatarPage } from "$pages/components/avatar.page";
import { Hono } from "hono";

export const avatarController = new Hono<AppContext>().get(
	(ctx) => {
		return ctx.html(
			<AvatarPage
				{...{
					seo: {
						title: "Avatar Components Documentation",
						robots: ["index", "follow"]
					},
					...ctx.var
				}}
			/>
		);
	}
);
