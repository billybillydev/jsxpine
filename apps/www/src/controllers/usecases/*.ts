import { ecommerceCartUseCaseController } from "$controllers/usecases/ecommerce-cart.controller";
import { formSubmissionUseCaseController } from "$controllers/usecases/form-submission.controller";
import { introductionUseCaseController } from "$controllers/usecases/introduction.controller";
import { paginationMoreUseCaseController } from "$controllers/usecases/pagination-more.controller";
import { paginationsUseCaseController } from "$controllers/usecases/pagination.controller";
import { selectItemsUseCaseController } from "$controllers/usecases/select-items.controller";
import { stepProcessUseCaseController } from "$controllers/usecases/step-process.controller";
import { Hono } from "hono";
import { AppVariables } from "src";

export const useCasesController = new Hono<AppContext>()
	.get((ctx) => ctx.redirect("/usecases/introduction"))
	.route("/introduction", introductionUseCaseController)
	.route("/ecommerce-cart", ecommerceCartUseCaseController)
	.route("/form-submission", formSubmissionUseCaseController)
	.route("/paginations", paginationsUseCaseController)
	.route("/pagination-more", paginationMoreUseCaseController)
	.route("/select-items", selectItemsUseCaseController)
	.route("/step-process", stepProcessUseCaseController);
