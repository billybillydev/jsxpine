import {
	SoloAccordion,
	SoloAccordionTrigger,
	SoloAccordionContent
} from "$components/accordion.component";
import { Icon } from "$components/icon.component";
import {
	Sidebar,
	SidebarContent,
	SidebarTrigger
} from "$components/sidebar.component";
import { ThemeToggle } from "$components/theme-toggle.component";
import { SIDEBAR } from "$config/navigation";
import { SITE } from "$config/seo";
import { BrandLogo } from "$views/brand-logo.view";
import {
	previousNextNavigationId,
	rightSidebarId
} from "$views/navigations.view";
import { SkipToContent } from "$views/skip-to-content.view";
import { capitalCase } from "change-case";

export const mobileSidebarId = "mobile-sidebar";
export const mobileNavigationId = "mobile-navigation";

export function Header() {
	return (
		<header class="p-3 backdrop-blur-md border-b z-[1]">
			<SkipToContent />
			<nav
				title="Top Navigation"
				class="max-w-7xl mx-auto flex justify-between items-center px-4"
			>
				<div class={"flex gap-x-4 items-center relative"}>
					<Sidebar id={mobileSidebarId} attrs={{ "@close": "close()" }}>
						<SidebarTrigger
							class={
								"p-2 rounded-lg bg-inherit text-inherit border border-inherit block lg:hidden"
							}
						>
							<Icon name="menu-fill" size={6} />
						</SidebarTrigger>
						<SidebarContent
							class={
								"w-3/4 px-4 md:w-1/2 bg-slate-100 dark:bg-[#0d1117] z-[99]"
							}
							position="left"
						>
							<MobileNavigation />
						</SidebarContent>
					</Sidebar>
					<a
						class="text-lg font-medium flex items-center justify-center"
						href="/"
					>
						<BrandLogo class="size-12 object-contain object-center" />
						<h1 class={"hidden md:block"} safe>
							{SITE.title}
						</h1>
					</a>
				</div>
				<div class={"hidden lg:flex gap-x-4"}>
					<a
						class={"btn btn-secondary-inversed px-2 py-1 rounded"}
						title="Docs"
						href="/core"
					>
						Docs
					</a>
					<a
						class={"btn btn-secondary-inversed px-2 py-1 rounded"}
						title="Theme"
						href="/theme"
					>
						Theme
					</a>
				</div>
				<div class="flex gap-x-4 items-center">
					{SITE.github && (
						<a
							title="Github"
							class="border border-transparent hover:border-foreground flex items-center justify-center p-2 rounded-lg transition-colors duration-300"
							target="_blank"
							href={"https://github.com/" + SITE.github}
						>
							<Icon name="github-line" size={6} />
						</a>
					)}
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}

export function MobileNavigation() {
	const mobileNavigationTitle = "Mobile Navigation";

	return (
		<nav
			aria-labelledby="grid-menu"
			class="lg:px-8 xl:px-12 py-4 flex flex-col gap-y-4"
			id={mobileNavigationId}
			title={mobileNavigationTitle}
		>
			{SIDEBAR.map((item) => (
				<SoloAccordion
					as="section"
					title={`${mobileNavigationTitle} ${capitalCase(item.header)}`}
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
									title={`${mobileNavigationTitle} ${capitalCase(
										item.header
									)}: ${capitalCase(menu.text)}`}
								>
									<a
										href={menu.link}
										hx-target="main"
										hx-swap="innerHTML scroll:top"
										hx-select-oob={`#${rightSidebarId},#${previousNextNavigationId}`}
										class={"py-2 px-6 block"}
										// x-on:click={`$manage("#${mobileSidebarId}").show = false`}
										x-on:click={`$dispatch('close')`}
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
