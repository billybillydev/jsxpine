import { NotFoundPage } from "$pages/404.page";
import { Hono } from "hono";

export const notFoundController = new Hono().get(ctx => ctx.html(<NotFoundPage />))