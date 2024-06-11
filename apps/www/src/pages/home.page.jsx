import { Icon } from "$components/icon.component";
import { Page } from "$components/page.component";
import { SITE } from "$config/seo";
import { BrandLogo } from "$views/brand-logo.view";

export function HomePage() {
	const navItems = [
		{
			title: "Core",
			description: "Installation, base colors, typography, shadows, and more.",
			url: "/core/introduction",
			icon: "planet-line"
		},
		{
			title: "Components",
			description: "The building blocks for our UI. Discover the fusion of JSX and Alpine JS.",
			url: "/components",
			icon: "code-s-slash-line"
		},
		{
			title: "Use Cases",
			description: "A set of interesting use cases where jsxpine can help you build better interfaces.",
			url: "/usecases/introduction",
			icon: "carousel-view"
		}
	];
	return (
		<Page seo={{ title: SITE.title }}>
			<div class="bg-slate-100 min-h-screen text-center">
				<header class="pt-12 pb-24 px-4 bg-gradient-to-br from-slate-700 to-black">
					<div class="relative flex items-center justify-center gap-x-2 p-4">
						<BrandLogo class="size-16 rounded-lg m-2 object-contain object-center" />
						<h1 class="text-white font-medium drop-shadow-sm" safe>
							{SITE.title}
						</h1>
					</div>
					<p class="text-lg mt-4 text-slate-300" safe>
						{SITE.description}
					</p>
				</header>
				<nav>
					<ul class="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-x-4 md:gap-y-0 container md:w-[90%] lg:w-3/4 mx-auto text-left mt-12">
						{navItems.map(({ title, description, url, icon }) => (
							<li class="grow flex items-center justify-center">
								<a
									href={url}
									class="flex flex-col bg-white rounded-md hover:-translate-y-1 hover:shadow-lg transition-all w-full h-full lg:grow-0 items-center p-4"
								>
									<h2 class="flex gap-x-4 items-center">
										<Icon name={icon} size={8}  />
										<span class={"text-lg font-medium"} safe>
											{title}
										</span>
									</h2>
									<p class="text-slate-500 text-center" safe>
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
