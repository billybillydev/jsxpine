import { AppContext } from "$config/server";
import { CoreIntroductionPage } from "$pages/core/introduction.page";
import { Hono } from "hono";

export const coreIntroductionController = new Hono<AppContext>().get((ctx) => {
	return ctx.html(<CoreIntroductionPage />);
});