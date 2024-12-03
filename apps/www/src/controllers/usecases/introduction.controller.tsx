import { AppContext } from "$config/server";
import { IntroductionUseCasePage } from "$pages/usecases/introduction.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";

export const introductionUseCaseController = new Hono<AppContext>().get((ctx) => {
	const title = "Use cases with JSX Pine components";
	const content: Omit<UseCasePresentationProps, "children"> = {
		heading: title,
		description: "Page in Work In Progress"
	};
	return ctx.html(
		<IntroductionUseCasePage
			{...{
				seo: {
					title,
					robots: ["index", "follow"]
				},
				content,
				...ctx.var
			}}
		/>
	);
});
