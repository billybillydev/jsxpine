import { PaginationMoreUseCasePage } from "$pages/usecases/pagination-more.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";
import { AppVariables } from "src";

export const paginationMoreUseCaseController = new Hono<{
	Variables: AppVariables;
}>().get((ctx) => {
	const title = "Pagination: More";
	const content: Omit<UseCasePresentationProps, "children"> = {
		heading: title,
		description: "Page in Work In Progress"
	};
	return ctx.html(
		<PaginationMoreUseCasePage
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
