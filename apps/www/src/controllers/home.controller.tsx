import { HomePage } from "$pages/home.page";
import { Hono } from "hono";

export const homeController = new Hono()
.get((ctx) => ctx.html(<HomePage />))