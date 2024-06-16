import clsx from "clsx";

/**
 * @typedef {["index" | "noindex", "follow" | "nofollow"]} RobotsMetaData
 */

/**
 * Type for OpenGraph
 * @typedef {Object} OpenGraphMetaData
 * @property {string} title
 * @property {string=} [description]
 * @property {string} [type]
 * @property {string=} [url]
 * @property {string=} [site_name]
 * @property {string} [imageUrl]
 * @property {object} [image]
 * @property {string} image.url
 * @property {string=} image.secure_url
 * @property {string=} image.type
 * @property {string=} image.alt
 * @property {number=} image.width
 * @property {number=} image.height
 */

/**
 * Type for Seo props
 * @typedef {Object} SeoData
 * @property {string} title The page title
 * @property {string} [description] The page description
 * @property {string} [lang] The page language
 * @property {string} [dir] The page direction
 * @property {RobotsMetaData} [robots] Information about robots indexing. Contains two boolean properties: index and follow.
 * @property {OpenGraphMetaData} [openGraph] The openGraph meta data
 */

/**
 * Type for Page component props
 * @template {Object} T
 * @typedef PageProps
 * @type {import('$common/props').HTMLTagWithChildren & { isHTMX?: boolean, currentPath?: string, seo: SeoData, url?: URL, favicon?: string } & T}
 */

/**
 * @template {!Object} T
 * @typedef {Omit<PageProps<T>, "title" | "children">} PageContext
 */

/**
 * Component representing Open Graph meta tags
 * @param {OpenGraphMetaData} props
 */
function SeoOpenGraph({ title, image, imageUrl, ...restProps }) {
	return (
		<>
			{/* @ts-ignore */}
			<meta property="og:title" content={title} />
			{Object.entries(restProps).map(([key, value]) =>
				/* @ts-ignore */
				value ? <meta property={`og:${key}`} content={value} /> : null
			)}
			{image
				? Object.entries(image).map(([key, value]) =>
						// @ts-ignore
						value ? <meta property={`og:image:${key}`} content={value} /> : null
				  )
				: null}
			{/* @ts-ignore */}
			{imageUrl ? (
				// @ts-ignore
				<meta property="og:image" content={image} />
			) : null}
		</>
	);
}

/**
 * @param {PageProps<{}>} props
 */
export function Page(props) {
	const { children, seo, class: className, url, favicon, ...restProps } = props;

	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title safe>{seo.title}</title>
				{seo.description ? (
					<meta name="description" content={seo.description} />
				) : null}
				{seo.robots ? (
					<meta name="robots" content={seo.robots.join(", ")} />
				) : null}
				{seo.openGraph ? <SeoOpenGraph {...seo.openGraph} /> : null}
				{favicon ? (
					<link rel="shortcut icon" href={favicon} type="image/x-icon" />
				) : null}
				<link rel="stylesheet" href="/public/styles/index.css" />
				<script src="/public/script/app.js" defer></script>
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
				x-init={`
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
