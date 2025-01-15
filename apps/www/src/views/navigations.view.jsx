import {
	SoloAccordion,
	SoloAccordionContent,
	SoloAccordionTrigger
} from "$components/accordion.component";
import { Icon } from "$components/icon.component";
import { capitalCase } from "change-case";
import clsx from "clsx";
import { SIDEBAR } from "src/config/navigation";

export const tableOfContentsId = "table-of-contents";
export const leftSidebarId = "left-sidebar";
export const rightSidebarId = "right-sidebar";
export const previousNextNavigationId = "previous-next-navigation";

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
			title={tableOfContents}
		>
			<h3>{tableOfContents}</h3>
			<ul class="flex flex-col gap-4">
				{menu.chapters?.map(({ slug, text }) => {
					return (
						<li
							class="text-slate-400 hover:text-slate-800 dark:text-slate-300 dark:hover:text-slate-100"
							x-bind:class={`currentUrl.hash === "#${slug}" && "text-slate-800 dark:text-slate-100 underline underline-offset-4"`}
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
					<SoloAccordionTrigger as="h2" class="font-semibold" x-capitalize safe>
						{item.header}
					</SoloAccordionTrigger>
					<SoloAccordionContent
						as="ul"
						class="gap-y-1"
						x-init={`
							currentUrl.pathname.includes("${item.header}") && open();
						`}
						hx-boost="true"
					>
						{[...item.menu].map(([_, menu]) => {
							return (
								<li
									class={
										"transition-colors border-l-2 hover:border-slate-400 hover:text-slate-500 dark:text-slate-100 dark:hover:text-slate-400"
									}
									x-data={`{ link: "${menu.link}" }`}
									x-bind:class={`{
										"border-slate-500 text-slate-500 dark:text-slate-400": link.includes(currentUrl.pathname.slice(1))
									}`}
									x-init={`
										if (link.includes(currentUrl.pathname.slice(1))) {
											$el.scrollIntoView();
										}	
									`}
									title={`${leftSidebarTitle} ${capitalCase(
										item.header
									)}: ${capitalCase(menu.text)}`}
								>
									<a
										href={menu.link}
										hx-target="main"
										hx-swap="innerHTML scroll:top"
										hx-select-oob={`#${rightSidebarId},#${previousNextNavigationId}`}
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

/**
 * @param {Object} props
 * @param {string} props.currentPath
 */
export function PreviousNextNavigation({ currentPath }) {
	const menuArray = SIDEBAR.reduce((acc, cur) => {
		const menuLinkAndText = Array.from(cur.menu).map(([key, value]) => ({
			link: value.link,
			text: value.text,
			section: capitalCase(value.link.split("/")[1])
		}));
		return [...acc, ...menuLinkAndText];
	}, /** @type {{ link: string; text: string, section: string }[]} */ ([]));

	const currentIndex = menuArray.findIndex((item) => item.link === currentPath);
	const previous = menuArray[currentIndex - 1];
	const next = menuArray[currentIndex + 1];

	return (
		<section
			id={previousNextNavigationId}
			class={clsx("flex flex-wrap items-center gap-x-2", {
				"justify-between": previous && next,
				"justify-start": previous && !next,
				"justify-end": !previous && next
			})}
			hx-boost="true"
		>
			{previous ? (
				<a
					class={"btn btn-secondary-inversed dark:btn-warning dark:text-slate-900 space-x-2 p-2 rounded max-w-[calc(50%_-_theme(spacing.2))]"}
					href={previous.link}
					hx-target="main"
					hx-swap="innerHTML scroll:top"
					hx-select-oob={`#${rightSidebarId},#${previousNextNavigationId}`}
				>
					<Icon name="arrow-left-s-line" size={6} />
					<div class={"flex flex-col"}>
						<span class={"text-sm"}>{previous.section}</span>
						<span>{previous.text}</span>
					</div>
				</a>
			) : null}
			{next ? (
				<a
					class={"btn btn-secondary-inversed dark:btn-warning dark:text-slate-900 space-x-2 p-2 rounded max-w-[calc(50%_-_theme(spacing.2))]"}
					href={next.link}
					hx-target="main"
					hx-swap="innerHTML scroll:top"
					hx-select-oob={`#${rightSidebarId},#${previousNextNavigationId}`}
				>
					<div class={"flex flex-col"}>
						<span class={"text-sm"}>{next.section}</span>
						<span>{next.text}</span>
					</div>
					<Icon name="arrow-right-s-line" size={6} />
				</a>
			) : null}
		</section>
	);
}
