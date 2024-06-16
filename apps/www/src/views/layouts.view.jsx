import { Page } from "$components/page.component";
import { SeoModifier } from "$components/seo-modifier.component";
import { Footer } from "$views/footer.view";
import { Header } from "$views/header.view";
import { LeftSidebar, RightSidebar, TableOfContents } from "$views/navigations.view";

export const defaultFavicon = "/public/icons/logo_2.svg";
export const asideLeftId = "aside-left";
export const asideRightId = "aside-right";

/**
 * @param {import("$components/page.component").PageProps<{}>} props
 */
export function RootLayout({
	children,
	class: className = "bg-slate-100 h-screen flex flex-col",
	seo,
	url,
	isHTMX,
	...restProps
}) {
	return isHTMX ? (
		<>
			<SeoModifier {...seo} />
			{children}
		</>
	) : (
		<Page class={className} favicon={defaultFavicon} seo={seo} {...restProps}>
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
						{ currentPath ? <LeftSidebar currentPage={currentPath} /> : null }
					</div>
				</aside>
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
					class="relative lg:py-4 xl:px-[10%] p-2 mx-auto w-full lg:col-span-3 xl:col-span-4 overflow-y-auto"
				>
					{children}
				</main>
				<aside
					title="Site Table of Contents"
					class="col-span-1 sticky top-0 pt-6 grow hidden lg:flex"
					id={asideRightId}
				>
					{ currentPath ? <RightSidebar currentPage={currentPath} /> : null }
				</aside>
			</div>
		</RootLayout>
	);
}
