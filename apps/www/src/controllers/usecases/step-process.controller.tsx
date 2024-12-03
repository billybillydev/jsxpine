import { AppContext } from "$config/server";
import { StepProcessUseCasePage } from "$pages/usecases/step-process.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";

export const stepProcessUseCaseController = new Hono<AppContext>().get((ctx) => {
	const title = "Select Items";
	const content: Omit<UseCasePresentationProps, "children"> = {
		heading: title,
		description: "Page in Work In Progress"
	};
	return ctx.html(
		<StepProcessUseCasePage
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
