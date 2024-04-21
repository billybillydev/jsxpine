import { Page } from "$components/page.component";
import { LeftSidebar, RightSidebar } from "$views/navigations.view";

/**
 * @type {import("$common/props").JSXComponent<import("$components/page.component").PageProps<{}>>}
 */
export function MainLayout(props) {
	const { currentUrl, children, ...restProps } = props;
	return (
		<Page {...restProps}>
			<div class="flex lg:grid lg:grid-cols-4 overflow-y-hidden relative">
				<aside
					title="Site Navigation"
					class="col-span-1 sticky top-0 py-6 overflow-hidden grow hidden lg:flex"
				>
					<div class="ml-auto overflow-y-auto">
						<LeftSidebar currentPage={currentUrl || ""} />
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
					class="py-4 px-8 w-full lg:col-span-2 overflow-y-auto scroll-smooth"
				>
					{children}
				</main>
				<aside
					title="Site Table of Contents"
					class="col-span-1 sticky top-0 pt-6 grow hidden lg:flex"
				>
					<RightSidebar currentPage={currentUrl || ""} />
				</aside>
			</div>
		</Page>
	);
}
