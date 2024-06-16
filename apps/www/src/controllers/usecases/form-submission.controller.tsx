import { FormSubmissionUseCasePage } from "$pages/usecases/form-submission.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";
import { AppVariables } from "src";

export const formSubmissionUseCaseController = new Hono<{
	Variables: AppVariables;
}>().get((ctx) => {
	const title = "Form Submission";
	const content: Omit<UseCasePresentationProps, "children"> = {
		heading: title,
		description: "Page in Work In Progress"
	};
	return ctx.html(
		<FormSubmissionUseCasePage
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
