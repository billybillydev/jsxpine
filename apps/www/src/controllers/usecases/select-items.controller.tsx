import { AppContext } from "$config/server";
import { SelectItemsUseCasePage } from "$pages/usecases/select-items.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";

export const selectItemsUseCaseController = new Hono<AppContext>().get((ctx) => {
	const title = "Select Items";
	const content: Omit<UseCasePresentationProps, "children"> = {
		heading: title,
		description: "Page in Work In Progress"
	};
	return ctx.html(
		<SelectItemsUseCasePage
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
