import { Alpine as AlpineType } from "alpinejs";

declare global {
	var Alpine: AlpineType;

	interface Window {
		Alpine: AlpineType;
	}
}
