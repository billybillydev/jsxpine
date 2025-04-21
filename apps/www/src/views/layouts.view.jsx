import { Page } from "$components/page.component";
import { SeoModifier } from "$components/seo-modifier.component";
import { SITE } from "$config/seo";
import { Footer } from "$views/footer.view";
import { Header } from "$views/header.view";
import {
	LeftSidebar,
	PreviousNextNavigation,
	RightSidebar
} from "$views/navigations.view";
import clsx from "clsx";

export const defaultFavicon = "/public/icons/logo_2.svg";
export const asideLeftId = "aside-left";
export const asideRightId = "aside-right";

/**
 * @param {import("$components/page.component").PageProps<{}>} props
 */
export function RootLayout({
	children,
	class:
		className = "h-screen flex flex-col bg-background text-foreground",
	seo,
	url,
	isHTMX,
	lang,
	...restProps
}) {
	return isHTMX ? (
		<>
			<SeoModifier {...seo} />
			{children}
		</>
	) : (
		<Page
			class={clsx(className)}
			favicon={defaultFavicon}
			seo={seo}
			lang={lang || SITE.defaultLanguage}
			{...restProps}
			x-bind:class={"$store.darkMode && 'dark'"}
		>
			<Header />
			{children}
			<Footer />
		</Page>
	);
}

/**
 * @param {import("$components/page.component").PageProps<{}>} props
 */
export function MainLayout(props) {
	const { currentPath, children, seo, isHTMX, ...restProps } = props;
	return isHTMX ? (
		<>
			<SeoModifier {...seo} />
			{children}
			{currentPath ? (
				<PreviousNextNavigation currentPath={currentPath} />
			) : null}
			{currentPath ? <RightSidebar currentPage={currentPath} /> : null}
		</>
	) : (
		<RootLayout {...restProps} seo={seo}>
			<div
				id="main-content"
				class="flex lg:grid lg:grid-cols-5 xl:grid-cols-6 overflow-y-hidden relative grow"
			>
				<aside
					title="Site Navigation"
					class="col-span-1 sticky top-0 py-6 overflow-hidden hidden lg:flex"
					id={asideLeftId}
				>
					<div class="overflow-y-auto w-full">
						{currentPath ? <LeftSidebar /> : null}
					</div>
				</aside>
				<div class="relative lg:py-4 xl:px-[10%] p-2 mx-auto w-full lg:col-span-3 xl:col-span-4 overflow-y-auto flex flex-col gap-y-6">
					<main
						x-ref="main"
						x-effect={`
							window.addEventListener('load', event => {
								if (currentUrl.hash) {
									const hashElement = document.querySelector(currentUrl.hash)
									hashElement.scrollIntoView();
								}
							})
						`}
						class={"grow"}
					>
						{children}
					</main>
					{currentPath ? (
						<PreviousNextNavigation currentPath={currentPath} />
					) : null}
				</div>
				<aside
					title="Site Table of Contents"
					class="col-span-1 sticky top-0 pt-6 grow hidden lg:flex"
					id={asideRightId}
				>
					{currentPath ? <RightSidebar currentPage={currentPath} /> : null}
				</aside>
			</div>
		</RootLayout>
	);
}
