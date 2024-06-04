import { AvatarPage } from "$pages/components/avatar.page";
import { Hono } from "hono";
import { AppVariables } from "src";

export const avatarController = new Hono<{ Variables: AppVariables }>().get(
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
