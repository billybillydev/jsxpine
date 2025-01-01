import chalk from "chalk";

type LogLevel = "error" | "warn" | "info" | "success";

export class LoggerUtils {
    prettifyMessage(message: string, level: LogLevel = "info") {
        this.info("");
        this.info("");
        this[level](message);
        this.info("");
        this.info("");
    }

	warningMessage(...args: string[]) {
		args.forEach((arg) => this.warn(arg));
		this.warn("");
	}

    error(...args: unknown[]) {
		console.log(chalk.red(...args));
	};
    
	warn(...args: unknown[]) {
		console.log(chalk.yellow(...args));
	};
    
	info(...args: unknown[]) {
		console.log(chalk.cyan(...args));
	};
    
	success(...args: unknown[]) {
		console.log(chalk.green(...args));
	}
}