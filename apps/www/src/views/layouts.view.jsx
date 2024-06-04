import { Page } from "$components/page.component";
import { Footer } from "$views/footer.view";
import { Header } from "$views/header.view";
import { LeftSidebar, RightSidebar } from "$views/navigations.view";

/**
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageProps<{}>>}
 */
export function RootLayout(props) {
	const {
		children,
		class: className = "bg-slate-100 h-screen flex flex-col",
		...restProps
	} = props;
	return (
		<Page class={className} {...restProps}>
			<Header />
			{children}
			<Footer />
		</Page>
	);
}

/**
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageProps<{}>>}
 */
export function MainLayout(props) {
	const { currentPath, children, ...restProps } = props;
	return (
		<RootLayout {...restProps}>
			<div
				id="main-content"
				class="flex lg:grid lg:grid-cols-5 xl:grid-cols-6 overflow-y-hidden relative grow"
			>
				<aside
					title="Site Navigation"
					class="col-span-1 sticky top-0 py-6 overflow-hidden hidden lg:flex border-r"
				>
					<div class="overflow-y-auto w-full">
						<LeftSidebar currentPage={currentPath || ""} />
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
					class="col-span-1 sticky top-0 pt-6 grow hidden lg:flex border-l"
				>
					<RightSidebar currentPage={currentPath || ""} />
				</aside>
			</div>
		</RootLayout>
	);
}
