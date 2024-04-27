import { MiddlewareHandler } from "hono";
import { AppVariables } from "src";

export const htmxMiddleware: MiddlewareHandler<{
	Variables: AppVariables;
}> = async ({ req, set }, next) => {
	if (req.header("hx-request")) {
		set("isHTMX", Boolean(req.header("hx-request")));
	}
	await next();
};
