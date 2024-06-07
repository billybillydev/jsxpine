import { Page } from "$components/page.component";
import { SITE } from "$config/seo";
import { BrandLogo } from "$views/brand-logo.view";

export function HomePage() {
	const navItems = [
		{
			title: "Core",
			description: "Base colors, typography, shadows, and more.",
			url: "/about",
			img: "/Core.jpg"
		},
		{
			title: "Components",
			description: "The building blocks for our UI.",
			url: "/components",
			img: "/Components.jpg"
		},
		{
			title: "Patterns",
			description: "Common patterns for building interfaces.",
			url: "/patterns/introduction",
			img: "/Patterns.jpg"
		}
	];
	return (
		<Page seo={{ title: SITE.title }}>
			<div class="bg-slate-100 min-h-screen text-center">
				<header class="pt-12 pb-24 px-4 bg-gradient-to-br from-slate-700 to-black">
					<div class="relative flex items-center justify-center gap-x-2 p-4">
						<BrandLogo class="size-16 rounded-lg m-2 object-contain object-center" />
						<h1 class="text-white font-medium drop-shadow-sm" safe>{SITE.title}</h1>
					</div>
					<p class="text-lg mt-4 text-slate-300" safe>{SITE.description}</p>
				</header>
				<nav>
					<ul class="flex flex-wrap justify-center gap-4 container md:w-3/4 lg:w-full mx-auto text-left mt-12">
						{navItems.map(({ title, description, url, img }) => (
							<div class="w-full lg:w-auto flex items-center justify-center">
								<a
									href={url}
									class="flex flex-col bg-white rounded-md hover:-translate-y-1 hover:shadow-lg transition-all grow lg:grow-0 items-center p-4"
								>
									<h2 class="text-lg font-medium" safe>{title}</h2>
									<p class="text-slate-500" safe>{description}</p>
								</a>
							</div>
						))}
					</ul>
				</nav>
			</div>
		</Page>
	);
}
