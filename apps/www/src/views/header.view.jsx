import { Icon } from "$components/icon.component";
import { ThemeToggle } from "$components/theme-toggle.component";
import { SITE } from "$config/seo";
import { BrandLogo } from "$views/brand-logo.view";
import { SkipToContent } from "$views/skip-to-content.view";

export function Header() {
	return (
		<header class="p-3 backdrop-blur-md border-b">
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
						<h1 safe>{SITE.title}</h1>
					</a>
				</div>
				<div class="flex gap-2">
					{SITE.github && (
						<a
							title="Github"
							class="border-2 border-transparent hover:border-[#0d1117] dark:hover:border-slate-100 flex items-center justify-center p-2 rounded-lg transition-colors"
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
