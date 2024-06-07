/**
 *
 * @param {import("$components/page.component").SeoData} params
 * @returns {import("alpinejs").AlpineComponent<{}>}
 */
export function seoData({ title, description, openGraph, robots }) {

	return {
		init() {
			this.currentUrl = new URL(window.location.href);
			const headElement = document.head;
			const titleHead = headElement.querySelector("title");
			const descriptionMetaHead = headElement.querySelector(
				'meta[name="description"]'
			);
			const robotsMetaHead = headElement.querySelector(
				'meta[name="robots"]'
			);
			if (titleHead && title) {
				titleHead.textContent = title;
			}
			if (descriptionMetaHead && description) {
				descriptionMetaHead.setAttribute("content", description);
			}
			if (robotsMetaHead && robots?.length) {
				robotsMetaHead.setAttribute("content", robots.join(", "));
			}
			if (openGraph) {
				Object.entries(openGraph).forEach(([key, value]) => {
					const openGraphMetaKey = headElement.querySelector(
						`meta[property="og:${key}"]`
					);
					if (openGraphMetaKey) {
						if (typeof value === "object") {
							Object.entries(value).forEach(([subKey, subValue]) => {
								const openGraphMetaSubKey = headElement.querySelector(
									`meta[property="og:${key}:${subKey}"]`
								);
                                if (openGraphMetaSubKey) {
                                    openGraphMetaSubKey.setAttribute("content", String(subValue));
                                }
							});
						} else {
							openGraphMetaKey.setAttribute("content", value);
						}
					}
				});
			}
		}
	};
}
