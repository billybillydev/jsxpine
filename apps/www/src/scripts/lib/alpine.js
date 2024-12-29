export class AlpineUtils {
	/**
	 * Convert object result from alpine data to string
	 * @param {Record<string, any>} obj
	 * @returns {string}
	 */
	static render(obj) {
		return `{ ${Object.entries(obj)
			.map(([key, value]) => {
				if (typeof value === "function") {
					return value.toString();
				}
				if (typeof value === "object") {
					return `${key}: ${this.render(value)}`;
				}
				if (typeof value === "string" && value === "") {
					return `${key}: ${JSON.stringify("")}`;
				}
				
				return `${key}: ${value}`;
			})
			.join(", ")} }`;
	}
}
