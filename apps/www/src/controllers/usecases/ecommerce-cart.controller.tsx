import { EcommerceCartUseCasePage } from "$pages/usecases/ecommerce-cart.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";
import { AppVariables } from "src";

export const ecommerceCartUseCaseController = new Hono<{
	Variables: AppVariables;
}>().get((ctx) => {
	const title = "Ecommerce Cart";
	const content: Omit<UseCasePresentationProps, "children"> = {
		heading: title,
		description: "Page in Work In Progress"
	};
	return ctx.html(
		<EcommerceCartUseCasePage
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
