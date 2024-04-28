import clsx from "clsx";

/**
 * Type for Seo props
 * @typedef {Object} SeoData
 * @property {string} title The page title
 * @property {string} [description] The page description
 * @property {string} [lang] The page language
 * @property {string} [dir] The page direction
 */

/**
 * Type for Page component props
 * @template {Object} T
 * @typedef PageProps
 * @type {import('$common/props').HTMLTagWithChildren & { isHTMX?: boolean, currentUrl?: string, seo: SeoData} & T}
 */

/**
 * @template {!Object} T
 * @typedef {Omit<PageProps<T>, "title" | "children">} PageContext
 */

/**
 * @type {import("$common/props").JSXComponent<PageProps<{}>>}
 */
export function Page({ children, seo, class: className }) {
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{seo.title}</title>
				{seo.description ? (
					<meta name="description" content={seo.description} />
				) : null}
				<link rel="stylesheet" href="/public/styles/index.css" />
				<script src="/public/script/app.js" defer="true"></script>
				<script
					src="https://unpkg.com/htmx.org@1.9.11"
					integrity="sha384-0gxUXCCR8yv9FM2b+U3FDbsKthCI66oH5IA9fHppQq9DDMHuMauqq1ZHBpJxQ0J0"
					crossorigin="anonymous"
				></script>
				<script src="https://unpkg.com/htmx.org/dist/ext/response-targets.js"></script>
				<script src="https://unpkg.com/htmx.org/dist/ext/loading-states.js"></script>
			</head>
			<body
				class={clsx(className)}
				hx-ext="response-targets"
				x-data="{ currentUrl: new URL(window.location) }"
				x-effect={`
					navigation.addEventListener('navigate', ({ destination }) => {
						currentUrl = new URL(destination.url);
					});
				`}
			>
				{children}
			</body>
		</html>
	);
}
