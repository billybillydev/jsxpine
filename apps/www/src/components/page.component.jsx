import clsx from "clsx";

/**
 * @typedef {["index" | "noindex", "follow" | "nofollow"]} RobotsMetaData
 */

/**
 * Type for OpenGraph metadata
 * @typedef {Object} OpenGraphMetaData
 * @property {string} title
 * @property {string} [description]
 * @property {string} [type]
 * @property {string} [url]
 * @property {string} [site_name]
 * @property {string} [imageUrl]
 * @property {object} [image]
 * @property {string=} image.type
 * @property {string=} image.alt
 * @property {number=} image.width
 * @property {number=} image.height
 */

/**
 * Type for Twitter metadata
 * @typedef {Object} TwitterMetaData
 * @property {object} name
 * @property {"summary" | "summary_large_image" | "photo" | "app" | "gallery" | "player" | "product" | "lead_generation"} [name.card="summary"]
 * @property {string} name.title
 * @property {string} name.creator
 * @property {string} name.site
 * @property {string} [name.description]
 * @property {string} [name.image]
 * @property {object} [property]
 * @property {string} [propert.domain]
 * @property {string} [propert.url]
 */

/**
 * Type for Seo props
 * @typedef {Object} SeoData
 * @property {string} title The page title
 * @property {string} [description] The page description
 * @property {string} [author] The website's author
 * @property {string} [lang] The page language
 * @property {string} [dir] The page direction
 * @property {RobotsMetaData} [robots] Information about robots indexing. Contains two boolean properties: index and follow.
 * @property {OpenGraphMetaData} [openGraph] The openGraph meta data
 * @property {TwitterMetaData} [twitter] The twitter meta data
 * @property {Object} [jsonLd] The jsonLd meta data
 */

/**
 * Type for Page component props
 * @template {Object} T
 * @typedef PageProps
 * @type {import('../common/props').HTMLTagWithChildren & { isHTMX?: boolean, currentPath?: string, seo: SeoData, url?: URL, favicon?: string } & T}
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
			<meta property="og:title" content={title} />
			{Object.entries(restProps).map(([key, value]) =>
				value ? <meta property={`og:${key}`} content={String(value)} /> : null
			)}
			{imageUrl ? <meta property="og:image" content={imageUrl} /> : null}
			{image
				? Object.entries(image).map(([key, value]) =>
						!!value ? (
							<meta property={`og:image:${key}`} content={String(value)} />
						) : null
				  )
				: null}
		</>
	);
}

/**
 * Component representing Twitter meta tags
 * @param {TwitterMetaData} props
 */
function SeoTwitter({ name, property }) {
	return (
		<>
			{Object.entries(name).map(([key, value]) =>
				value ? <meta name={`twitter:${key}`} content={String(value)} /> : null
			)}
			{property
				? Object.entries(property).map(([key, value]) =>
						value ? (
							<meta property={`twitter:${key}`} content={String(value)} />
						) : null
				  )
				: null}
		</>
	);
}

/**
 * @param {PageProps<{}>} props
 */
export function Page({
	children,
	seo,
	class: className,
	url,
	favicon,
	lang = "en",
	...restProps
}) {
	return (
		<html lang={lang}>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title safe>{seo.title}</title>
				{seo.description ? (
					<meta name="description" content={seo.description} />
				) : null}
				{seo.author ? <meta name="author" content={seo.author} /> : null}
				{seo.robots ? (
					<meta name="robots" content={seo.robots.join(", ")} />
				) : null}
				{seo.openGraph ? <SeoOpenGraph {...seo.openGraph} /> : null}
				{seo.twitter ? <SeoTwitter {...seo.twitter} /> : null}
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
				{seo.jsonLd ? (
					<script type="application/ld+json">
						{JSON.stringify(seo.jsonLd)}
					</script>
				) : null}
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
				{...restProps}
			>
				{children}
			</body>
		</html>
	);
}
