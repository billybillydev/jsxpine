import {
	SoloAccordion,
	SoloAccordionContent,
	SoloAccordionTrigger
} from "$components/accordion.component";
import { capitalCase } from "change-case";
import { SIDEBAR } from "src/config/navigation";

export const tableOfContentsId = "table-of-contents";
export const leftSidebarId = "left-sidebar";
export const rightSidebarId = "right-sidebar";

/**
 * @param {{ currentPage: string }} props
 */
export function TableOfContents({ currentPage }) {
	const tableOfContents = "Table of Contents";
	const currentPathSections = currentPage.split("/");
	const currentPageMatch = [
		currentPathSections[1],
		currentPathSections[2]
	].join("/");
	const sidebarSection = SIDEBAR.find((item) =>
		item.menu.has(currentPageMatch)
	);
	const menu = sidebarSection?.menu.get(currentPageMatch);

	if (!menu?.chapters) {
		return null;
	}
	return (
		<section
			class="flex flex-col gap-y-4 mt-24"
			id={tableOfContentsId}
			x-data={`{
				hash: "",
				chapters: ${menu.chapters ? JSON.stringify(menu.chapters) : []},
				options: {
				root: document.querySelector('main'),
				rootMargin: "0px",
				threshold: 1,
				},
			}`}
			title={tableOfContents}
		>
			<h3>{tableOfContents}</h3>
			<ul class="flex flex-col gap-4">
				{menu.chapters?.map(({ slug, text }) => {
					return (
						<li
							class="text-slate-400 hover:text-slate-800"
							x-bind:class={`currentUrl.hash === "#${slug}" && "text-slate-600 underline underline-offset-4"`}
							title={`${tableOfContents}: ${text}`}
						>
							<a href={`#${slug}`} safe>
								{text}
							</a>
						</li>
					);
				})}
			</ul>
		</section>
	);
}

export function LeftSidebar() {
	const leftSidebarTitle = "Left Sidebar";

	return (
		<nav
			aria-labelledby="grid-left"
			class="lg:px-8 xl:px-12 py-4 flex flex-col gap-y-4"
			id={leftSidebarId}
			title={leftSidebarTitle}
		>
			{SIDEBAR.map((item) => (
				<SoloAccordion
					as="section"
					title={`${leftSidebarTitle} ${capitalCase(item.header)}`}
				>
					<SoloAccordionTrigger
						as="h2"
						class="font-semibold text-slate-700"
						x-capitalize
						safe
					>
						{item.header}
					</SoloAccordionTrigger>
					<SoloAccordionContent
						as="ul"
						class="gap-y-1"
						x-init="open()"
						hx-boost="true"
					>
						{[...item.menu].map(([_, menu]) => {
							return (
								<li
									class={
										"transition-colors border-l-2 hover:border-slate-400 text-slate-500 hover:text-slate-900"
									}
									x-data={`{ link: "${menu.link}" }`}
									x-bind:class={`{
										"border-slate-500 text-slate-900": link.includes(currentUrl.pathname.slice(1))
									}`}
									x-init={`
										if (link.includes(currentUrl.pathname.slice(1))) {
											$el.scrollIntoView();
										}	
									`}
									title={`${leftSidebarTitle} ${capitalCase(item.header)}: ${capitalCase(menu.text)}`}
								>
									<a
										href={menu.link}
										hx-target="main"
										hx-swap="innerHTML scroll:top"
										hx-select-oob={`#${rightSidebarId}`}
										class={"py-2 px-6 block"}
										safe
									>
										{menu.text}
									</a>
								</li>
							);
						})}
					</SoloAccordionContent>
				</SoloAccordion>
			))}
		</nav>
	);
}

/**
 * @param {{ currentPage: string }} props
 */
export function RightSidebar(props) {
	return (
		<nav aria-labelledby="grid-right" id={rightSidebarId} title="Right Sidebar">
			<div class="px-8">
				<TableOfContents {...props} />
			</div>
		</nav>
	);
}
