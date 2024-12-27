import { AppContext } from "$config/server";
import { CoreShadowPage } from "$pages/core/shadow.page";
import { seoUtils } from "$scripts/lib/seo";
import { Hono } from "hono";

export const coreShadowController = new Hono<AppContext>().get((ctx) => {
    const title = "Shadow";
		const description =
			`The "shadow" utility adds shadow to an element. The differents variants are coming from tailwindcss default shadows.`;

		return ctx.html(
			<CoreShadowPage
				{...{
					seo: {
						title,
						description,
						robots: ["index", "follow"],
						...seoUtils.setOpenGraphAndTwitter(title, description, ctx)
					},
					heading: title,
					description,
					...ctx.var
				}}
			/>
		);
});