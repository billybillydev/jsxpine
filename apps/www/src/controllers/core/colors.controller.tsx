import { AppContext } from "$config/server";
import { CoreColorsPage } from "$pages/core/colors.page";
import { seoUtils } from "$scripts/lib/seo";
import { Hono } from "hono";

export const coreColorsController = new Hono<AppContext>().get((ctx) => {
    const title = "Colors";
		const description =
			"Find below theme and main colors palette generally coming from tailwindcss colors scheme. See `tailwind.config.js` file to see theme colors definition.";

		return ctx.html(
			<CoreColorsPage
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