import { SITE } from "$config/seo";
import { BrandLogo } from "$views/brand-logo.view";
import { SkipToContent } from "$views/skip-to-content.view";

export function Header() {
	return (
		<header class="p-3 bg-slate-100 bg-opacity-80 backdrop-blur-md border-b text-slate-900">
			<SkipToContent />
			<nav
				title="Top Navigation"
				class="max-w-7xl mx-auto flex justify-between items-center px-4"
			>
				<div>
					<a
						class="text-lg font-medium flex items-center justify-center"
						href="/"
					>
						<BrandLogo class="size-12 object-contain object-center" />
						<h1>{SITE.title}</h1>
					</a>
				</div>
				<div class="flex gap-2">
					{/* <button onclick="toggleDarkMode()">theme</button> */}
					{SITE.twitter && (
						<a
							title="Twitter"
							class="opacity-90 hover:opacity-100 hover:bg-blue-100 p-2 rounded-full transition-colors"
							href={"https://twitter.com/" + SITE.twitter}
						>
							<img class="h-7" src="/public/icons/twitter.svg" alt="twitter logo" />
						</a>
					)}
					{SITE.github && (
						<a
							title="Github"
							class="opacity-80 hover:opacity-100 hover:bg-slate-200 p-2 rounded-full transition-colors"
							href={"https://github.com/" + SITE.github}
						>
							<img class="h-7" src="/public/icons/github.svg" alt="github logo" />
						</a>
					)}
					{SITE.linkedin && (
						<a
							title="linkedin"
							class="opacity-80 hover:opacity-100 hover:bg-blue-50 p-2 rounded-full transition-colors"
							href={"https://linkedin.com/in/" + SITE.linkedin}
						>
							<img class="h-7" src="/public/icons/linkedin.svg" alt="linkedin logo" />
						</a>
					)}
				</div>
			</nav>
		</header>
	);
}
