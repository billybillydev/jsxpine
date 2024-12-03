import { AppContext } from "$config/server";
import { PaginationsUseCasePage } from "$pages/usecases/paginations.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";

export const paginationsUseCaseController = new Hono<AppContext>().get((ctx) => {
	const title = "Paginations";
	const content: Omit<UseCasePresentationProps, "children"> = {
		heading: title,
		description: "Page in Work In Progress"
	};
	return ctx.html(
		<PaginationsUseCasePage
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
