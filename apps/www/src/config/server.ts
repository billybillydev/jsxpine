import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

const env = createEnv({
	server: {
		LOG_LEVEL: z.enum(["debug", "info", "warn", "error"]),
		NODE_ENV: z.enum(["development", "production"]),
		HOST_URL: z.string().min(1),
		PORT: z.string(),
	},
	runtimeEnv: process.env
});

export const serverConfig = {
	baseURL: new URL(env.HOST_URL + ":" + env.PORT),
	port: Number(env.PORT) || 3000,
};

export type AppVariables = {
	isHTMX?: boolean;
	currentPath: string;
	url: URL;
};

export type AppContext = AppContext;