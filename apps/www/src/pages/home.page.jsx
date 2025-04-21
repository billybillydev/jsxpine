import { Icon } from "$components/icon.component";
import { Page } from "$components/page.component";
import { SITE } from "$config/seo";
import { BrandLogo } from "$views/brand-logo.view";

export function HomePage() {
	/**
	 * @type {Array<{ title: string; description: string; url: string; icon: import("$components/icon.component").IconName }>}
	 */
	const navItems = [
		{
			title: "Core",
			description: "Installation, base colors, typography, shadows, and more.",
			url: "/core/introduction",
			icon: "ri.planet-line"
		},
		{
			title: "Components",
			description: "The building blocks for our UI. Discover the fusion of JSX and Alpine JS.",
			url: "/components",
			icon: "ri.code-s-slash-line"
		},
		{
			title: "Use Cases",
			description: "A set of interesting use cases where jsxpine can help you build better interfaces.",
			url: "/usecases",
			icon: "ri.carousel-view"
		}
	];
	return (
		<Page
			lang={SITE.defaultLanguage}
			seo={{ title: SITE.title, description: SITE.description }}
			x-bind:class={"$store.darkMode && 'dark'"}
		>
			<div class="min-h-screen text-center bg-gradient-to-br from-slate-200 to-white dark:from-slate-800 dark:to-black">
				<header class="pt-12 pb-24 px-4">
					<div class="relative flex items-center justify-center gap-x-2 p-4">
						<BrandLogo class="size-16 rounded-lg m-2 object-contain object-center" />
						<h1
							class="text-slate-900 dark:text-white font-medium drop-shadow-sm"
							safe
						>
							{SITE.title}
						</h1>
					</div>
					<p class="text-lg mt-4 text-slate-800 dark:text-slate-300" safe>
						{SITE.description}
					</p>
				</header>
				<nav>
					<ul class="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 md:gap-y-0 container md:w-[90%] lg:w-3/4 mx-auto text-left mt-12">
						{navItems.map(({ title, description, url, icon }) => (
							<li class="grow flex items-center justify-center">
								<a
									href={url}
									class="flex flex-col bg-white dark:bg-black border-2 border-black dark:border-white dark:text-white rounded-md hover:-translate-y-1 hover:shadow-lg transition-all w-full h-full lg:grow-0 items-center p-4"
								>
									<h2 class="flex gap-x-4 items-center">
										<Icon name={icon} size={8} />
										<span class={"text-lg font-medium"} safe>
											{title}
										</span>
									</h2>
									<p
										class="text-slate-700 dark:text-slate-200 text-center"
										safe
									>
										{description}
									</p>
								</a>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</Page>
	);
}
