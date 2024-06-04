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
 * @property {object | string} [image]
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
 */

/**
 * Type for Page component props
 * @template {Object} T
 * @typedef PageProps
 * @type {import('$common/props').HTMLTagWithChildren & { isHTMX?: boolean, currentPath?: string, seo: SeoData, url?: URL } & T}
 */

/**
 * @template {!Object} T
 * @typedef {Omit<PageProps<T>, "title" | "children">} PageContext
 */
/**
 *
 * @type {import("$common/props").JSXComponent<OpenGraphMetaData>}
 */

function SeoOpenGraph(props) {
  const { title, image, ...restProps } = props;

  return (
    <>
      {/* @ts-ignore */}
      <meta property="og:title" content={title} />
      {Object.entries(restProps).map(([key, value]) =>
        /* @ts-ignore */
        value ? <meta property={`og:${key}`} content={value} /> : null
      )}
      {image && typeof image === "object"
        ? Object.entries(image).map(([key, value]) =>
            // @ts-ignore
            value ? <meta property={`og:image:${key}`} content={value} /> : null
          )
        : null}
      {/* @ts-ignore */}
      {image && typeof image === "string" ? (
        // @ts-ignore
        <meta property="og:image" content={image} />
      ) : null}
    </>
  );
}

/**
 * @type {import("$common/props").JSXComponent<PageProps<{}>>}
 */
export function Page(props) {
	const {
		children,
		seo,
		class: className,
		url,
		...restProps
	} = props;

	/** @type {OpenGraphMetaData} */
	const openGraph = {
		title: seo.title,
		description: seo.description,
		url: url?.href ?? "",
		site_name: "",
		type: "",
		image: url ? `${url.origin}/absolute/path/to/image` : ""
	};
	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>{seo.title}</title>
				{seo.description ? (
					<meta name="description" content={seo.description} />
				) : null}
				<SeoOpenGraph {...openGraph} />
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
