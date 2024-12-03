import { AppContext } from "$config/server";
import { EcommerceCartUseCasePage } from "$pages/usecases/ecommerce-cart.page";
import { UseCasePresentationProps } from "$views/usecases.views";
import { Hono } from "hono";

export const ecommerceCartUseCaseController = new Hono<AppContext>().get((ctx) => {
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
