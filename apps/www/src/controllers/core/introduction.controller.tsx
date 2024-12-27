import { AppContext } from "$config/server";
import { CoreIntroductionPage } from "$pages/core/introduction.page";
import { seoUtils } from "$scripts/lib/seo";
import { Hono } from "hono";

export const coreIntroductionController = new Hono<AppContext>().get((ctx) => {
	const title = "Introduction to JSXPine";
	const description =
		"JSXPine is a set of reusable components for building web applications with JSX and Alpine.js. It's intended to give js developers two powerful tools to create fast and efficient user interfaces without the need of SPA frameworks/libraries.";

	return ctx.html(
		<CoreIntroductionPage
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
