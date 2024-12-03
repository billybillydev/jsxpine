import { AppContext } from "$config/server";
import { PaginationMoreUseCasePage } from "$pages/usecases/pagination-more.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";

export const paginationMoreUseCaseController = new Hono<AppContext>().get((ctx) => {
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
