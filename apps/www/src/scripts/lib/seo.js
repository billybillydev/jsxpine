import { SITE } from "$config/seo";
import { defaultFavicon } from "$views/layouts.view";

/**
 * Class SEO Utils - Helper functions for SEO
 * @class SeoUtils
 */
export class SeoUtils {
	/**
	 * @param {string} title
	 * @param {string} description
	 * @param {import("hono").Context<import("$config/server").AppContext, "/", import("hono/types").BlankInput>} ctx
	 *
	 * @returns {{ openGraph: import("$components/page.component").OpenGraphMetaData, twitter: import("$components/page.component").TwitterMetaData }}
	 */
	static setOpenGraphAndTwitter(title, description, ctx) {
		return {
			openGraph: {
				title,
				description,
				type: "website",
				image: {
					url: ctx.var.url.origin.concat(defaultFavicon),
					secure_url: ctx.var.url.origin.concat(defaultFavicon),
					width: 150,
					height: 262
				},
				imageUrl: ctx.var.url.origin.concat(defaultFavicon),
				url: ctx.var.url.href,
				site_name: ctx.var.url.href
			},
			twitter: {
				name: {
					creator: SITE.twitter.author,
					site: SITE.twitter.author,
					title,
					description,
					image: ctx.var.url.origin.concat(defaultFavicon)
				},
				property: {
					url: ctx.var.url.href,
					domain: ctx.var.url.hostname
				}
			}
		};
	}
}
